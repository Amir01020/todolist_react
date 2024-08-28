
import React, { useState } from 'react';
import { IoMdClose } from "react-icons/io";

const Modal = ({ active, close, setTodos, todos }) => {
    const [navObj, setNavObj] = useState({ name: '', comment: '' });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNavObj({ ...navObj, [name]: value });
    }
    const updateItem = (id, newName, newComment) => {
        setTodos(prevItems =>
            prevItems.map(item =>
                item.id === id ? { ...item, name: newName, comment: newComment } : item
            )
        );
        setNavObj({
            name: '', comment: ''
        })
        close({
            obj: {
                name: '',
                comment: '',
                id: ''
            },
            variable: false
        })
    };

    return (
        <div className={`${active.variable ? 'opacity-[1] pointer-events-auto' : 'opacity-0 pointer-events-none'} w-full  h-full fixed top-0 left-0 bg-[#00000063]`}>
            <div className={`mx-auto ${active.variable ? 'scale-[1]' : 'scale-[0.5]'} mt-[100px] w-[700px] h-[400px] p-5 border-blue-500 bg-white bottom-[2px]`}>
                <div className="flex justify-end">
                    <IoMdClose
                        onClick={() => {
                            close({
                                obj: {
                                    name: '',
                                    comment: '',
                                    id: ''
                                },
                                variable: false
                            })
                            setNavObj({
                                name: '', comment: ''
                            })

                        }

                        }
                        className='cursor-pointer text-[30px]' />
                </div>
                <form onSubmit={(event) => {
                    event.preventDefault(); // Предотвращаем перезагрузку страницы
                    updateItem(active.obj.id, navObj.name, navObj.comment);
                }} className='flex justify-center gap-5 mt-10'>
                    <input
                        className='bg-transparent px-2 text-[20px] w-[400px] h-[45px] rounded-lg border-[2px] border-blue-500'
                        type="text"
                        name="name"
                        value={navObj.name}
                        onChange={handleInputChange}
                        placeholder="User name"
                    />
                    <input
                        className='bg-transparent  px-2 text-[20px] w-[400px] h-[45px] rounded-lg border-[2px] border-blue-500'
                        type="text"
                        name="comment"
                        value={navObj.comment}
                        onChange={handleInputChange}
                        placeholder="Comment"
                    />
                    <button className='text-[20px] transition-[0.3s] hover:bg-blue-900 bg-blue-500 rounded-lg text-white w-[120px] h-[45px]'>click</button>
                </form>
                <h2 className='text-[30px] font-[600] mt-5'>Name: {active.obj.name}</h2>
                <p className='text-gray-500 mt-2'>
                    <span className='font-[600] text-black '>Comment: </span>
                    {active.obj.comment}
                </p>
            </div>
        </div>
    );
};



export default Modal;