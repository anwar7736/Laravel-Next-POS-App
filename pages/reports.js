import React, {Component, Fragment} from 'react';
import NavBar from '../components/desktop';
import Head from 'next/head';

class Reports extends React.Component{
 render(){
 	return(
 		<Fragment>
 			<Head>
 				<title>Reports</title>
 			</Head>
 			<NavBar/>
 			<h1>This is our reports page</h1>
 		</Fragment>
 		)
 }
}
export default Reports;