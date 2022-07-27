import React, { useRef } from 'react';
import styles from './SearchP.module.css';
import { GoSearch } from 'react-icons/go';

function SearchP() {
    const inputRef = useRef();

    const handleRootClicked = () => {
        console.log('click on root');
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    const handleIconClicked = (e) => {
        e.stopPropagation();
        console.log('click on icon');
        // TODO: submit value to query products
    };

    return (
        <>
            <div className={styles.search} onClick={handleRootClicked}>
                <input
                    ref={inputRef}
                    type="text"
                    placeholder="水蜜桃 鮭魚 和牛..."
                />
                <span className={styles.icon} onClick={handleIconClicked}>
                    <GoSearch size={20} />
                </span>
            </div>
        </>
    );
}

export default SearchP;
