export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT ';
export const INCREASE_COUNT_5 = 'INCREASE_COUNT_5';
export const DECREASE_COUNT_5 = 'DECREASE_COUNT_5';
export const INCREASE_COUNT_10 = 'INCREASE_COUNT_10';
export const DECREASE_COUNT_10 = 'DECREASE_COUNT_10';

export const increaseCount = () => ({
  type: INCREMENT,
  payload:{count:1}
})

export const decreaseCount = () => ({
  type: DECREMENT,
  payload:{count:1}
  
})
export const increaseCount1 = () => ({
  type: INCREASE_COUNT_5,
  payload:{count:5}
})

export const decreaseCount1 = () => ({
  type: DECREASE_COUNT_5,
  payload:{count:5}
})
export const increaseCount2= () => ({
  type: INCREASE_COUNT_10,
  payload:{count:10}
})

export const decreaseCount2 = () => ({
  type: DECREASE_COUNT_10,
  payload:{count:10}
})