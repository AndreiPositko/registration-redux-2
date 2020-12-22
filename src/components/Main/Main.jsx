import React from 'react';
import styles from './style.module.scss';
import Header from './components/Header';
import MainStyled from './styled';

import { useDispatch } from 'react-redux';
import { logOut } from '../../store/user.actions';

export default function Main() {

    const dispatch = useDispatch();

    return (
        <div className={styles.main__page}>
            <MainStyled.Title>Main Page</MainStyled.Title>
            <Header />
            <MainStyled.BtnLogout onClick={()=> dispatch(logOut())}>LogOut</MainStyled.BtnLogout>
        </div>
    )
}
