import { ADD_TODOLIST,
  GET_TODOLIST,
  DELETE_TODOLIST,

 } from '../constant/type';
const inialState={
  anventory:[
    {
      "id": 1,
      "todo": "React",
      "status": "Completed",
      },
      {
        "id": 2,
        "todo": "Anguar",
        "status": "In-Progress",
        }

      
  ],
 
  anventorys:null,
  selectedAnventorys:[],
};
export const ToDoReducer = (state = inialState , action)=>{

    switch( action.type){
      case ADD_TODOLIST:
        return{
          ...state,
          anventory:[action.payload,...state.anventory]
        }
        case GET_TODOLIST:
          let arr = state.anventory.filter((anventorys)=> anventorys.id == action.payload);
          arr=arr.values();
          for(let val of arr){
            arr = val ;
          }
          return{
            ...state,
            anventorys:arr,
          };

            case DELETE_TODOLIST:
              return{
                ...state,
                anventory:state.anventory.filter((anventory)=>anventory.id !=action.payload)
              }     
              
        default:
        return state
    }
};

