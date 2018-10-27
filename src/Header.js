import React, { Component } from 'react';
import Fblogo from './logofb.png'

class Header extends Component {
    render () {
        return (
            <header style={headerContainer}>
                <div style={header}>

                    <div style={headerLogo}>
                        <img src={Fblogo} alt='test'/>
                    </div>

                    <div style={headerLogin}>
                        <form style={{marginTop : '10px'}}>
                        <table>
                            <tr>
                                <td style={loginFont}>Email atau Telepon</td>
                                <td style={loginFont}>Kata Sandi</td>
                               
                            </tr>
                            <tr>
                                <td><input type='text' /></td>
                                <td><input type='text' /></td>
                                <td><input type='submit' value='Masuk' style={{background: '#4267b2', borderRadius: '2px', border: 'solid 1px #29487d', padding: '2px 6px', color: 'white'}} /></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td><a style={{color: '#9cb4d8', fontSize: '12px'}} href='#'>Lupa Akun?</a></td>
                            </tr>
                        </table>
                        </form>
                    </div>

                </div>
            </header>
        )
    }
}

const headerContainer = {
    width: '100%',
    height: '82px',
    background: '#29487d',
    marginTop: '0',
    display: 'flex',
}
const header = {
    width: '980px',
    margin: '0 auto',
    display:'flex',
    justifyContent: 'space-between'
}
const headerLogo = {
    marginTop: '30px'
}
const headerLogin = {
    width: '394px',
}
const loginFont = {
    fontFamily:'Helvetica',
    fontSize: '12px',
    color: 'white'
}
export default Header