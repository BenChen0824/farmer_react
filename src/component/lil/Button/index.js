import { useState } from 'react';
import styles from './Button.module.css';
import clsx from 'clsx';

// classes = { button, active }
// example:
// <Button classes={{ button: 'anotherClass', active: 'anotherClass' }}>
//   My Btn
// </Button>

function Button(props) {
    const [clicked, setClicked] = useState(false);

    const buttonClasses = () => {
        const { classes } = props;
        const { button = '', active = '' } = classes || {};
        return clsx(styles.btn, button, {
            [styles.active]: clicked,
            [active]: clicked,
        });
    };

    return (
        <>
            <button
                type="submit"
                className={buttonClasses()}
                onClick={() => {
                    setClicked(!clicked);
                }}
            >
                {props.name}
            </button>
        </>
    );
}

export default Button;
