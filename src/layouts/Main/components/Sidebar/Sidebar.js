import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/styles';
import {Divider, Drawer} from '@material-ui/core';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import {Profile, SidebarNav} from './components';

const useStyles = makeStyles(theme => ({
    drawer: {
        width: 240,
        [theme.breakpoints.up('lg')]: {
            marginTop: 64,
            height: 'calc(100% - 64px)'
        }
    },
    root: {
        backgroundColor: theme.palette.white,
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        padding: theme.spacing(2)
    },
    divider: {
        margin: theme.spacing(2, 0)
    },
    nav: {
        marginBottom: theme.spacing(2)
    }
}));

const Sidebar = props => {
    const {open, variant, onClose, className, ...rest} = props;

    const classes = useStyles();

    const pages = [
        {
            title: 'Trade',
            href: '/trade-operations',
            icon: <ShoppingCartIcon/>
        },
        {
            title: 'Flow',
            href: '/flow-operations',
            icon: <ImportExportIcon/>
        },
        {
            title: 'Transfers',
            href: '/transfer-operations',
            icon: <AutorenewIcon/>
        },
        {
            title: 'Accounts',
            href: '/cash-accounts',
            icon: <AccountBalanceIcon/>
        },
    ];

    return (
        <Drawer
            anchor="left"
            classes={{paper: classes.drawer}}
            onClose={onClose}
            open={open}
            variant={variant}
        >
            <div
                {...rest}
                className={clsx(classes.root, className)}
            >
                <Profile/>
                <Divider className={classes.divider}/>
                <SidebarNav
                    className={classes.nav}
                    pages={pages}
                />
            </div>
        </Drawer>
    );
};

Sidebar.propTypes = {
    className: PropTypes.string,
    onClose: PropTypes.func,
    open: PropTypes.bool.isRequired,
    variant: PropTypes.string.isRequired
};

export default Sidebar;
