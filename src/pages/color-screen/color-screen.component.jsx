import React from 'react';
import { useParams } from 'react-router-dom';
import './color-screen.styles.css';

export default function ColorScreenPage() {
    const { color } = useParams();
    return (
        <div style={{ backgroundColor: `${color}`, height: '100vh', width: '100vw' }}>
            as
        </div>
    )

    
    // Other way to do it using Class Components: 
    /*
        ColorScreenPage(props)
        <div style={{ backgroundColor: props.match.params.color }}></div>  
    */

}
