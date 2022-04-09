const bcrypt = require("bcrypt");
const { Router } = require("express");
const { toJWT } = require("../auth/jwt");
const authMiddleware = require("../auth/middleware");
const User = require("../models/").user;
const Space = require("../models/").space;
const Story = require("../models/").story;
const { SALT_ROUNDS } = require("../config/constants");

const router = new Router();

router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .send({ message: "Please provide both email and password" });
    }

    const user = await User.findOne({
      where: { email },
      include: {
        model: Space,
        include: [Story],
        order: [[Story, "createdAt", "DESC"]],
      },
    });

    // const space = await Space.findOne({
    //   where: { userId: user.id },
    //   include: [Story],
    // });

    if (!user || !bcrypt.compareSync(password, user.password)) {
      return res.status(400).send({
        message: "User with that email not found or password incorrect",
      });
    }

    delete user.dataValues["password"]; // don't send back the password hash
    const token = toJWT({ userId: user.id });

    return res.status(200).send({
      token,
      name: user.name,
      email: user.email,
      space: user.spaces[0], // Just select the first space
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

router.post("/signup", async (req, res) => {
  const { email, password, name } = req.body;
  if (!email || !password || !name) {
    return res.status(400).send("Please provide an email, password and a name");
  }

  try {
    const newUser = await User.create({
      email,
      password: bcrypt.hashSync(password, SALT_ROUNDS),
      name, // - get the users email & name using only their token
    });

    const newSpace = await Space.create({
      title: `${newUser.name}'s space`,
      description: null,
      backgroundColor: "#FFFFFF",
      color: "#000000",
      userId: newUser.id,
    });

    delete newUser.dataValues["password"]; // don't send back the password hash

    const token = toJWT({ userId: newUser.id });
    // const user = newUser.dataValues;
    // const space = newSpace.dataValues;

    // res.status(201).json({ token, user, space });

    res.status(201).json({
      token,
      ...newUser.dataValues,
      space: { ...newSpace.dataValues, stories: [] },
    });
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
    include: {
      model: Space,
      include: [Story],
      order: [[Story, "createdAt", "DESC"]],
    },
  });
  // don't send back the password hash
  delete user.dataValues["password"];
  res
    .status(200)
    .send({ name: user.name, email: user.email, space: user.spaces[0] });
});

module.exports = router;
