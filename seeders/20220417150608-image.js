"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("images", [
      {
        image:
          "https://cdn.webshopapp.com/shops/266984/files/398163535/470x470x2/sony-xperia-10-ii-128gb-black.jpg",
        productId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        image:
          "https://cdn.webshopapp.com/shops/266984/files/398163557/470x470x2/sony-xperia-10-ii-128gb-black.jpg",
        productId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        image:
          "https://cdn.webshopapp.com/shops/266984/files/398163623/470x470x2/sony-xperia-10-ii-128gb-black.jpg",
        productId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        image:
          "https://cdn.webshopapp.com/shops/266984/files/395053326/470x470x2/sony-gold-edition-71-surround-headset.jpg",
        productId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        image:
          "https://cdn.webshopapp.com/shops/266984/files/400245929/470x470x2/solognac-waterdichte-jachtverrekijker-100-10x42-zw.jpg",
        productId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        image:
          "https://cdn.webshopapp.com/shops/266984/files/400245949/470x470x2/solognac-waterdichte-jachtverrekijker-100-10x42-zw.jpg",
        productId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        image:
          "https://cdn.webshopapp.com/shops/266984/files/400751726/470x470x2/buddha-to-buddha-117-armband-barbara-link-small-zi.jpg",
        productId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        image:
          "https://cdn.webshopapp.com/shops/266984/files/400751781/470x470x2/buddha-to-buddha-117-armband-barbara-link-small-zi.jpg",
        productId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        image:
          "https://cdn.webshopapp.com/shops/266984/files/400751787/470x470x2/buddha-to-buddha-117-armband-barbara-link-small-zi.jpg",
        productId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        image:
          "https://rukminim2.flixcart.com/image/880/1056/l1fc0i80/jewellery-set/w/o/9/-original-imagczvpeggg82tg.jpeg?q=50",
        productId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        image:
          "https://rukminim2.flixcart.com/image/880/1056/kc9eufk0pkrrdj/jewellery-set/6/y/u/2724ngldpf1000-sukkhi-original-imaftjr2nfnqxwju.jpeg?q=50",
        productId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        image:
          "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F94%2F9d%2F949d954c44f097ed61f97a1fecfb2291cebfddbf.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
        productId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        image:
          "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F3b%2F09%2F3b094ef04093da51513bee04ab524fcf13f2a18e.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
        productId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        image:
          "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F78%2F48%2F7848272c06927bb7fa83a37c991a0fe06baa79a8.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_tshirtstanks_shortsleeve%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
        productId: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        image:
          "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F4d%2F04%2F4d044054898e31c3ed288d892f66a68b5e908372.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_tshirtstanks_shortsleeve%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
        productId: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        image:
          "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F82%2F7e%2F827e6e8d111d54e9f92ba8ecb2970d6e840c18a8.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
        productId: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        image:
          "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F29%2F7f%2F297faddff936aa38a46727a76f876d2f40838155.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
        productId: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        image:
          "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F9e%2Feb%2F9eebb45277c7006ba8d5996d3b696c0baa75534f.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
        productId: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        image:
          "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F08%2F75%2F0875cc90e34c98250dc48c2575647077d9131090.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_dresses_mididresses%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
        productId: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        image:
          "https://www.ikea.com/nl/nl/images/products/renberget-bureaustoel-bomstad-zwart__1025981_pe834276_s5.jpg?f=s",
        productId: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        image:
          "https://www.ikea.com/nl/nl/images/products/renberget-bureaustoel-bomstad-zwart__1025980_pe834275_s5.jpg?f=s",
        productId: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        image:
          "https://www.ikea.com/nl/nl/images/products/lack-salontafel-zwartbruin__57537_pe163119_s5.jpg?f=s",
        productId: 11,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        image:
          "https://www.ikea.com/nl/nl/images/products/lack-salontafel-zwartbruin__0258008_pe401976_s5.jpg?f=m",
        productId: 11,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        image:
          "https://img1.homary.com/filters:format(webp)/mall/file/2021/06/11/8d086ea1e8ab4b6bb93973109f93fc0c.jpg",
        productId: 12,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        image:
          "https://www.ikea.com/nl/en/images/products/gradvis-vase-pink__0554616_pe659806_s5.jpg?f=s",
        productId: 13,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        image:
          "https://www.ikea.com/nl/en/images/products/gradvis-vase-pink__0701736_ph152713_s5.jpg?f=s",
        productId: 13,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        image:
          "https://www.ikea.com/nl/en/images/products/dypsis-lutescens-potted-plant-areca-palm__0443890_pe594605_s5.jpg?f=s",
        productId: 14,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        image:
          "https://www.ikea.com/nl/en/images/products/dypsis-lutescens-potted-plant-areca-palm__0768630_pe754508_s5.jpg?f=s",
        productId: 14,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        image:
          "https://www.ikea.com/nl/en/images/products/hedera-helix-potted-plant-ivy__0768633_pe754511_s5.jpg?f=s",
        productId: 15,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        image:
          "https://www.ikea.com/nl/en/images/products/hedera-helix-potted-plant-ivy__0902464_pe594502_s5.jpg?f=s",
        productId: 15,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        image:
          "https://www.hema.nl/dw/image/v2/BBRK_PRD/on/demandware.static/-/Sites-HEMA-master-catalog/default/dw67667d2f/product/05710083_02_001_01.jpg?sw=529&sh=600&sm=fit",
        productId: 16,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("images", null, {});
  },
};
