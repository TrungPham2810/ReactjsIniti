import classNames from 'classnames/bind';
import CartPopup from '../CartPopup';
import Search from '../Search';
import AccountNav from '../AccountNav';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);
function Header() {
    return (
        <div className={cx('wrapper')}>
            <AccountNav />
            <div className={cx('header-middle')}>
                <div className={cx('logo')}>
                    <Link to={'/'}>
                        <img
                            src="http://mage.local/static/version1709039042/frontend/Magento/luma/en_US/images/logo.svg"
                            title=""
                            alt=""
                            width="170"
                        />
                    </Link>
                </div>
                <div className={cx('header-right')}>
                    <Search />
                    <CartPopup />
                </div>
            </div>
        </div>
    );
}

export default Header;
