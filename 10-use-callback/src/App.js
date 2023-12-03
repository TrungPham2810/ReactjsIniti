import './App.css';
import {useState, useCallback} from "react";
import Content from "./Content"
function App() {

  const [count, setCount] = useState(0);
  // handleIncrease hàm này đã được truyền làm 1 props trong component Content nên không cần phải create đi mỗi lần re-render
  // nên ta sẽ dùng  useCallback để chỉ vc khởi tạo 1 lần đầu tiền không cần khởi tạo liên tục để tối ưu đc performance 
  // không cần chạy những code không cần thiết
  const handleIncrease = useCallback(() => {
    setCount(prev => prev + 1)
  }, []) 
  return (
    <div className="App">
      <Content onIncrease = {handleIncrease}/>
      <span>{count}</span>
    
    </div>
  );
}

export default App;
