import React, {Component} from 'react'
import NavFooter from './NavFooter'

export default class TopFooter extends Component{
    render(){
        
        return(
            
            <div className="top_footer">
                <div style={{
                    backgroundImage:'url("./assets/logo.png")',
                    width:'10vw',
                    marginTop:'3%',
                    backgroundSize:'contain',
                    backgroundRepeat:'no-repeat',
                    height:'100%',
                   
                }}>
                </div>
                <NavFooter/>
            </div>
            
    )
}}