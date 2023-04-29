import { Fragment, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Button } from '..';

const SInputDoc = styled('input')`
  display: none;
`;

export default function Document() {
  const ref = useRef<any>();
  const func = (a) => console.log(a.target.files[0]);
  return (
    <Fragment>
      <SInputDoc type='file' ref={ref} onChangeCapture={func} />
      <Button
        text='Загрузить'
        onClick={() => ref.current && ref.current.click()}
      />
    </Fragment>
  );
}
