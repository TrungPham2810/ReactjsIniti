import classNames from 'classnames';
import { useState, forwardRef } from 'react';
import images from '~/assets/images';
import styles from './Image.module.scss';

const Image = forwardRef(({ src, alt, className = '', fallback = images.noImage, ...props }, ref) => {
    const [defautlImg, setDefaultImage] = useState('');
    //fallback dùng để khai báo image sẽ lấy nếu src bị lỗi
    const handleError = () => {
        setDefaultImage(fallback);
    };
    //src={defautlImg || src} ban đầu vì defautlImg không có value nên nó sẽ ưu tiên hiển thị src
    // nếu link src bị lỗi thì even onError đc kich hoạt và set value cho defautlImg và renderr lại
    // lúc này sẽ ưu tiên hiển thị value của defautlImg hơn
    // logic js đơn giản với điều kiện if else
    return (
        <img
            className={classNames(styles.wrapper, className)}
            ref={ref}
            src={defautlImg || src}
            alt={alt}
            onError={handleError}
            {...props}
        />
    );
});

export default Image;
