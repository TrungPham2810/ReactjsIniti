import './App.css';
import {useState, useMemo} from "react";
function App() {
  const [name,setName] = useState('');
  const [price,setPrice] = useState('');
  const [products, setProducts] = useState([]);

  const handleSubmit = () => {
    setProducts([...products,{
      name,
      price:parseInt(price)
    }])
  }
// nếu không sử dụng useMemo để check xem products có thay đổi hay không để mà cập nhật total mới or là render value cũ
// thì mỗi khi nhập ký tự input, state name or price sẽ thay đổi và re-render lại lúc này sẽ luôn chạy lại logic tính total 
// mà vì lúc này products không thay đổi nên việc chạy lại tính total này là vô nghĩa không cần thiết 
  const total = useMemo(() => {
    const result = products.reduce((result, pro) =>{
      console.log('total ....');
      return result + pro.price;
  
    } , 0)
    return result;
  }, [products]); 


  console.log(products);
  return (
    <div className="App">
      <input 
        value={name}
        onChange={e=> setName(e.target.value)}
      />
      <br/>
      <input 
        value={price}
        onChange={e=> setPrice(e.target.value)}
      />
      <br/>
      <button onClick={handleSubmit}>Add</button>
      Total: {total}
    </div>
  );
}

export default App;
