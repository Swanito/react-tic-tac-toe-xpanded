import React from 'react';
import './Square.css';

export default function Square({value, color}) {
    const styles = {
        color: color,
        fontWeight: 'bold',
        fontSize: '2em'
    }
    return (
        <div style={styles}>
            {value}
        </div>
    )
}
