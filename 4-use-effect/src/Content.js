import { useEffect } from 'react';
import { useState } from 'react';

// 1. useEffect(callback);
//khai báo ntn thì sẽ gọi callback mỗi khi component re-render, nên cẩn thận vì có thể gây ra vòng lặp vô hạn

// 2. useEffect(callback, []);
// khi khai baó ntn thì nó sẽ chỉ gọi callback 1 lần sau khi component mointed

// 3. useEffect(callback, [deps]);
// -callback sẽ đc gọi lại mỗi khi deps thay đổi, deps ở đây có thể là state or props truyền từ ngoài vào để useEffect này nó theo dõi


//  có thể để callback ở ngoài useEffect nhưng như thế nếu function bị lỗi or xử lý lâu thì ng dùng lại phải đợi xong thì ms render ra ui
// useEffect callback sẽ được call sau khi render html như vậy để giảm thiểu rủi ro khi vì function callback đc đặt trong useEffect

//-----------
// callback luoon ddc gọi sau component mounted

const tabs = ['posts', 'comments', 'albums'];
function Content() {
    const [title, setTitle] = useState('');
    const [posts, setPosts] = useState([]);
    const [type, setType] = useState('posts');

    useEffect(() => {
        document.title = title;
        console.log(123);
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then((data) => {
                return data.json();
            })
            .then((post) => {
                setPosts(post);
                console.log(post);
            })
            .catch((error) => {
                // Xử lý lỗi nếu có

                console.error(error);
            });
    }, [type]);

    return (
        <h1>
            {tabs.map((tab) => (
                <button
                    key={tab}
                    style={ tab === type ? { color: 'white', backgroundColor: 'black' }: {} }
                    onClick={() => setType(tab)}
                >
                    {tab}
                </button>
            ))}
            <input value={title} onChange={(e) => setTitle(e.target.value)} />
        
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>{post.title || post.email }</li>
                ))}
            </ul>
        </h1>
    );
}

export default Content;
