import React from 'react';
import styled, { css } from 'styled-components';
import { useAppSelector } from '../../../../store';
import { RetractableBlocks } from '../../../../ui';

const SContainer = styled.div`
  width: 50%;
`;
const SListUl = styled.ul`
  list-style: inside;
`;
const SListLi = styled.li`
  margin-bottom: 15px;
`;

export const TechnicalRiderList: React.FC = ({}) => {
  const { technicalRiderList } = useAppSelector(
    ({ technicalRider: { technicalRiderList } }) => ({
      technicalRiderList,
    })
  );
  return (
    <SContainer>
      <RetractableBlocks
        localStorageKey='openBlockIndexHome'
        descriptionBlocks={technicalRiderList.map(({ title, description }) => ({
          title,
          description: (
            <SListUl>
              {description.map((item, index) => (
                <SListLi key={`${item} ${index}`}>{item}</SListLi>
              ))}
            </SListUl>
          ),
        }))}
      />
    </SContainer>
  );
};
