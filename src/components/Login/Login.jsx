import { Form, Formik } from 'formik';

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FormField } from 'components/FormField/FormField';
import { defaultValues, validationSchema } from './formikConfig';
import { fb } from 'hooks';

export const Login = () => {
    const history = useHistory();
    const [serverError, setServerError] = useState('');
    const login = ({ email, password},{setSubmitting}) => {
        fb.auth.signInWithEmailAndPassword(email,password).then(res => {
            if(!res.user) {
                setServerError('Login Issues, retry?',);
            }            
        }).catch(err=>{
            if(err.code === 'auth/wrong-password') {
                setServerError('Wrong Password/Username');
            } else if (err.code === 'auth/user-not-found') {
                setServerError('No account found');
            } else {
                setServerError("Something's broken");
            }
        });
    };
    return (
        <div className='auth-form'>
            <h1>Login</h1>

            <Formik
            onSubmit={login}
            validateOnMount={true}
            initialValues={defaultValues}
            validationSchema={validationSchema}
          >
            {({isValid, isSubmitting}) => (
                <Form>
                    <FormField name='email' label="Email" type='email'></FormField>
                    <FormField name='password' label="Password" type='password'></FormField>
                <div className="auth-link-container">
                    Don't have an account?{' '}
                    <span
                        className="auth-link"
                        onClick={()=>history.push('signup')}
                    >
                        Signup        
                    </span>
                </div>
               <button type="submit" disabled={!isValid || isSubmitting}>
                Login
               </button>
                </Form>
            )}
          </Formik>
          {!!serverError && <div className="error">{serverError}</div>}
        </div>
    )



};
