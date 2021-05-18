import React, {Component, Fragment} from 'react';
import NavBar from '../components/desktop';
import Footer from '../components/Footer';
import Head from 'next/head';

class Login extends React.Component{
 render(){
 	return(
 		<Fragment>
 			<Head>
 				<title>Login</title>
 			</Head>
 			<NavBar/>
 			<h1>This is our login page</h1>
 			<Footer/>
 		</Fragment>
 		)
 }
}
export default Login;