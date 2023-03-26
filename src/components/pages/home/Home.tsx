import React from 'react';
import { Preview } from './preview';
import { Menu } from './menu';
import { AboutEstablishments } from './aboutEstablishment';

const Home: React.FC = ({}) => (
  <>
    <Preview />
    <Menu />
    <AboutEstablishments />
  </>
);

export { Home };
