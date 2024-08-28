import { useState } from 'react'
import './App.scss'
import CardList from './components/CardList'
import Modal from './components/Modal';

const initialArr = [

  { id: '1', name: 'Амир', comment: 'всем привет меня завут амир я программист работая в этой сфере более 3 лет буду ...' }

]

function App() {
  const [todos, setTodos] = useState(initialArr);
  const [formData, setFormData] = useState({ name: '', comment: '' });
  const [active, setActive] = useState({
    obj: '',
    variable: false,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }
  const getFormText = (event) => {
    event.preventDefault();
    if (formData.name && formData.comment) {
      const newTodo = {
        id: String(todos.length + 1),  // Присваиваем уникальный id
        name: formData.name,
        comment: formData.comment,
      };
      setTodos([...todos, newTodo]);  // Добавляем новый элемент в массив
      setFormData({ name: '', comment: '' });  // Очищаем поля формы
    }
  }
  function truncateString(str) {
    if (str.length > 80) {
      return str.slice(0, 80) + "...";
    }
    return str;
  }
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));

  };

  return (
    <>
      <form onSubmit={getFormText} className='flex justify-center gap-10 mt-16'>
        <input
          className='bg-transparent px-2 text-[20px] w-[400px] h-[45px] rounded-lg border-[2px] border-blue-500'
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="User name"
        />
        <input
          className='bg-transparent  px-2 text-[20px] w-[400px] h-[45px] rounded-lg border-[2px] border-blue-500'
          type="text"
          name="comment"
          value={formData.comment}
          onChange={handleInputChange}
          placeholder="Comment"
        />
        <button className='text-[20px] transition-[0.3s] hover:bg-blue-900 bg-blue-500 rounded-lg text-white w-[120px] h-[45px]'>click</button>
      </form>
      <div className="max-w-[1140px]  flex justify-between px-10 flex-wrap mx-auto mt-16">
        {
          todos.map(i => (
            <CardList
              key={i.id}
              name={i.name}
              oupen={setActive}
              deleteTodo={() => deleteTodo(i.id)}
              comment={i.comment}
              truncateString={truncateString}
              id={i.id} />
          ))
        }
      </div>
      <Modal active={active} close={setActive} todos={todos} setTodos={setTodos} />
    </>
  )
}

export default App;
