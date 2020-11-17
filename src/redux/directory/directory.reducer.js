const INITIAL_STATE = {
  sections: [
    {
      title: 'Accessories',
      imageUrl: 'https://i.ibb.co/mSBNbX2/accessories.jpg',
      id: 1,
      size: 'large',
      linkUrl: 'shop/accessories'
    },
    {
      title: 'Coats & Jackets',
      imageUrl: 'https://i.ibb.co/1vhB0qb/jackts.jpg',
      id: 2,
      size: 'large',
      linkUrl: 'shop/jackets'
    },
    {
      title: 'Shoes',
      imageUrl: 'https://i.ibb.co/RB3hQ0x/shoes.jpg',
      id: 3,
      size: 'large',
      linkUrl: 'shop/shoes'
    },
    {
      title: 'Womens',
      imageUrl: 'https://i.ibb.co/TvddPNG/womens.jpg',
      size: 'large',
      id: 4,
      linkUrl: 'shop/womens'
    },
    {
      title: 'Mens',
      imageUrl: 'https://i.ibb.co/mzDGvyY/mens.jpg',
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
