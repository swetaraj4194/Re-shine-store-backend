const { Router } = require("express");
const authMiddleware = require("../auth/middleware");
const Product = require("../models").product;
const Category = require("../models").category;
const Image = require("../models").image;
const User = require("../models").user;
const Bid = require("../models").bid;
const Review = require("../models").review;
const router = new Router();

//get all the products
router.get("/", async (req, res, next) => {
  try {
    const items = await Product.findAll();
    console.log(items);
    if (!items) {
      res.status(404).send("user not found!");
    } else {
      res.json(items);
    }
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

//get product category wise:

router.get("/category/:id", async (req, res) => {
  const { id } = req.params;

  // console.log(id);
  if (isNaN(parseInt(id))) {
    return res.status(400).send({ message: "category id is not a number" });
  }

  const category = await Category.findByPk(id, {
    include: [Product],
    order: [[Product, "createdAt", "DESC"]],
  });

  if (category === null) {
    return res.status(404).send({ message: "category not found" });
  }

  res.status(200).send({ category });
});

/// get product details with product id
router.get("/:id", async (req, res) => {
  const { id } = req.params;

  console.log(id);
  if (isNaN(parseInt(id))) {
    return res.status(400).send({ message: "Product id is not a number" });
  }

  const product = await Product.findByPk(id, {
    include: [
      {
        model: Image,
      },
      {
        model: Bid,
      },
      {
        model: Image,
      },
      {
        model: Review,
      },
    ],

    // order: [[Image, "createdAt", "DESC"]],
  });

  if (product === null) {
    return res.status(404).send({ message: "Product not found" });
  }

  res.status(200).send({ message: "ok", product });
});

// get seller details for buying

router.get("/buy/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await Product.findOne({
      where: { id },
      include: [
        {
          model: User,
        },
      ],
    });

    if (!product) {
      res.status(404).send("Seller not found");
    }

    res.send({ message: "ok", product });
  } catch (e) {
    console.log(e);
    next(e);
  }
});

//post product to sell

router.post("/new", authMiddleware, async (req, res) => {
  const { title, description, price, mainImage, categoryId, amount, images } =
    req.body;

  if (!title) {
    return res.status(400).send({ message: "A product must have a title" });
  }

  if (!price || price <= 0) {
    return res
      .status(400)
      .send({ message: "A product must have a price larger than 0" });
  }

  if (!mainImage) {
    return res
      .status(400)
      .send({ message: "A product must have a main image" });
  }

  if (!categoryId) {
    return res.status(400).send({ message: "A product must have a category" });
  }

  const newProduct = await Product.create({
    title,
    description,
    price,
    mainImage,
    categoryId,
    ratings: 0,
    userId: req.user.id,
    add_cart: 0,
  });

  // const imagesWithProductId = images
  //   .map((image) => ({
  //     image: image,
  //     productId: newProduct?.id,
  //   }));

  const imagesWithProductId = images
    .filter((image) => image !== "")
    .map((image) => ({
      image: image,
      productId: newProduct?.id,
    }));

  const newImages = await Image.bulkCreate(imagesWithProductId);

  // const newImages = await Image.create({ image, productId: newProduct.id });

  const newBid = await Bid.create({
    email: req.user.email,
    amount: amount || 0,
    userId: req.user.id,
    productId: newProduct.id,
  });

  return res.status(201).send({
    message: "Product created",
    product: {
      ...newProduct.dataValues,
      images: newImages,
      bid: newBid,
    },
  });
});

///delete post
router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;

    const productToDelete = await Product.findByPk(parseInt(id));
    // console.log("product to delete", productToDelete);

    if (!productToDelete) {
      return res.status(404).send("no product found");
    }

    await productToDelete.destroy();

    res.send({
      message: `deleted product with id ${id}`,
      // imageDeleted,
    });
  } catch (e) {
    res.status(500).send({ error: e });
    console.log(e.message);
    next(e);
  }
});

// update user details
router.patch("/:id", authMiddleware, async (req, res) => {
  const user = await User.findByPk(req.params.id);

  if (user.email !== req.user.email) {
    return res
      .status(403)
      .send({ message: "You are not authorized to update this profile" });
  }
  const { name, email, phone } = req.body;

  const result = await user.update({ name, email, phone });

  return res.status(200).send(result);
});

//post bid amount

router.post("/bids/:id", authMiddleware, async (req, res) => {
  const product = await Product.findByPk(req.params.id);

  const ProductWithBid = await Product.findByPk(product.id, { include: Bid });

  if (product === null) {
    return res.status(404).send({ message: "This product does not exist" });
  }
  if (!product.id === req.user.id) {
    return res
      .status(403)
      .send({ message: "You are not authorized to update this user" });
  }
  const { amount } = req.body;

  const maxBid = Math.max.apply(
    Math,
    ProductWithBid.bids.map(function (object) {
      return object.amount;
    })
  );

  if (amount < maxBid) {
    return res
      .status(404)
      .send({ message: "Your bid amount should be higher than other bids" });
  }

  const newBid = await Bid.create({
    email: req.user.email,
    amount,
    userId: req.user.id,
    productId: product.id,
  });

  return res.status(201).send({ message: "Bid added", newBid });
});

//post comment
router.post("/comment/:id", authMiddleware, async (req, res) => {
  const product = await Product.findByPk(req.params.id);

  const ProductWithComment = await Product.findByPk(product.id, {
    include: Review,
  });

  if (product === null) {
    return res.status(404).send({ message: "This product does not exist" });
  }
  if (!product.id === req.user.id) {
    return res
      .status(403)
      .send({ message: "You are not authorized to update this user" });
  }
  const { review } = req.body;

  const newReview = await Review.create({
    name: req.user.name,
    review,
    userId: req.user.id,
    productId: product.id,
  });

  return res.status(201).send({ message: "Comment added", newReview });
});

module.exports = router;
