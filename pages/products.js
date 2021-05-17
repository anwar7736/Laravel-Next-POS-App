import React, {Component, Fragment} from 'react';
import NavBar from '../components/desktop';
import Head from 'next/head';

class Products extends React.Component{
 render(){
 	return(
 		<Fragment>
 			<Head>
 				<title>Products</title>
 			</Head>
 			<NavBar/>
 			<h1>This is our products page</h1>
 		</Fragment>
 		)
 }
}
export default Products;