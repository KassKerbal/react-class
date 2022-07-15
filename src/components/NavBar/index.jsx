import React, { useContext } from "react";
import styles from "./styles.module.scss";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ParrotLogo from "../../assets/icons/ParrotLogo";
import CartWidget from "../CartWidget";
import { useNavigate } from 'react-router-dom';
import { Shop } from '../../context/ShopContext';

function NavBar() {

    const value = useContext(Shop);

    const navigate = useNavigate();

    const handleNavigate = (e) => {
        navigate(e);
    }

    const categories = [
        {
            "route": "food",
            "tagName": "alimentación"
        },
        {
            "route": "cages",
            "tagName": "jaulas"
        },
        {
            "route": "toys",
            "tagName": "juguetes"
        },
        {
            "route": "accessories",
            "tagName": "accesorios"
        },
    ]

    const buttonCategories = categories.map((e, index) => <Button onClick={() => handleNavigate(`/category/${e.route}`)} key={index}>{e.tagName}</Button>)

    return (
        <div className={styles.main}>
            <div className={styles.topWrap}>
                <div className={styles.logoContainer}>
                    <div className={styles.clickContainer} onClick={() => handleNavigate('/')}>
                        <div className={styles.logo}><ParrotLogo width={'40px'} height={'40px'} /></div>
                        <div className={styles.title}>Palitos para Alanna</div>
                    </div>
                </div>
                <div className={styles.cartWidgetContainer}>
                    <CartWidget />
                </div>
            </div>
            <div className={styles.buttonWrap}>
                <ButtonGroup orientation="horizontal" variant="text" aria-label="horizontal contained button group" >
                    {buttonCategories}
                </ButtonGroup>
            </div>
        </div>
    )
}

export default NavBar;