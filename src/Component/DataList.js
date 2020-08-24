import React, { useState,useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import ToDoList from './ToDoList';
import "./ToDo.css"

import AddToDoList from './AddToDoList';
const  DataList =() => {
const dispatch= useDispatch();
const anventory = useSelector ((state) => state.anventoryList.anventory);
 
  
  
        return (
            <div className="">
                     
                <div className="jumbotron container">
                    <span><h2 className="text-center text-white">ToDo List</h2></span>
                  
                         {
                            anventory.map((currentPages) => (                       
                         
                            <ToDoList anventory={currentPages} key={anventory.id} />

                            ))
                        } 
                </div>             
            </div>
        )
    }

export default DataList;