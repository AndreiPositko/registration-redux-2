import React from 'react';
import styles from './style.module.scss';
import { useDispatch} from 'react-redux';

import { logOut } from '../../store/auth/actions';
import routes from './../../constants/routes';

import MainStyled from './styled';
import { Link } from 'react-router-dom';

const Main = ({ history }) => {

    const dispatch = useDispatch();

    const logOutHandler = () => {
        dispatch(logOut());
        history.push(routes.login)
    }

    return (
        <div className={styles.main__page}>
            <MainStyled.Title>Main Page</MainStyled.Title>
            <MainStyled.BtnLogout onClick={logOutHandler}>LogOut</MainStyled.BtnLogout>
            <Link to={routes.contacts}>Contacts</Link>
        </div>
    )
}

export default Main;
