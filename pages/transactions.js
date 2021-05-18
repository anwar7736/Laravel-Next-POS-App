import React, {Component, Fragment} from 'react';
import NavBar from '../components/desktop';
import TrasactionList from '../components/transactionlist';
import Footer from '../components/Footer';
import Head from 'next/head';

class Transactions extends React.Component{
 render(){
 	return(
 		<Fragment>
			<Head>
 				<title>Transactions</title>
 			</Head>
 			<NavBar/>
 			<TrasactionList/>
 			<Footer/>
 		</Fragment>
 		)
 }
}
export default Transactions;