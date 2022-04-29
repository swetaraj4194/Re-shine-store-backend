"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("products", [
      {
        title: "SONY XPERIA BLACK--mobile-phone",
        mainImage:
          "https://cdn.webshopapp.com/shops/266984/files/398163500/470x470x2/sony-xperia-10-ii-128gb-black.jpg",

        description:
          "In reasonable condition,128GB Storage,Charger included and 3 Months warranty",
        status: "Fair",
        minimumBid: 180,
        ratings: 3.9,
        price: 179.99,
        add_cart: 0,
        categoryId: 1,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "SONY GOLD EDITION 7.1 SURROUND HEADSET",
        mainImage:
          "https://cdn.webshopapp.com/shops/266984/files/395053309/470x470x2/sony-gold-edition-71-surround-headset.jpg",

        description:
          "Reasonable condition,incl USB Adapter and 1 Month Warranty",
        status: "Good",
        minimumBid: 41,
        ratings: 4.2,
        price: 39.99,
        add_cart: 0,
        categoryId: 1,
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        title: "SOLOGNAC WATERPROOF HUNTING BINOCULARS BLACK",
        mainImage:
          "https://cdn.webshopapp.com/shops/266984/files/400245908/470x470x2/solognac-waterdichte-jachtverrekijker-100-10x42-zw.jpg",

        description: "Excellent condition,Without case and 1 Month Warranty",
        status: "Good",
        minimumBid: 51,
        ratings: 3.5,
        price: 49.99,
        add_cart: 0,
        categoryId: 1,
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        title: " BRACELET BARBARA SILVER-jewelary",
        mainImage:
          "https://cdn.webshopapp.com/shops/266984/files/400751709/470x470x2/buddha-to-buddha-117-armband-barbara-link-small-zi.jpg",

        description: "Mint condition,Silver 925,Incl box and 1 Month Warranty",
        status: "New",
        minimumBid: 261,
        ratings: 4.6,
        price: 249.99,
        add_cart: 0,
        categoryId: 2,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        title: "Alloy Gold-plated Jewel Set (Gold)",
        mainImage:
          "https://rukminim2.flixcart.com/image/880/1056/k55n0y80/jewellery-set/z/2/s/skr48715-sukkhi-original-imaemb3wc8vz7prw.jpeg?q=50",

        description: "Mint condition,Alloy gold ,Incl box and 1 Month Warranty",
        status: "New",
        minimumBid: 302,
        ratings: 4.3,
        price: 300.99,
        add_cart: 0,
        categoryId: 2,
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        title: "Sweat shorts",
        mainImage:
          "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F4c%2Fb6%2F4cb69aea33b6f3195bcd91e1cd648d23e3319da6.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",

        description:
          "Sweat shorts in a cotton blend with a straight leg that hits just above the knee. The shorts have an elastic drawstring waistband, side welt pockets and an open back pocket. Softly brushed inside.",
        status: "Fair",
        minimumBid: 32,
        ratings: 2.5,
        price: 30.99,
        add_cart: 0,
        categoryId: 3,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        title: "T-shirts",
        mainImage:
          "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fad%2F71%2Fad7178a5b732965ddf7f961be15b27482482c4d2.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_tshirtstanks_shortsleeve%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",

        description:
          "T-shirts in soft jersey with a round neckline and a slim fit.",
        status: "Good",
        minimumBid: 20,
        ratings: 4.8,
        price: 19,
        add_cart: 0,
        categoryId: 3,
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        title: "Linen blend short dress",
        mainImage:
          "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F61%2F5a%2F615a16cbfaede3fee21ab9fece511f6cde0a16a3.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",

        description:
          "Short dress in a linen/cotton blend. Round neckline, concealed button placket, and drawstring waist with narrow ties. Back yoke and long balloon sleeves with narrow elastication at the cuffs. Unlined.",
        status: "Fair",
        minimumBid: 20,
        ratings: 4.3,
        price: 19,
        add_cart: 0,
        categoryId: 4,
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        title: "Pleated chiffon dress",
        mainImage:
          "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fb1%2Fce%2Fb1cea4ed7af6075b768184b54330379d15d0033f.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",

        description:
          "Calf-length dress made of delicate chiffon. This model has pintucks at the front, an opening with a concealed button at the front and dropped shoulders. Short, wide sleeves with wide, slit cuffs and covered buttons. A narrow elastic band and a tie belt at the waist. The skirt is pleated and slightly flared. lined",
        status: "Good",
        minimumBid: 20,
        ratings: 3.9,
        price: 19,
        add_cart: 0,
        categoryId: 4,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        title: "Office chair, Bomstad black",
        mainImage:
          "https://www.ikea.com/nl/nl/images/products/renberget-bureaustoel-bomstad-zwart__1020135_pe831794_s5.jpg?f=s",

        description:
          "Comfortable, light and easy to move. The shape of the armrests adds to comfort and the braking mechanism of the castors holds the chair in place when you stand up and releases when you sit down.",
        status: "Good",
        minimumBid: 20,
        ratings: 4,
        price: 20,
        add_cart: 0,
        categoryId: 5,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Coffee table, black-brown",
        mainImage:
          "https://www.ikea.com/nl/nl/images/products/lack-salontafel-zwartbruin__0836233_pe601379_s5.jpg?f=s",

        description:
          "The LACK table in black-brown is easy to combine with other furniture. The honeycomb structure with paper filling adds strength to the table. The table remains light, so it can be moved easily.",

        status: "Good",
        minimumBid: 20,
        ratings: 4.2,
        price: 16,
        add_cart: 0,
        categoryId: 5,
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        title: "3D Light Luxury Artistic Wall Clock Home Decor Art",
        mainImage:
          "https://img1.homary.com/filters:format(webp)/mall/file/2021/06/11/d46c5ee4dbde4a9ea1fe7bf8dbd2d6c7.jpg",

        description:
          "Metal wall clock with ginkgo leaves, which are a symbol of harmony. Crafted of iron and painted by hand, it has a golden circular clock face with black pointers. It is not only a decoration for your wall but also functions as a clock. Therefore, it is a perfect blend of style and functionality.",
        status: "Good",
        minimumBid: 20,
        ratings: 4.2,
        price: 18,
        add_cart: 0,
        categoryId: 6,
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        title: "Vase",
        mainImage:
          "https://www.ikea.com/nl/en/images/products/gradvis-vase-pink__0524970_pe644685_s5.jpg?f=s",

        description:
          "Subdued colours, round shapes and beautiful grooves – GRADVIS vase gives your home a slightly softer and warmer feel. Enhance your favourite flowers or just let it stand beautifully on its own.",
        status: "Good",
        minimumBid: 20,
        ratings: 4.8,
        price: 16,
        add_cart: 0,
        categoryId: 6,
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "DYPSIS LUTESCENS",
        mainImage:
          "https://www.ikea.com/nl/en/images/products/dypsis-lutescens-potted-plant-areca-palm__0653973_pe708202_s5.jpg?f=s",

        description:
          "This plant humidifies air and suits offices or homes with dry air. It’s sometimes called a butterfly palm due to the shape of the leaves and can boost your well-being and make the room more vibrant.",
        status: "Fair",
        minimumBid: 10,
        ratings: 3.2,
        price: 7,
        add_cart: 0,
        categoryId: 7,
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        title: "HEDERA HELIX-plant",
        mainImage:
          "https://www.ikea.com/nl/en/images/products/hedera-helix-potted-plant-ivy__0899328_pe594588_s5.jpg?f=s",

        description:
          "You can have this fast-growing climbing plant both indoors and outdoors, as long as it’s not freezing. ",
        status: "Fair",
        minimumBid: 8,
        ratings: 3.2,
        price: 6,
        add_cart: 0,
        categoryId: 7,
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        title: "BEDSHEET",
        mainImage:
          "https://www.hema.nl/dw/image/v2/BBRK_PRD/on/demandware.static/-/Sites-HEMA-master-catalog/default/dw67667d2f/product/05710083_02_001_01.jpg?sw=529&sh=600&sm=fit",

        description: "duvet cover - soft cotton - ocher yellow ",
        status: "Good",
        minimumBid: 8,
        ratings: 3.2,
        price: 6,
        add_cart: 0,
        categoryId: 8,
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        title: "APPLE MacBook Silver M1 256 GB-laptop",
        mainImage:
          "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_78976636/fee_786_587_png",

        description:
          "The thin and powerful MacBook Air is a 13-inch laptop with a Retina display. This screen provides unprecedented sharpness and accurate color reproduction, so you can enjoy your favorite movies, series or photos",
        status: "New",
        minimumBid: 720,
        ratings: 3.2,
        price: 700,
        add_cart: 0,
        categoryId: 1,
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        title: "LG 65NANO866PA tv",
        mainImage:
          "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_87365210/fee_786_587_png",

        description:
          "In addition to extra bright and dark images, the home cinema 65NANO866PA offers you an impressive gaming experience and surround sound. ",

        status: "New",
        minimumBid: 520,
        ratings: 3.2,
        price: 500,
        add_cart: 0,
        categoryId: 1,
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "TANISHQ DIAMOND JEWELLERY DESIGNS WITH",
        mainImage:
          "https://i.pinimg.com/originals/73/e9/41/73e941d914656bbea164e0401e662321.jpg",

        description: "Beautiful diamond set ",
        status: "New",
        minimumBid: 910,
        ratings: 3.2,
        price: 900,
        add_cart: 0,
        categoryId: 3,
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("products", null, {});
  },
};
