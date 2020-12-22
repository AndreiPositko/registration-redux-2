import React from 'react';
import styles from './style.module.scss';
import Header from './components/Header';
import Title from './styled';

import { useDispatch } from 'react-redux';
import { logOut } from '../../store/user.actions';

export default function Main() {

    const dispatch = useDispatch();

    return (
        <div className={styles.main__page}>
            <Title>Main Page</Title>
            <Header />
            <button onClick={()=> dispatch(logOut())}>LogOut</button>
        </div>
    )
}
