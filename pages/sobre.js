import Link from 'next/link';
import {useState} from 'react';

function Sobre() {
    return (
    <div>
        <h1>Sobre</h1>
        <Link href='/'>
        <a>Home</a>
        </Link>
    </div>
    )
}

export default Sobre