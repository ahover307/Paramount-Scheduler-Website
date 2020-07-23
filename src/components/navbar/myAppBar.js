import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ParamountLogo from "../../png/ParamountLogo.png";
import {colorPurple} from "../globalFunctions"

//https://material-ui.com/components/app-bar/

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function MenuAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" style={{background: colorPurple()}}>
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        {/*TODO Menu button for links*/}
                        <MenuIcon/>
                    </IconButton>

                    <img src={ParamountLogo} height={'45'} width={'103'}
                         alt=
                             {<Typography position="center" variant="h6" className={classes.title}>
                                 Paramount Sports Complex
                             </Typography>}
                    />

                </Toolbar>
            </AppBar>
        </div>
    );
}
