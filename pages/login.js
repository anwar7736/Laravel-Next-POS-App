import React, {Component, Fragment} from 'react';
import NavBar from '../components/desktop';
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
 		</Fragment>
 		)
 }
}
export default Login;