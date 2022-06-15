import React from "react";
import "./styles.css"
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ParrotLogo from "../../assets/icons/ParrotLogo";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function NavBar () {

    return (
        <div className="navBar">
            <div className="navBarTop">  
                <div className="navBarTopTitleContainer">
                    <div className="navBarLogo"><ParrotLogo width={'40px'} height={'40px'} /></div>
                    <div className="navBarTitle">Palitos para Alanna</div>
                </div>

                <div className="shoppingCartIcon">
                    <ShoppingCartIcon fontSize="large"/>
                </div>
            </div>
            <div className="navBarButtonWrap">
                <ButtonGroup orientation="horizontal" variant="text" aria-label="horizontal contained button group" >
                    <Button>Juguetes Madera</Button>
                    <Button>Juguetes Acero</Button>
                    <Button>Jaulas</Button>
                    <Button>Alimentación</Button>
                    <Button>Otros</Button>
                </ButtonGroup>
            </div>
        </div>
    )
}

export default NavBar;