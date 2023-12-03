import clsx from "clsx" 

import style from "./Heading.module.css";
 function Heading() {
    console.log(style)
    return (
        <div>
            <h1 className={style.heading}>Hello Mark</h1>
            <h1 className={`${style.heading} ${style.textLarge}`}>Hello Mark</h1>
            <h1 className={clsx(style.heading,style.textLarge)}>Apply clsx</h1>
            <h1 className={clsx({ [style.heading]: false })}>Class có hay không</h1>
        </div>
    )
 }

 export default Heading;