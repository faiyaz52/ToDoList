import React,{ useState } from 'react';
import {useDispatch} from 'react-redux';
import './AddToDoList.css'
import {addAnventory} from '../Action/Action';
import shortid from 'shortid';
import { useHistory } from 'react-router-dom';
const AddToDoList = () => {
    let history = useHistory();
    const dispatch =useDispatch();
    const [todo, settodo] = useState ("");
    const [status, setstatus] =useState ("");
    const createToDo = e =>{
        e.preventDefault();
        const new_anventory={
            id:shortid.generate(),
            todo:todo,
            status:status,

        }
        dispatch(addAnventory(new_anventory));
        history.push("/")
        
    }
    return (
        <div className="uk-card uk-card-default uk-card-body uk-width-1-2@m container" style={{marginTop:"130px",borderRadius:"30px",width:"500px"}}>  
           <h2 style={{textAlign:"center",marginBottom:"40px",marginTop:"-20px"}}>ToDo List</h2>
           <form onSubmit={(e) => createToDo(e)} style={{marginLeft:"50px"}}>
					<div className="uk-margin">
                                    <div className="uk-inline">
                                     
                                            <input className="uk-input" type="text"
                                            required
                                            style={{width:"300px"}}
                                                placeholder="Enter ToDo List" 
                                            value={todo}
                                            onChange={(e) => settodo(e.target.value)}
                                        />
                                        </div>
                                    </div>
									<div className="uk-inline">                        
                                       
                                         <div class="uk-margin">
                                         <div class="uk-form-controls">
                                        <select class="uk-select" id="form-stacked-select" required value={status}
                                            onChange={(e) => setstatus(e.target.value)}  style={{width:"300px"}}>
                                            <option>Status</option>
                                            <option>Completed</option>
                                            <option>In-Progress</option>
                                        </select>
                                    </div>
                                 </div>
                                    </div>
                    <button className="btn btn-primary" type="submit"  style={{marginLeft:"100px",marginTop:"20px"}}>Submit</button>
            </form>
        </div>
    )
}
export default AddToDoList;

