import React, {Component, Fragment} from 'react';
import NavBar from '../components/desktop';
import Head from 'next/head';

class Categories extends React.Component{
 render(){
 	return(
 		<Fragment>
 			<Head>
 				<title>Categories</title>
 			</Head>
 			<NavBar/>
 			<h1>This is our categories page</h1>
 		</Fragment>
 		)
 }
}
export default Categories;