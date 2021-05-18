export async function getStaticProps() {
    const data = [
        {
            id: 1,
            product_name: 'Laptop',
            product_code: 'Laptop110',
            product_icon: '/laptop.svg',
            product_price: '10,000',
            product_category: 'Laptop',
            product_remarks: 'Asus',

        },
        {
            id: 4,
            product_name: 'Laptop',
            product_code: 'Laptop110',
            product_icon: '/laptop.svg',
            product_price: '10,000',
            product_category: 'Laptop',
            product_remarks: 'Asus',
        },
        {
            id: 6,
            product_name: 'Laptop',
            product_code: 'Laptop110',
            product_icon: '/laptop.svg',
            product_price: '10,000',
            product_category: 'Laptop',
            product_remarks: 'Asus',
        },
        {
            id: 10,
            product_name: 'Laptop',
            product_code: 'Laptop110',
            product_icon: '/laptop.svg',
            product_price: '10,000',
            product_category: 'Laptop',
            product_remarks: 'Asus',
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
import PrdouctList from '../components/productlist';
import Footer from '../components/Footer';
import Head from 'next/head';

class Products extends React.Component{
 render(){
 	return(
 		<Fragment>
 			<Head>
 				<title>Products</title>
 			</Head>
 			<NavBar/>
 			<PrdouctList
 			  dataTable={this.props.dataTable}
 			/>
 			<Footer/>
 		</Fragment>
 		)
 }
}
export default Products;