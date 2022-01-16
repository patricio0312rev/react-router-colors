import React from 'react';
import { useParams } from 'react-router-dom';
import './color-screen.styles.css';

export default function ColorScreenPage() {
    const { color } = useParams();
    return (
        <div>
            {color}
        </div>
    )
}
