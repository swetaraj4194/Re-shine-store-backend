const bcrypt = require("bcrypt");
const { Router } = require("express");
const { toJWT } = require("../auth/jwt");
const authMiddleware = require("../auth/middleware");
const User = require("../models/").user;
const Product = require("../models").product;
const Image = require("../models").image;
const Bid = require("../models").bid;
const { SALT_ROUNDS } = require("../config/constants");

const router = new Router();

//login endpoint

router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .send({ message: "Please provide both email and password" });
    }

    // const user = await User.findOne({ where: { email } });

    // const user = await User.findOne({
    //   where: { email },
    //   include: [
    //     { model: Bid, include: [Product] },
    //     {
    //       model: Product,
    //       include: [Image],
    //       order: [[Image, "createdAt", "DESC"]],
    //     },
    //   ],
    // });

    const user = await User.findOne({
      where: { email },
      include: [
        { model: Bid, include: [Product] },
        {
          model: Product,
          include: [{ model: Image }, { model: Bid }],
          order: [[Image, "createdAt", "DESC"]],
        },
      ],
    });

    if (!user || !bcrypt.compareSync(password, user.password)) {
      return res.status(400).send({
        message: "User with that email not found or password incorrect",
      });
    }

    delete user.dataValues["password"]; // don't send back the password hash
    const token = toJWT({ userId: user.id });
    // return res.status(200).send({ token, ...user.dataValues, user });

    return res.status(200).send({
      token,
      id: user.id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      product: user.products, // Just select the first space
      bid: user.bids,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

////signup endpoint

router.post("/signup", async (req, res) => {
  const { email, password, name, phone } = req.body;
  if (!email || !password || !name) {
    return res.status(400).send("Please provide an email, password and a name");
  }

  try {
    const newUser = await User.create({
      email,
      password: bcrypt.hashSync(password, SALT_ROUNDS),
      name,
      phone,
    });

    delete newUser.dataValues["password"]; // don't send back the password hash

    const token = toJWT({ userId: newUser.id });

    res.status(201).json({ token, ...newUser.dataValues });
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") {
      return res
        .status(400)
        .send({ message: "There is an existing account with this email" });
    }

    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

// The /me endpoint can be used to:

// - get the users email & name using only their token
// - checking if a token is (still) valid
router.get("/me", authMiddleware, async (req, res) => {
  const user = await User.findOne({
    where: { id: req.user.id },
    include: [
      { model: Bid, include: [Product] },
      {
        model: Product,
        include: [{ model: Image }, { model: Bid }],
        order: [[Image, "createdAt", "DESC"]],
      },
    ],
  });

  // don't send back the password hash
  delete req.user.dataValues["password"];
  res.status(200).send({
    id: user.id,
    name: user.name,
    email: user.email,
    phone: user.phone,
    product: user.products,
    bid: user.bids,
  });

  // return res.status(200).send({ ...req.user.dataValues, user });
});

module.exports = router;
