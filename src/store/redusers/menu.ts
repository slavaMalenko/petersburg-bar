import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const menuMock: menuItem[] = [
  {
    src: 'https://i.ibb.co/tYfJHZV/Rectangle-36.png',
    name: 'Amet donec.',
    weight: 200,
    description:
      'Placerat id auctor nunc id vel vel curabitur. Urna fames maecenas leo elit diam nibh elit.',
    price: 550,
  },
  {
    src: 'https://i.ibb.co/SNvn1jP/Rectangle-36-1.png',
    name: 'Amet donec.',
    weight: 400,
    description:
      'Pharetra morbi purus hendrerit risus vel consequat nunc, sed. Pharetra nulla imperdiet.',
    price: 550,
  },
  {
    src: 'https://i.ibb.co/GkMfXxc/Rectangle-36-2.png',
    name: 'Amet donec.',
    weight: 300,
    description:
      'In mauris, elit nisl sed. Nulla accumsan vestibulum sed velit sagittis quis accumsan.',
    price: 550,
  },
  {
    src: 'https://i.ibb.co/tJkSr7g/Rectangle-36-3.png',
    name: 'Amet donec.',
    weight: 100,
    description:
      'In cras pharetra aliquet laoreet. Lectus nisi ante felis quam pharetra in maecenas ut felis. ',
    price: 550,
  },
  {
    src: 'https://i.ibb.co/XjTpmW5/Rectangle-36-4.png',
    name: 'Amet donec.',
    weight: 350,
    description:
      'Elit imperdiet faucibus euismod tortor risus volutpat molestie morbi sed. Porta ac eu.',
    price: 550,
  },
  {
    src: 'https://i.ibb.co/HTrg3nH/Rectangle-36-5.png',
    name: 'Amet donec.',
    weight: 500,
    description:
      'Leo in arcu in gravida vivamus scelerisque non. Euismod nec amet amet egestas nisl iaculis.',
    price: 550,
  },
  {
    src: 'https://i.ibb.co/yPyfmVJ/Rectangle-36-6.png',
    name: 'Amet donec.',
    weight: 150,
    description:
      'Duis quisque tristique nulla cursus justo, etiam viverra nulla cras. Consectetur eget augue.',
    price: 550,
  },
  {
    src: 'https://i.ibb.co/8cc0Bwc/Rectangle-36-7.png',
    name: 'Amet donec.',
    weight: 500,
    description:
      'Integer dolor et sed tempus non. Adipiscing viverra in viverra quisque pretium. Commodo.',
    price: 550,
  },
];

export type menuItem = {
  src: string;
  name: string;
  weight: number;
  description: string;
  price: number;
};
export type menuState = { menu: menuItem[] };

const initialState: menuState = {
  menu: menuMock,
};

const menu = createSlice({
  name: 'menu',
  initialState,
  reducers: {},
});

export default menu.reducer;
