export const COUNT = 'COUNT';


export const countFunction = (e) => ({
  type: COUNT,
 
  payload:e.target.value
 
}) 