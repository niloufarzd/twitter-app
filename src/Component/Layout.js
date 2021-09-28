import React from 'react'
import useStyle from './Styles'


export const Layout = () => {
    const classes =useStyle();
    return (
        <div className={classes.root}>
            <div className={classes.rightSidebar}> منوی سمت راست</div>
            <div className={classes.mainPart} >main part</div>
            <div className={classes.leftSidebar}> left sidebar</div>


        </div>
    )
}
