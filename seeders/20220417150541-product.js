"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("products", [
      {
        email: "test@test.com",
        title: "SONY XPERIA 10 II 128GB BLACK",
        mainImage:
          "https://cdn.webshopapp.com/shops/266984/files/398163500/470x470x2/sony-xperia-10-ii-128gb-black.jpg",

        description:
          "In reasonable condition,128GB Storage,Charger included and 3 Months warranty",
        ratings: 3.9,
        price: 179.99,
        add_cart: 0,
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "a@a.com",
        title: "SONY GOLD EDITION 7.1 SURROUND HEADSET",
        mainImage:
          "https://cdn.webshopapp.com/shops/266984/files/395053309/470x470x2/sony-gold-edition-71-surround-headset.jpg",

        description:
          "Reasonable condition,incl USB Adapter and 1 Month Warranty",
        ratings: 4.2,
        price: 39.99,
        add_cart: 0,
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        email: "s@s.com",
        title: "SOLOGNAC WATERPROOF HUNTING BINOCULARS 100 10X42 BLACK",
        mainImage:
          "https://cdn.webshopapp.com/shops/266984/files/400245908/470x470x2/solognac-waterdichte-jachtverrekijker-100-10x42-zw.jpg",

        description: "Excellent condition,Without case and 1 Month Warranty",
        ratings: 4,
        price: 49.99,
        add_cart: 0,
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        email: "test@test.com",
        title: "BUDDHA TO BUDDHA 117 BRACELET BARBARA LINK SMALL SILVER",
        mainImage:
          "https://cdn.webshopapp.com/shops/266984/files/400751709/470x470x2/buddha-to-buddha-117-armband-barbara-link-small-zi.jpg",

        description: "Mint condition,Silver 925,Incl box and 1 Month Warranty",
        ratings: 4,
        price: 249.99,
        add_cart: 0,
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        email: "a@a.com",
        title: "Alloy Gold-plated Jewel Set  (Gold)",
        mainImage:
          "https://rukminim2.flixcart.com/image/880/1056/k55n0y80/jewellery-set/z/2/s/skr48715-sukkhi-original-imaemb3wc8vz7prw.jpeg?q=50",

        description: "Mint condition,Alloy gold ,Incl box and 1 Month Warranty",
        ratings: 4.3,
        price: 300.99,
        add_cart: 0,
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        email: "test@test.com",
        title: "Sweat shorts",
        mainImage:
          "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F4c%2Fb6%2F4cb69aea33b6f3195bcd91e1cd648d23e3319da6.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",

        description:
          "Sweat shorts in a cotton blend with a straight leg that hits just above the knee. The shorts have an elastic drawstring waistband, side welt pockets and an open back pocket. Softly brushed inside.",
        ratings: 4,
        price: 30.99,
        add_cart: 0,
        categoryId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        email: "s@s.com",
        title: "T-shirts",
        mainImage:
          "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fad%2F71%2Fad7178a5b732965ddf7f961be15b27482482c4d2.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_tshirtstanks_shortsleeve%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",

        description:
          "T-shirts in soft jersey with a round neckline and a slim fit.",
        ratings: 4,
        price: 19,
        add_cart: 0,
        categoryId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        email: "a@a.com",
        title: "Linen blend short dress",
        mainImage:
          "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F61%2F5a%2F615a16cbfaede3fee21ab9fece511f6cde0a16a3.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",

        description:
          "Short dress in a linen/cotton blend. Round neckline, concealed button placket, and drawstring waist with narrow ties. Back yoke and long balloon sleeves with narrow elastication at the cuffs. Unlined.",
        ratings: 4,
        price: 19,
        add_cart: 0,
        categoryId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        email: "test@test.com",
        title: "Pleated chiffon dress",
        mainImage:
          "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fb1%2Fce%2Fb1cea4ed7af6075b768184b54330379d15d0033f.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",

        description:
          "Calf-length dress made of delicate chiffon. This model has pintucks at the front, an opening with a concealed button at the front and dropped shoulders. Short, wide sleeves with wide, slit cuffs and covered buttons. A narrow elastic band and a tie belt at the waist. The skirt is pleated and slightly flared. lined",
        ratings: 4,
        price: 19,
        add_cart: 0,
        categoryId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        email: "test@test.com",
        title: "Office chair, Bomstad black",
        mainImage:
          "https://www.ikea.com/nl/nl/images/products/renberget-bureaustoel-bomstad-zwart__1020135_pe831794_s5.jpg?f=s",

        description:
          "Comfortable, light and easy to move. The shape of the armrests adds to comfort and the braking mechanism of the castors holds the chair in place when you stand up and releases when you sit down.",
        ratings: 4,
        price: 20,
        add_cart: 0,
        categoryId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "s@s.com",
        title: "Coffee table, black-brown",
        mainImage:
          "https://www.ikea.com/nl/nl/images/products/lack-salontafel-zwartbruin__0836233_pe601379_s5.jpg?f=s",

        description:
          "The LACK table in black-brown is easy to combine with other furniture. The honeycomb structure with paper filling adds strength to the table. The table remains light, so it can be moved easily.",
        ratings: 4,
        price: 16,
        add_cart: 0,
        categoryId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        email: "s@s.com",
        title:
          "3D Light Luxury Creative Metal Ginkgo Leaves Artistic Wall Clock Home Decor Art",
        mainImage:
          "https://img1.homary.com/filters:format(webp)/mall/file/2021/06/11/d46c5ee4dbde4a9ea1fe7bf8dbd2d6c7.jpg",

        description:
          "Metal wall clock with ginkgo leaves, which are a symbol of harmony. Crafted of iron and painted by hand, it has a golden circular clock face with black pointers. It is not only a decoration for your wall but also functions as a clock. Therefore, it is a perfect blend of style and functionality.",
        ratings: 4.2,
        price: 16,
        add_cart: 0,
        categoryId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        email: "a@a.com",
        title: "Vase",
        mainImage:
          "https://www.ikea.com/nl/en/images/products/gradvis-vase-pink__0524970_pe644685_s5.jpg?f=s",

        description:
          "Subdued colours, round shapes and beautiful grooves – GRADVIS vase gives your home a slightly softer and warmer feel. Enhance your favourite flowers or just let it stand beautifully on its own.",
        ratings: 4.8,
        price: 16,
        add_cart: 0,
        categoryId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "a@a.com",
        title: "DYPSIS LUTESCENS",
        mainImage:
          "https://www.ikea.com/nl/en/images/products/dypsis-lutescens-potted-plant-areca-palm__0653973_pe708202_s5.jpg?f=s",

        description:
          "This plant humidifies air and suits offices or homes with dry air. It’s sometimes called a butterfly palm due to the shape of the leaves and can boost your well-being and make the room more vibrant.",
        ratings: 3.2,
        price: 7,
        add_cart: 0,
        categoryId: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        email: "s@s.com",
        title: "HEDERA HELIX",
        mainImage:
          "https://www.ikea.com/nl/en/images/products/hedera-helix-potted-plant-ivy__0899328_pe594588_s5.jpg?f=s",

        description:
          "You can have this fast-growing climbing plant both indoors and outdoors, as long as it’s not freezing. ",
        ratings: 3.2,
        price: 6,
        add_cart: 0,
        categoryId: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("products", null, {});
  },
};
