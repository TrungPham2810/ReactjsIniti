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
    const [showGoToTop, setShowGoToTop] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);
    const [countDown, setCountDown] = useState(30);
    const [count, setCount] = useState(1);

    const [avatar, setAvatar] = useState();




    useEffect(() => {
        document.title = title;
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then((data) => {
                return data.json();
            })
            .then((post) => {
                setPosts(post);
        
            })
            .catch((error) => {
                // Xử lý lỗi nếu có

                console.error(error);
            });
    }, [type]);

    useEffect(() => {

        const handleScroll = () => {
            if(window.scrollY > 200) {
                setShowGoToTop(true);
            
            } else {
                setShowGoToTop(false);
            }
        }

        const handleResize = () => {
            setWidth(window.innerWidth);
        }
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);
        return () => {
            console.log('unmount....');
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);

        }

    }, []);

    useEffect(() => {

        const timeDown = setInterval(() => {
            setCountDown(prev => prev-1);
            // console.log('Countdown...');
        }, 1000);
        return () => clearInterval(timeDown);
    }, [])

    useEffect(() => {
        console.log(`count lần ${count}`);

        return () => console.log(`Clean up lần ${count}`)
    }, [count])

    useEffect(() => {
        return () => {avatar && URL.revokeObjectURL(avatar.preview)};
    }, [avatar])
    const handlePreviewAvatar = (e) => {
        const file = e.target.files[0];
        console.log(e.target.files);
        file.preview = URL.createObjectURL(file);
        setAvatar(file)
    }
    return (
        <h1>
            <input type='file' onChange={handlePreviewAvatar}/>

            {avatar && (
               <img src={avatar.preview} alt='' width="10%"/> 
            )}
            <hr/>
            <span >
                Count:{count}
            </span>
            <button onClick={() => setCount(count + 1)}>Click Count</button>
            <hr/>
             <span>
                Count down:{countDown}
            </span>
            <hr/>
            <span>
                width screen:{width}
            </span>
            <hr/>
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

            
                {showGoToTop && (
                    <button
                    style={{position:'fixed',bottom:10, right:10}}
                    >Go To Top</button>
                )}

        </h1>
    );
}

export default Content;
