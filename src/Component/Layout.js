import { Divider } from '@mui/material';
import React from 'react'
import { Rightsidebar } from './Rightsidebar/Rightsidebar';
import useStyle from './Styles'


export const Layout = () => {
    const classes =useStyle();
    return (
        <div className={classes.root}>
            <Rightsidebar>

            </Rightsidebar>
            <Divider orientation={"vertical"} className={classes.divider}/>

            <div className={classes.mainPart} >main part</div>
            <div className={classes.leftSidebar}> left sidebar</div>


        </div>
    )
}
