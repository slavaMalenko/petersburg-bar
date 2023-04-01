import React from 'react';
import { Preview } from './preview';
import { Menu } from './menu';
import { AboutEstablishments } from './aboutEstablishment';
import { TechnicalRider } from './technicalRider';
import { Contacts } from './contacts';

const Home: React.FC = ({}) => (
  <>
    <Preview />
    <Menu />
    <AboutEstablishments />
    <TechnicalRider />
    <Contacts />
  </>
);

export { Home };
