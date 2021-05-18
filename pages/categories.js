
export async function getStaticProps() {
    const data = [
        {
            id: 1,
            cat_name: 'Laptop',
            cat_code: 'Laptop110',
            cat_icon: '/laptop.svg',

        },
        {
            id: 3,
            cat_name: 'Laptop',
            cat_code: 'Laptop110',
            cat_icon: '/laptop.svg',
        },
        {
            id: 4,
            cat_name: 'Laptop',
            cat_code: 'Laptop110',
            cat_icon: '/laptop.svg',
        },
        {
            id: 6,
            cat_name: 'Laptop',
            cat_code: 'Laptop110',
            cat_icon: '/laptop.svg',
        },

    ]

return {
        props:{
            dataTable:data,
        }
    }


}

import React, {Component, Fragment} from 'react';
import NavBar from '../components/desktop';
import CategoryList from '../components/categorylist';
import Footer from '../components/Footer';
import Head from 'next/head';

class Categories extends React.Component{
 render(){
 	return(
 		<Fragment>
 			<Head>
 				<title>Categories</title>
 			</Head>
 			<NavBar/>
 			<CategoryList 
 				dataTable={this.props.dataTable}
 			/>
 			<Footer/>
 		</Fragment>
 		)
 }
}
export default Categories;