import {useEffect} from 'react';
import { useState } from 'react';

// 1. useEffect(callback);
// gọi callback mỗi khi component re-render

// 2. useEffect(callback, []);
// 3. useEffect(callback, [deps]); 


//-----------
// callback luoon ddc gọi sau component mounted
function Content() {

    const [title, setTItle] = useState('');
    useEffect( () => {
        console.log('mounted');
    })
    return (
        <h1>
            Hello Mark
            <input value={title} onChange={e=> setTItle(e.target.value)} />

        </h1>
    )
}

export default Content;