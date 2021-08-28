import React from 'react';
import InputBase from '@material-ui/core/InputBase';
import { useStyles } from './style.js';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import './style.css';


function RegisterData() {
    const classes = useStyles();
    const [checked, setChecked] = React.useState(false);
    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    return (
        <div className="page_container">
            <div className="account_container">

                <h5 className="account_title">Account</h5>
                <form className={classes.root} noValidate>
                    <InputBase
                        className={classes.margin}
                        required
                        defaultValue="EmailAdress*"
                        inputProps={{ 'aria-label': 'naked' }}
                    />
                    <InputBase
                        className={classes.margin}
                        required
                        defaultValue="Password*"
                        inputProps={{ 'aria-label': 'naked' }}
                    />
                    <div className="check-box">
                        <Checkbox
                            className={classes.checkBoxElement}
                            checked={checked}
                            onChange={handleChange}
                            color="primary"
                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                        />
                        <p className="text_check-box">Remember me</p>
                    </div>
                    <Button className={classes.buttonlogin} variant="contained" >LOGIN</Button>
                    <div className="link_container">
                        <p className="link"><a href="">Forgot password?</a></p>
                        <p className="link"><a href="">Don´t have an account? Sing Up</a></p>

                    </div>
                </form>

            </div>
            <div className="singup_container">
                <h5 className="singup_title">Sing Up</h5>
                <p className="singup_paragraph">Book your teleports faster, pay with Bitcoin and get rewards for being a subscriber to the Business Plan.</p>
                <Button className={classes.buttonlogin} variant="contained" >SING UP</Button>
                <p className="link"><a href="">Do you want to see our plans before?</a></p>
            </div>
        </div>
    )
}
export default RegisterData;