import { Fragment, useEffect, useState } from 'react';

const useAction = (petId) => {
  const [pet, setPet] = useState({} as any);

  useEffect(() => {
    const controller = new AbortController();

    fetch(`https://petstore.swagger.io/v2/pet/${petId}`, {
      signal: controller.signal,
    })
      .then((res) => res.json())
      .then(setPet);

    return () => controller.abort();
  }, [petId]);

  return pet;
};

export default function Button() {
  const [petId, setPetId] = useState(20);
  const pet = useAction(petId);
  return (
    <Fragment>
      <div>{petId}</div>
      <div onClick={() => setPetId(petId === 20 ? 5 : 20)}>Кнопка</div>
      {pet && <div>{pet.name}</div>}
      {pet && <div>{pet.id}</div>}
    </Fragment>
  );
}
