const SHOP_DATA = [
  {
    id: 1,
    title: 'Accessories',
    routeName: 'accessories',
    items: [
      {
        id: 1,
        name: 'Headphones & Ipod',
        imageUrl:
          'https://i.ibb.co/z6d31Yt/90-angle-1i-Em-Bpy-2-s-unsplash.jpg',
        price: 25
      },
      {
        id: 2,
        name: 'Arno Senon',
        imageUrl:
          'https://i.ibb.co/vkLtMnh/arno-senoner-HFE2-Ry-C76tw-unsplash.jpg',
        price: 18
      },
      {
        id: 3,
        name: 'Blue Earrings ',
        imageUrl: 'https://i.ibb.co/FYK0YKh/pexels-ashithosh-u-1413420.jpg',
        price: 35
      },
      {
        id: 4,
        name: 'Snapback Hat ',
        imageUrl: 'https://i.ibb.co/kgt8rX4/pexels-erik-mclean-4061512.jpg',
        price: 18
      },
      {
        id: 5,
        name: 'Gold & Silver Amachi',
        imageUrl:
          'https://i.ibb.co/YhzcsbB/content-pixie-ZB4e-Qc-Nq-VUs-unsplash.jpg',
        price: 14
      },
      {
        id: 6,
        name: 'Clear Glasses',
        imageUrl:
          'https://i.ibb.co/znY6GCm/jess-bailey-We-Co-Lo0-Rxp4-unsplash.jpg',
        price: 18
      },
      {
        id: 7,
        name: 'Loui Vitton Bag',
        imageUrl:
          'https://i.ibb.co/xGXpwQf/korie-cull-Om-IEij4-Mhn-A-unsplash.jpg',
        price: 14
      },
      {
        id: 8,
        name: 'Arno Senoner',
        imageUrl:
          'https://i.ibb.co/BybhhTK/arno-senoner-ZT16-Yk-AYueo-unsplash.jpg',
        price: 16
      },
      {
        id: 9,
        name: 'Diamond Earrings ',
        imageUrl:
          'https://i.ibb.co/R65RzSw/pexels-danielle-de-angelis-2849743.jpg',
        price: 43
      },
      {
        id: 10,
        name: 'Gold Earrings ',
        imageUrl: 'https://i.ibb.co/JjVqHkK/pexels-dima-valkov-3266700.jpg',
        price: 104
      },
      {
        id: 11,
        name: 'Green RayBans',
        imageUrl:
          'https://i.ibb.co/DKWkr8r/charles-deluvio-1-nx1-QR5d-TE-unsplash.jpg',
        price: 73
      }
    ]
  },
  {
    id: 2,
    title: 'Shoes',
    routeName: 'shoes',
    items: [
      {
        id: 1,
        name: 'Arnel-Hasanovic Boots',
        imageUrl:
          'https://i.ibb.co/k58f359/arnel-hasanovic-WBI5-XGIZugo-unsplash.jpg',
        price: 89
      },
      {
        id: 2,

        name: 'Pink Shoes',
        imageUrl:
          'https://i.ibb.co/sjLcwPS/sladjana-karvounis-KHKfdl-Ryt-As-unsplash.jpg',
        price: 140
      },
      {
        id: 3,
        name: 'Dr Martins',
        imageUrl: 'https://i.ibb.co/9GRNF9n/pexels-fotografierende-1159670.jpg',
        price: 260
      },
      {
        id: 4,
        name: 'Melvin-buezo Trainers',
        imageUrl: 'https://i.ibb.co/6HjSTRP/pexels-melvin-buezo-2529148.jpg',
        price: 175
      },
      {
        id: 5,
        name: 'Terje-Sollie Shoes',
        imageUrl: 'https://i.ibb.co/z6ZZBvj/pexels-terje-sollie-298863.jpg',
        price: 160
      },
      {
        id: 6,
        name: 'Nike Running Shoes',
        imageUrl: 'https://i.ibb.co/9WsXjy6/revolt-164-6w-VEHf-I-unsplash.jpg',
        price: 64
      },
      {
        id: 7,
        name: 'Nike Air Force One',
        imageUrl:
          'https://i.ibb.co/T1sjwMw/ryan-plomp-PGTO-A0e-Lt4-unsplash.jpg',
        price: 100
      },
      {
        id: 8,
        name: 'Emily-Gouker Shoes',
        imageUrl:
          'https://i.ibb.co/Z8czDMS/emily-gouker-Zx76sb-Andc0-unsplash.jpg',
        price: 200
      }
    ]
  },
  {
    id: 3,
    title: 'Coats & Jackets',
    routeName: 'jackets',
    items: [
      {
        id: 1,
        name: 'Brown Coat',
        imageUrl:
          'https://i.ibb.co/QkNwRwj/pexels-andrea-piacquadio-837140.jpg',
        price: 215
      },
      {
        id: 2,
        name: 'Green Winter Jacket',
        imageUrl: 'https://i.ibb.co/r6S2fwT/pexels-unpetitvoyou-3317133.jpg',
        price: 190
      },
      {
        id: 3,
        name: "Women's Brown Coat",
        imageUrl:
          'https://i.ibb.co/nMLmXrC/pexels-apostolos-vamvouras-2282490.jpg',
        price: 150
      },
      {
        id: 4,
        name: 'Long Grey Coat',
        imageUrl: 'https://i.ibb.co/MMvVvrg/pexels-luca-nardone-3651597.jpg',
        price: 165
      },
      {
        id: 5,
        name: "Women's Fur Coat",
        imageUrl: 'https://i.ibb.co/k8pyyJH/pexels-oleg-magni-1734181.jpg',
        price: 185
      }
    ]
  },
  {
    id: 4,
    title: 'Womens',
    routeName: 'womens',
    items: [
      {
        id: 1,
        name: 'Orange Tracksuit ',
        imageUrl:
          'https://i.ibb.co/Gv387Mq/dom-hill-nim-El-Tc-TNy-Y-unsplash.jpg',
        price: 25
      },
      {
        id: 2,
        name: 'Top and Shorts',
        imageUrl:
          'https://i.ibb.co/1MmgH8N/alex-blajan-6ozh-V5b9ims-unsplash.jpg',
        price: 20
      },
      {
        id: 3,
        name: 'Top and Short Jeans',
        imageUrl:
          'https://i.ibb.co/6JykCtQ/calvin-lupiya-y-Pg8cus-GD8-unsplash.jpg',
        price: 80
      },
      {
        id: 4,
        name: 'Red Summer Dress',
        imageUrl:
          'https://i.ibb.co/LhPDLbR/naeim-jafari-6-Xai7-Xx-Og-Bc-unsplash.jpg',
        price: 80
      },
      {
        id: 5,
        name: 'Lily Grey Outfit',
        imageUrl:
          'https://i.ibb.co/XbVQW0c/judeus-samson-0-UECc-Inu-CR4-unsplash.jpg',
        price: 45
      },
      {
        id: 6,
        name: 'Joseph Kellner Top and Skirt',
        imageUrl:
          'https://i.ibb.co/r7TTYPv/joseph-kellner-Gh3m-p1-Jb-OE-unsplash.jpg',
        price: 135
      },
      {
        id: 7,
        name: 'Green Mini-Top',
        imageUrl:
          'https://i.ibb.co/WDH6TNY/atikh-bana-Ka-MTEm-Jnx-Y-unsplash.jpg',
        price: 50
      }
    ]
  },
  {
    id: 5,
    title: 'Mens',
    routeName: 'mens',
    items: [
      {
        id: 1,
        name: 'Marron Suit',
        imageUrl:
          'https://i.ibb.co/j5FpKnj/pexels-the-lazy-artist-gallery-1300550.jpg',
        price: 325
      },
      {
        id: 2,
        name: 'Halloween Shirt',
        imageUrl:
          'https://i.ibb.co/MZk2Hdv/ian-dooley-wt-Fc4o4-Bir8-unsplash.jpg',
        price: 20
      },
      {
        id: 3,
        name: 'Black T',
        imageUrl:
          'https://i.ibb.co/CBfb5C0/pexels-cristian-benavides-3662357.jpg',
        price: 45
      },
      {
        id: 4,
        name: 'Yellow Tracksuit',
        imageUrl:
          'https://i.ibb.co/vcqRtcW/pexels-visio-n-de-enfoque-3341231.jpg',
        price: 105
      },
      {
        id: 5,
        name: 'Red Shirt',
        imageUrl: 'https://i.ibb.co/98Yds6G/pexels-yogendra-singh-1760900.jpg',
        price: 80
      },
      {
        id: 6,
        name: 'White Shirt',
        imageUrl: 'https://i.ibb.co/Xt5Sh2d/pexels-ralph-rabago-3214769.jpg',
        price: 45
      }
    ]
  }
];

export default SHOP_DATA;
