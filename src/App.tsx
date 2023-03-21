import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

import { Container, EmptyComponent } from './ui';
import { useAppSelector } from './store';
import { Header, Preview } from './components/pages/home';

const App: React.FC = () => {
  const navigate = useNavigate();
  const { activeNavigation } = useAppSelector(
    ({ navigation: { activeNavigation } }) => ({
      activeNavigation,
    })
  );
  useEffect(() => navigate(activeNavigation), []);

  return (
    <Container>
      <Header />

      <main>
        <Routes>
          <Route path='/' element={<Preview />} />
          <Route path='/navigation' element={<EmptyComponent />} />
          <Route path='/poster' element={<EmptyComponent />} />
          <Route path='/cooperation' element={<EmptyComponent />} />
          <Route path='/gallery' element={<EmptyComponent />} />
          <Route path='/news' element={<EmptyComponent />} />
        </Routes>
      </main>
    </Container>
  );
};

export default App;
