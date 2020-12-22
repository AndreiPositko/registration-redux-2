import React from 'react';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';

import { logIn, logOut } from '../../store/user.actions';

import styles from './style.module.scss';
import LogInStyled from './styled';

const LogIn = () =>  {

    const { register, handleSubmit, errors } = useForm();
    const dispatch = useDispatch();

    const { userName, password } = useSelector(state =>
    ({
        userName: state.userName,
        password: state.password,
        isLoggedIn: state.isLoggedIn,
    }))

    const onSubmit = (data) => {
        if (data.userName === userName && data.password === password) {
            dispatch(logIn());
        } else {
            dispatch(logOut());
        }
        console.log(data);
    }

    return (
        <LogInStyled.Header>
            <LogInStyled.Form className="main__form" onSubmit={handleSubmit(onSubmit)}>
                <LogInStyled.Title>Log In</LogInStyled.Title>
                <label htmlFor="Hello">User Name</label>
                <LogInStyled.Input
                    type="text"
                    name="userName"
                    placeholder="UserName"
                    ref={register({ required: true, minLength: 5 })}
                />
                {errors.userName && errors.userName.type === 'required' && <p className={styles.error}>This field is required</p>}
                {errors.userName && errors.userName.type === 'minLength' && <p className={styles.error}>This field is required minLength of 5 symbols</p>}

                <label htmlFor="">Password</label>
                <LogInStyled.Input
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    ref={register({ required: true, minLength: 5})}
                />
                {errors.password && errors.password.type === 'required' && <p className={styles.error}>This field is required</p>}
                {errors.password && errors.password.type === 'minLength' && <p className={styles.error}>This field is required minLength of 5 symbols</p>}

                <LogInStyled.BtnSubmit type="submit" className="btn__submit" value="Send" />
            </LogInStyled.Form>
        </LogInStyled.Header>
    )
}

export default LogIn;
