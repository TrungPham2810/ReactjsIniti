import classNames from 'classnames/bind';
import styles from './CartPopup.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
const cx = classNames.bind(styles);
function CartPopup() {
    return (
        <div className={cx('wrapper')}>
            <Tippy
                // visible={true}
                // delay={[0, 700]}
                trigger="click"
                content={
                    <div className={cx('minicart-wrapper')}>
                        <span>You have no items in your shopping cart.</span>
                    </div>
                }
            >
                <div className={cx('title-icon')}>
                    <FontAwesomeIcon className={cx('cart-icon')} icon={faCartShopping} />
                </div>
            </Tippy>
        </div>
    );
}

export default CartPopup;
