import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
// import TippyHeadless from 'tippy.js/headless';
import TippyHeadless from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; // optional
import { useState } from 'react';

const cx = classNames.bind(styles);
function Search() {
    const [showResult, setShowResult] = useState(false);
    const handleHideResult = () => {
        setShowResult(false);
    };
    return (
        <div className={cx('wrapper')}>
            <TippyHeadless
                interactive={true}
                visible={showResult}
                placement={'bottom-start'}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        Item search
                    </div>
                )}
                onClickOutside={handleHideResult}
            >
                <div className={cx('search')}>
                    <input
                        type="text"
                        className={cx('search-input')}
                        placeholder="Search"
                        spellCheck="false"
                        onFocus={() => setShowResult(true)}
                    />
                    <FontAwesomeIcon className={cx('icon-search')} icon={faMagnifyingGlass} />
                </div>
            </TippyHeadless>
        </div>
    );
}

export default Search;
