import React from 'react';
import { Preview } from './preview';
import { Menu } from './menu';
import { AboutEstablishments } from './aboutEstablishment';
import { TechnicalRider } from './technicalRider';

const Home: React.FC = ({}) => (
  <>
    <Preview />
    <Menu />
    <AboutEstablishments />
    <TechnicalRider />
  </>
);

export { Home };
