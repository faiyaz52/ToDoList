import { ADD_TODOLIST,
  GET_TODOLIST,
  DELETE_TODOLIST,

 } from '../constant/type';

export const addAnventory = (anventory) =>({
    type:ADD_TODOLIST,
    payload:anventory,
  });

export const getAnventory = (id) => ({
  type: GET_TODOLIST,
  payload:id,
});


export const deleteAnventory = (id) => ({
  type: DELETE_TODOLIST,
  payload:id,
})



