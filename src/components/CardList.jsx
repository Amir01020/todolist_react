import React from 'react';


const CardList = ({ name, comment, id ,deleteTodo,oupen,truncateString}) => {

    return (
        <div className="w-[360px] transition-[1s] py-5 px-8 rounded-lg hover:scale-[1.02] border-[2px] border-blue-500 shadow-xl">
            <h2 className='text-[30px] font-[600]'>{name}</h2>
            <p className='opacity-60 mt-2'>
                {truncateString(comment)}
            </p>
            <div className="mt-5 flex justify-end gap-3">
                <button
                    onClick={()=>deleteTodo(id)}
                    className='px-5 py-2 text-[#fff] transition-[0.5s] hover:bg-red-900 bg-red-400 rounded-lg'>Delete</button>
                <button 
                onClick={()=>oupen({
                    
                    obj:{
                        id:id,
                        name:name,
                        comment:comment
                    },variable:true
                })}
                className='px-5 py-2 text-[#fff] transition-[0.5s] hover:bg-blue-900 bg-blue-500 rounded-lg'>Сhange</button>
            </div>
        </div>
    );
};



export default CardList;