import React from 'react';
import './Card.css';

const Card = (props) => {
    // eslint-disable-next-line
    const styles = "card" + " " + props.className;
    return <div className={styles}>{props.children}</div>
};

export default Card;