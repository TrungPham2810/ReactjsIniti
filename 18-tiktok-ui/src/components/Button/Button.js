import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './Button.module.scss';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

function Button({
    to,
    href,
    primary = false,
    outline = false,
    small = false,
    large = false,
    text = false,
    rightIcon,
    leftIcon,
    children,
    rounded = false,
    className,
    onClick,
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper', {
        primary,
        outline,
        text,
        small,
        large,
        rounded,
        [className]: className,
    });

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}

            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    to: PropTypes.string,
    href: PropTypes.string,
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.bool,
    text: PropTypes.bool,
    rightIcon: PropTypes.node,
    leftIcon: PropTypes.node,
    rounded: PropTypes.bool,
    className: PropTypes.string,
    onClick: PropTypes.func,
};

export default Button;
