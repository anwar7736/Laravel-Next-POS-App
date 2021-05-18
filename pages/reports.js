import React, {Component, Fragment} from 'react';
import NavBar from '../components/desktop';
import ReportList from '../components/reportlist';
import Footer from '../components/Footer';
import Head from 'next/head';

class Reports extends React.Component{
 render(){
 	return(
 		<Fragment>
 			<Head>
 				<title>Reports</title>
 			</Head>
 			<NavBar/>
 			<ReportList/>
 			<Footer/>
 		</Fragment>
 		)
 }
}
export default Reports;