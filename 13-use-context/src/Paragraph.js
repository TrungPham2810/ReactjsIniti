import {useContext} from "react";

import {ThemeContext} from "./ThemeContext"


function Paragraph() {

    const value = useContext(ThemeContext);
    console.log(value);

    return (
        <div>
            <span className={value.theme}>Ưu đãi bùng nổ dành cho các sản phẩm xe mô tô Yamaha tại Revzone Yamaha Motor chính thức được ra mắt,
                 mang lại cơ hội tuyệt vời cho những anh chị em biker yêu thích và đam mê dòng xe mô tô cao cấp này. </span>
        </div>
    )
}

export default Paragraph;