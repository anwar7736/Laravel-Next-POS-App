import React, {Component, Fragment} from 'react';
import NavBar from '../components/desktop';
import Head from 'next/head';

class Users extends React.Component{
 render(){
 	return(
 		<Fragment>
 			<Head>
 				<title>Users</title>
 			</Head>
 			<NavBar/>
 			<h1>This is our users page</h1>
 		</Fragment>
 		)
 }
}
export default Users;