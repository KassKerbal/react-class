import React from "react";
import "./NavBarStyles.css"
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import FlutterDashOutlinedIcon from '@mui/icons-material/FlutterDashOutlined';

function NavBar () {

    return (
        <div className="navBarWrap">
            <div className="navBarTitle"> <FlutterDashOutlinedIcon/> <span>Palitos Para Alanna</span></div>
            <div className="productTitle">Productos</div>

            <div className="navBarButtonWrap">
                <ButtonGroup orientation="vertical" variant="text" aria-label="vertical contained button group" >
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