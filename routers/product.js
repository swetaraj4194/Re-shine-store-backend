const { Router } = require("express");
const auth = require("../auth/middleware");
const Products = require("../models").product;
const Category = require("../models").category;
const Image = require("../models").image;
const router = new Router();

//get all the products
router.get("/", async (req, res, next) => {
  try {
    const items = await Products.findAll();
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

//category page:

router.get("/category/:id", async (req, res) => {
  const { id } = req.params;

  // console.log(id);
  if (isNaN(parseInt(id))) {
    return res.status(400).send({ message: "category id is not a number" });
  }

  const category = await Category.findByPk(id, {
    include: [Products],
    order: [[Products, "createdAt", "DESC"]],
  });

  if (category === null) {
    return res.status(404).send({ message: "category not found" });
  }

  res.status(200).send({ category });
});

///details page
router.get("/:id", async (req, res) => {
  const { id } = req.params;

  console.log(id);
  if (isNaN(parseInt(id))) {
    return res.status(400).send({ message: "Product id is not a number" });
  }

  const product = await Products.findByPk(id, {
    include: [Image],
    order: [[Image, "createdAt", "DESC"]],
  });

  if (product === null) {
    return res.status(404).send({ message: "Product not found" });
  }

  res.status(200).send({ message: "ok", product });
});

// /////////////////////////////////

// router.post("/:id/stories", auth, async (req, res) => {
//   const space = await Space.findByPk(req.params.id);
//   console.log(space);

//   if (space === null) {
//     return res.status(404).send({ message: "This space does not exist" });
//   }

//   if (!space.userId === req.user.id) {
//     return res
//       .status(403)
//       .send({ message: "You are not authorized to update this space" });
//   }

//   const { name, imageUrl, content } = req.body;

//   if (!name) {
//     return res.status(400).send({ message: "A story must have a name" });
//   }

//   const story = await Story.create({
//     name,
//     imageUrl,
//     content,
//     spaceId: space.id,
//   });

//   return res.status(201).send({ message: "Story created", story });
// });

// ////////////////////delete

// router.delete("/:spaceId/stories/:storyId", auth, async (req, res, next) => {
//   try {
//     const { spaceId, storyId } = req.params;
//     const story = await Story.findByPk(storyId, {
//       include: { model: Space, where: { id: spaceId }, right: true },
//     });

//     if (!story) {
//       res.status(404).send("Story not found");
//     } else {
//       // Check if this user is the owner of the space
//       if (story.space.userId !== req.user.id) {
//         return res
//           .status(401)
//           .send("You're not authorized to delete this story");
//       } else {
//         await story.destroy();

//         res.send({ message: "ok", storyId });
//       }
//     }
//   } catch (e) {
//     console.log(e);
//     next(e);
//   }
// });

// //Updating space

// router.patch("/:id", auth, async (req, res) => {
//   const space = await Space.findByPk(req.params.id);
//   // if (!space.userId === req.user.id) {
//   //   return res
//   //     .status(403)
//   //     .send({ message: "You are not authorized to update this space" });
//   // }

//   if (space.userId !== req.user.id) {
//     return res
//       .status(403)
//       .send({ message: "You are not authorized to update this space" });
//   }
//   const { title, description, backgroundColor, color } = req.body;

//   await space.update({ title, description, backgroundColor, color });

//   return res.status(200).send({ space });
// });

module.exports = router;
