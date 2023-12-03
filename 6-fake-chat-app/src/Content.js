import { useEffect } from 'react';
import { useState } from 'react';

const lessons = [
    {
        id: 1,
        name: 'Learn HTML css',
    },
    {
        id: 2,
        name: 'Reactjs',
    },
    {
        id: 3,
        name: 'Php magento',
    },
];
function Content() {

    const [lessonId, setLessonId] = useState(1);
    useEffect(() => {
        const handleComment = (e) => {
            console.log(e.detail)
        }
        window.addEventListener(`lesson-${lessonId}`, handleComment);

        return () =>{
            window.removeEventListener(`lesson-${lessonId}`, handleComment);
        }
    },[lessonId]);
    return (
        <div>
            <ul>
                {lessons.map((lesson) => (
                    <li
                        key={lesson.id}
                        style={{
                            color: lessonId === lesson.id ? 'red' : 'black',
                        }}
                        onClick={() => setLessonId(lesson.id)}
                    >
                        {lesson.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Content;
