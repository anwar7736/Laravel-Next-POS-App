import React, {Component, Fragment} from 'react';
import NavBar from '../components/desktop';
import Head from 'next/head';

class Transactions extends React.Component{
 render(){
 	return(
 		<Fragment>
			<Head>
 				<title>Transactions</title>
 			</Head>
 			<NavBar/>
 			<h1>This is our transactions page</h1>
 		</Fragment>
 		)
 }
}
export default Transactions;