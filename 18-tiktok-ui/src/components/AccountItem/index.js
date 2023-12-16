import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem({ children }) {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p77-sign-va.tiktokcdn.com/tos-maliva-avt-0068/ce34e7d7914c181007e1b888b84d5754~c5_100x100.jpeg?x-expires=1702908000&x-signature=aKQJqd59A40fBLyHbaA%2BgKGtTrk%3D"
                alt=""
            />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    Mark.xxxxx <FontAwesomeIcon className={cx('check')} icon={faCircleCheck} />
                </p>
                <span className={cx('username')}>Mark Lucy</span>
            </div>
        </div>
    );
}

export default AccountItem;
