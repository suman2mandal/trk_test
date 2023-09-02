import React from 'react';
import { removetodo } from "./slice";
import { useDispatch, useSelector } from "react-redux";
import { AiFillDelete } from "react-icons/ai";
// import {useGetPostsQuery} from "./api";

function View(props) {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.abc.abc);
    // const {isLoading,isError,isSuccess,data,error} = useGetPostsQuery();
    // console.log(data);

    return (
        <div className="flex w-full justify-center">
            <div className="w-4/5">
                {todos.map((todo, index) => (
                    <div key={todo.id} className={`flex justify-evenly text-2xl ${index % 2 === 0 ? 'bg-slate-700 text-gray-100' : 'bg-slate-200 text-gray-800'}`}>
                        {todo.text}
                        <div>
                            <AiFillDelete onClick={() => dispatch(removetodo(todo.id))} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default View;
