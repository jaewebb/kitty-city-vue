export default defineEventHandler((event) => {
  if (Number(event?.context?.params?.id) === 1) {
    return {
      id: '1',
      name: 'Pumpkin',
      description: 'Cute Cat',
      birthday: new Date('2022-01-11'),
      gender: 'male',
      img: 'pumpkin.png'
    };
  } else {
    return {
      id: '2',
      name: 'Test',
      description: 'Desc',
      birthday: new Date('2021-01-11'),
      gender: 'female',
      img: 'cheese.png'
    };
  }
});
