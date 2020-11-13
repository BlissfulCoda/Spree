const INITIAL_STATE = {
  sections: [
    {
      title: 'Accessories',
      imageUrl: 'https://i.ibb.co/BwmRPMg/stil-D4j-Raha-Ua-Ic-unsplash.jpg',
      id: 1,
      size: 'large',
      linkUrl: 'shop/accessories'
    },
    {
      title: 'Coats & Jackets',
      imageUrl:
        'https://i.ibb.co/T4HcPnh/john-arano-i7c-DFWI7q-OU-unsplash.jpg',
      id: 2,
      size: 'large',
      linkUrl: 'shop/jackets'
    },
    {
      title: 'Shoes',
      imageUrl:
        'https://i.ibb.co/Jx1nQY9/satria-aditya-f8v-EFZ7y-Pu-Y-unsplash.jpg',
      id: 3,
      size: 'large',
      linkUrl: 'shop/shoes'
    },
    {
      title: 'Womens',
      imageUrl:
        'https://i.ibb.co/b3njksW/james-barr-Zw-Qw-K9g-R58s-unsplash.jpg',
      size: 'large',
      id: 4,
      linkUrl: 'shop/womens'
    },
    {
      title: 'Mens',
      imageUrl:
        'https://i.ibb.co/Jvwf0CS/sorin-sirbu-if-Yt0s-Kd-JYk-unsplash.jpg',
      size: 'large',
      id: 5,
      linkUrl: 'shop/mens'
    }
  ]
};

const directoryReducser = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducser;
