import classNames from 'classnames/bind';
import styles from './Navigation.module.scss';
import { Link } from 'react-router-dom';
import 'tippy.js/dist/tippy.css'; // optional
import Tippy from '@tippyjs/react';
import { useState } from 'react';
const cx = classNames.bind(styles);
const NAV_ITEMS = [
    {
        id: 1,
        title: "What's New",
    },
    {
        id: 2,
        title: 'Women',
        to: '/Women',
        children: [
            {
                id: 3,
                title: 'Top',
                to: '/Top',
                children: [
                    {
                        id: 4,
                        title: 'Jacket',
                        to: '/Jacket',

                        children: [
                            {
                                id: 7,
                                title: '7',
                                to: '/7',
                            },
                            {
                                id: 8,
                                title: '8',
                                to: '/8',
                            },
                        ],
                    },
                    {
                        id: 5,
                        title: 'Hoodies',
                        to: '/Hoodies',
                    },
                ],
            },
            {
                id: 6,
                title: 'Bottom',
                to: '/bottom',
            },
        ],
    },
];

function Navigation() {
    const [menuStates, setMenuStates] = useState({});
    const handleMenuHover = (menuId, value) => {
        setMenuStates((prevState) => ({
            ...prevState,
            [menuId]: value,
        }));
        // console.log(menuStates);
    };
    // console.log(menuStates);
    const renderNav = (data, isChild, level = 0) => {
        return data.map((item, index) => {
            let Element = 'div';
            if (item.to !== undefined && item.to) {
                Element = Link;
            }
            let classChild = '';
            if (isChild !== undefined) {
                classChild = 'child';
            }

            var placement = 'bottom-start';
            if (level > 0) {
                placement = 'right-start';
            }

            if (item.children) {
                var childHtml = renderNav(item.children, true, ++level);
                // console.log(item.id + ' ' + menuStates[item.id]);
                return (
                    <div key={item.id} className={cx('nav-item', classChild)}>
                        <Tippy
                            interactive={true}
                            placement={placement}
                            onHide={() => {
                                console.log('onhide');
                                handleMenuHover(item.id, false);
                            }}
                            onMount={() => {
                                console.log('onMount');
                                handleMenuHover(item.id, true);
                            }}
                            render={(attrs) => (
                                <div
                                    className={cx('nav-item-child')}
                                    style={{ display: menuStates[item.id] ? 'block' : 'none' }}
                                    {...attrs}
                                >
                                    {childHtml}
                                </div>
                            )}
                            key={item.id}
                        >
                            <Element className={cx('link-nav')} to={item.to}>
                                {item.title} {menuStates[item.id] ? 'yes' : 'no'}
                            </Element>
                        </Tippy>
                    </div>
                );
            } else {
                return (
                    <div className={cx('nav-item')} key={index}>
                        <Element className={cx('link-nav')} to={item.to}>
                            {item.title}
                        </Element>
                    </div>
                );
            }
        });
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>{renderNav(NAV_ITEMS)}</div>
        </div>
    );
}

export default Navigation;
