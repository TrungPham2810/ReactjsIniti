import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEllipsisVertical,
    faEarthAsia,
    faQuestion,
    faKeyboard,
    faHomeUser,
    faGear,
    faEye,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import 'tippy.js/dist/tippy.css'; // optional
import Tippy from '@tippyjs/react';
import { default as routesConfig } from '~/config/routes';
// import { hello as ok } from '~/config/routes';

import { Link } from 'react-router-dom';

import Button from '~/components/Button';
import Search from '~/components/Layout/components/Search';

import Menu from '~/components/Popper/Menu';
import { MessageIcon, UploadIcon } from '~/components/Icons';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'de',
                    title: 'Germany',
                    children: {
                        title: 'Language2',
                        data: [
                            {
                                code: 'en',
                                title: 'English2',
                            },
                            {
                                code: 'de',
                                title: 'Germany2',
                                children: {
                                    title: 'Language3',
                                    data: [
                                        {
                                            code: 'en',
                                            title: 'English3',
                                        },
                                        {
                                            code: 'de',
                                            title: 'Germany3',
                                        },
                                    ],
                                },
                            },
                        ],
                    },
                },
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vn',
                    title: 'Tieng Viet',
                },
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vn',
                    title: 'Tieng Viet',
                },
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vn',
                    title: 'Tieng Viet',
                },
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vn',
                    title: 'Tieng Viet',
                },
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vn',
                    title: 'Tieng Viet',
                },
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vn',
                    title: 'Tieng Viet',
                },
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vn',
                    title: 'Tieng Viet',
                },
                {
                    code: 'vn',
                    title: 'Tieng Viet',
                },
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vn',
                    title: 'Tieng Viet',
                },
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vn',
                    title: 'Tieng Viet',
                },
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vn',
                    title: 'Tieng Viet',
                },
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vn',
                    title: 'Tieng Viet',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

function Header() {
    const handleOnChange = (menuItem) => {
        console.log(menuItem);
    };
    const currentUser = true;

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faHomeUser} />,
            title: 'View Profile',
            to: '/view',
        },
        {
            icon: <FontAwesomeIcon icon={faEye} />,
            title: 'Get Coin',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Setting',
            to: '/settings',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log Out',
            to: '/logout',
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <Link to={routesConfig.home}>
                        <img src={images.logo} alt="Logo" />
                    </Link>
                </div>
                <Search />

                <div className={cx('action')}>
                    {currentUser ? (
                        <>
                            <Tippy content="Upload" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>
                            <Tippy content="Upload" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary className={cx('blue-text')}>
                                Register
                            </Button>
                            <Button rounded>Register</Button>
                            <Button to="/login">Log Link</Button>
                        </>
                    )}

                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleOnChange}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/ff1c898a1604c0146c2b42d109e98ab0~c5_100x100.jpeg?x-expires=1703001600&x-signature=YKdsmddN5t6%2FTG95Swltt5FXLng%3D"
                                alt="Mark"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}
export default Header;
