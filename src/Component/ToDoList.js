import React from 'react'
import {Link} from 'react-router-dom';
import {deleteAnventory} from './../Action/Action';
import {useDispatch} from 'react-redux';
import { Badge } from 'reactstrap';
const ToDoList = ({anventory}) => {
    
    const dispatch = useDispatch();
    const {todo,id,status}=anventory;
return (
        <>
        <div style={{marginLeft:"80px"}}>
            <div className="cards p-3 m-3 text-center" >
                <div >
                    <span>{todo} </span>
                </div> 
                <div>
                    <span ><Badge color="success" className="Badge">{status} </Badge></span> 
                </div>
                <div>
                    <span ><i class="material-icons  text-danger  delect mr-2" onClick={()=>dispatch(deleteAnventory(id))} style={{cursor:"pointer"}}>delete</i></span> 
                </div>   
            </div> 
            </div>  
        </>             
                        
    )
}

export default ToDoList
