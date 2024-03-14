import classNames from 'classnames/bind';
import styles from './AccountNav.module.scss';
import { Link } from 'react-router-dom';
import { routerAccount } from '~/config/routes';
const cx = classNames.bind(styles);
function AccountNav() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <span className={cx('content-item')}>
                    <span className={cx('not-logged-in')}>Default welcome msg!</span>
                </span>
                <span className={cx('authorization-link', 'content-item')} data-label="or">
                    <Link to={routerAccount.sign_in}>Sign In</Link>
                </span>
                <span className={cx('content-item')}>
                    <Link to={routerAccount.create}>Create an Account</Link>
                </span>
            </div>
        </div>
    );
}

export default AccountNav;
