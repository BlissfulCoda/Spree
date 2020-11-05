import React, { Component } from 'react';
import MenuItem from '../menu-item/menu-item';

import './directory.styles.scss';

class Directory extends Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'Accessories',
          imageUrl: 'https://i.ibb.co/BwmRPMg/stil-D4j-Raha-Ua-Ic-unsplash.jpg',
          id: 1,
          size: 'large'
        },
        {
          title: 'Coats & Jackets',
          imageUrl: 'https://i.ibb.co/T4HcPnh/john-arano-i7c-DFWI7q-OU-unsplash.jpg',
          id: 2,
          size: 'large',
        },
        {
          title: 'Shoes',
          imageUrl: 'https://i.ibb.co/Jx1nQY9/satria-aditya-f8v-EFZ7y-Pu-Y-unsplash.jpg',
          id: 3,
          size: 'large',
        },
        {
          title: 'Womens',
          imageUrl: 'https://i.ibb.co/b3njksW/james-barr-Zw-Qw-K9g-R58s-unsplash.jpg',
          size: 'large',
          id: 4
        },
        {
          title: 'Mens',
          imageUrl: 'https://i.ibb.co/Jvwf0CS/sorin-sirbu-if-Yt0s-Kd-JYk-unsplash.jpg',
          size: 'large',
          id: 5
        }
      ]
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ title, id, imageUrl, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}

export default Directory;
