import PropTypes from 'prop-types';
import Button from '~/components/Button/Button';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
const cx = classNames.bind(styles);

function MenuItem({ data, className, onClick }) {
    return (
        <Button className={cx('menu-item', className)} to={data.to} leftIcon={data.icon} onClick={onClick}>
            {data.title}
        </Button>
    );
}
MenuItem.propTypes = {
    data: PropTypes.object.isRequired,
    className: PropTypes.string,
    onClick: PropTypes.func,
};
export default MenuItem;
