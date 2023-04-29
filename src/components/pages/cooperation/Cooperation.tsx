import { FC } from 'react';
import { css } from 'styled-components';
import { Title, WhitePlate } from '../../../ui';

const SWhitePlateStyles = css`
  font-size: 16px;
  font-weight: 900;
`;

const Cooperation: FC = () => {
  return (
    <div>
      <WhitePlate
        commonStyles={SWhitePlateStyles}
        title='Top “Manhattan” events'
        scrollToTitle
      />

      <Title text='Корпоративы' />
    </div>
  );
};

export { Cooperation };
