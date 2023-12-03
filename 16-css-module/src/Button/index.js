import clsx from "clsx";
import style from "./Button.module.scss"


function Button({primary, success,error }) {

    const classStr = clsx(style.btn, 'hello',{
        [style.primary]:primary,
        [style.success]:success,

        [style.error]:error,

    }) 

    return (
        <button className={classStr}>Click Me!</button>
    )
}

export default Button;