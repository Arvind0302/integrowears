import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Kevin',
      email: 'kevinochiengp932@gmail.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: true,
    },
    {
      name: 'Chelimo',
      email: 'chelimo@gmail.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: false,
    },
  ],
  products: [
    {
      image: '/images/jeans3.png',
      name: 'Fashion  Sneaker',
      description: 'Fashion Casual Sneakers Man Flats Breathable Shoes Fashion',
      rating: 4,
      price: 2500,
      numReviews: 10,
      stock: 19,
    },
    {
      image: '/images/mixture2.png',
      name: 'Printed Hood',
      description: 'Fashion 2021 Bule Rick Morty Printed 3D Hoodie Sweatshirts',
      rating: 4,
      price: 650,
      numReviews: 10,
      stock: 2,
    },
    {
      image: '/images/bag.jpg',
      name: 'Hoodie Sweatshirts',
      description: 'Fashion 2021 Bule Rick Morty Printed 3D Hoodie Sweatshirts',
      rating: 5,
      price: 1999,
      numReviews: 10,
      stock: 5,
    },
    {
      image: '/images/bag.jpg',
      name: 'Fashion Mens Fitting Jeans ',
      description:
        'Generic Men Pants Hip Hop Harem Jeans Trousers Multi-pocket',

      rating: 4,
      price: 1000,
      numReviews: 10,
      stock: 10,
    },
    {
      image: '/images/bag.jpg',
      name: 'Casual Sports Shoes',
      description: 'Fashion Young Boys All-match Casual Sports Shoes',
      rating: 4,
      price: 2500,
      numReviews: 10,
      stock: 20,
    },
    {
      image: '/images/bag.jpg',
      name: 'Hip Hop Jeans Trouser',
      description:
        'Generic Men Pants Hip Hop Jeans Trousers Multi-pocket Sweat',
      rating: 4,
      price: 2500,
      numReviews: 10,
      stock: 6,
    },
    {
      image: '/images/bag.jpg',
      name: ' Fashion Hot Mens Jeans',
      description: 'Fashion Mens Casual Comfortable Slim-fit  Simple Jeans',
      rating: 4,
      price: 600,
      numReviews: 10,
      stock: 10,
    },

    {
      image: '/images/airforce3.jpg',
      name: 'Nike Slick Air Max Shoe',
      description: 'Nike Slick Air Max Shoe',
      rating: 4,
      price: 2500,
      numReviews: 10,
      stock: 10,
    },

    {
      image: '/images/airforce2.png',
      name: 'Swagger Outdoor Bag',
      description:
        'Generic Men Outdoor Bag Swagger Bag Casual Sling for Leisure',
      rating: 4,
      price: 500,
      numReviews: 10,
      stock: 10,
    },
    {
      image: '/images/shoe.jpg',
      name: 'Fashion hard Khaki-Beige',
      description: 'Fashion 6 hard Khaki-Beige,maroon, Choc,Nblue, Green&black',
      rating: 4,
      price: 500,
      numReviews: 10,
      stock: 10,
    },
    {
      image: '/images/airforce1.png',
      name: 'Hip Hop Jeans Trousers',
      description:
        'Generic Men Pants Hip Hop Jeans Trousers Multi-pocket Sweat',
      rating: 4,
      price: 500,
      numReviews: 10,
      stock: 10,
    },
    {
      image: '/images/airforce2.png',
      name: 'Printed  T-shirt',
      description: 'Dope Printed  T-shirt',
      rating: 4,
      price: 500,
      numReviews: 10,
      stock: 10,
    },
    {
      image: '/images/airforce3.jpg',
      name: ' Fashion Mens Sweatpants',
      description:
        'Fashion Generic Fashion Mens Loose Sweatpants Drawstring Pant',
      rating: 4,
      price: 500,
      numReviews: 10,
      stock: 10,
    },
    {
      image: '/images/bomba.png',
      name: 'Printed  T-shirt',
      description: 'Dope Printed Classic T-shirt',
      rating: 4,
      price: 500,
      numReviews: 10,
      stock: 10,
    },
    {
      image: '/images/bomba.png',
      name: 'Classic Official leather Shoes',
      description: 'Fashion Classic Official leather Black Shoes - Slip-on',
      rating: 4,
      price: 500,
      numReviews: 10,
      stock: 10,
    },
  ],
};

export default data;