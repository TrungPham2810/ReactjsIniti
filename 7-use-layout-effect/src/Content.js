import { useEffect, useLayoutEffect } from 'react';
import { useState } from 'react';

// useEffect
// 1.cập nhật lại state
// 2.Cập nhật DOM (mutated)
// 3.Render lại Ui
// 4.Gọi Cleanup nếu dép thay đổi
// 5.gọi useEffect callback

// Khác nhau giữa 2 cái trên là uselayouteffect sẽ render ui sau cùng còn useeffect lại render ui trk khi call lại callback 
// useLayoutEffect
// 1. Cập Nhật lại state
// 2. Cập nhật DOM (mutated)
// 3. Gọi Cleanup nếu dép thay đổi (sync)
// 4. Gọi useLayoutEffect caches;;bacl (sync)
// 5. Render lại ui
function Content() {

    const [count, setCount] = useState(0);
    useLayoutEffect(() => {
       if(count > 3) {
        setCount(0)
       }
    },[count]);

    const handleRun = () => {
        setCount(count +1);
    }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleRun}>Run</button>
        </div>
    );
}

export default Content;
