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
      title: 'Womens',
      imageUrl: 'https://i.ibb.co/TvddPNG/womens.jpg',
      size: 'large',
      id: 2,
      linkUrl: 'shop/womens'
    },
    {
      title: 'Shoes',
      imageUrl: 'https://i.ibb.co/RB3hQ0x/shoes.jpg',
      id: 3,
      size: 'large',
      linkUrl: 'shop/shoes'
    },
    {
      title: 'Mens',
      imageUrl: 'https://i.ibb.co/mzDGvyY/mens.jpg',
      size: 'large',
      id: 4,
      linkUrl: 'shop/mens'
    },
    {
      title: 'Coats & Jackets',
      imageUrl: 'https://i.ibb.co/1vhB0qb/jackts.jpg',
      id: 5,
      size: 'large',
      linkUrl: 'shop/jackets'
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
