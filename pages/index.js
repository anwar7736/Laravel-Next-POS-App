
export async function getStaticProps(){

	const dataChart = [
	{
            t_date: '22/11/2021',
            income: 4000,
        },
        {
            t_date: '22/11/2021',
            income: 3000,
        },
        {
            t_date: '22/11/2021',
            income: 2000,
        },
        {
            t_date: '22/11/2021',
            income: 2780,
        },
        {
            t_date: '22/11/2021',
            income: 1890,
        },
        {
            t_date: '22/11/2021',
            income: 2390,
        },
        {
            t_date: '22/11/2021',
            income: 3490,
        },
	];

	const dataTableColumn = [
		{
            name: 'Receipt',
            selector: 'receipt_no',
            sortable: true,
        },
        {
            name: 'Date',
            selector: 'receipt_date',
            sortable: true,
        },
        {
            name: 'Qty',
            selector: 'qty',
            sortable: true,
        },
        {
            name: 'Total',
            selector: 'total',
            sortable: true,
        },
	];

	const dataTable = [
	 {
            id: 1,
            receipt_no: '1111',
            receipt_date: '11/11/2021',
            qty: '12',
            total: '1200',
        },
        {
            id: 1,
            receipt_no: '1111',
            receipt_date: '11/11/2021',
            qty: '12',
            total: '1200',
        },
        {
            id: 1,
            receipt_no: '1111',
            receipt_date: '11/11/2021',
            qty: '12',
            total: '1200',
        },
        {
            id: 1,
            receipt_no: '1111',
            receipt_date: '11/11/2021',
            qty: '12',
            total: '1200',
        },
        {
            id: 1,
            receipt_no: '1111',
            receipt_date: '11/11/2021',
            qty: '12',
            total: '1200',
        },
        {
            id: 1,
            receipt_no: '1111',
            receipt_date: '11/11/2021',
            qty: '12',
            total: '1200',
        },
        {
            id: 1,
            receipt_no: '1111',
            receipt_date: '11/11/2021',
            qty: '12',
            total: '1200',
        },
        {
            id: 1,
            receipt_no: '1111',
            receipt_date: '11/11/2021',
            qty: '12',
            total: '1200',
        },
        {
            id: 1,
            receipt_no: '1111',
            receipt_date: '11/11/2021',
            qty: '12',
            total: '1200',
        },
        {
            id: 1,
            receipt_no: '1111',
            receipt_date: '11/11/2021',
            qty: '12',
            total: '1200',
        }
    ];

	return {
		props : {
			TotalTransaction: '50',
			TotalIncome: '1000',
			TotalCategory: '10',
			TotalProduct: '30',
			dataChart:dataChart,
			dataTableColumn:dataTableColumn,
			dataTable:dataTable,
		}
	}
}

import React, {Component, Fragment} from 'react';
import NavBar from '../components/desktop';
import DashboardList from '../components/dashboardlist';
import Head from 'next/head';

class Index extends React.Component{
 render(){
 	return(
 		<Fragment>
 			<Head>
 				<title>Home</title>
 			</Head>
 			<NavBar/>
 			<DashboardList
 			   TotalTransaction={this.props.TotalTransaction}
 			   TotalIncome={this.props.TotalIncome}
			   TotalCategory={this.props.TotalCategory}
			   TotalProduct={this.props.TotalProduct}
			   dataChart={this.props.dataChart}
			   dataTableColumn={this.props.dataTableColumn}
			   dataTable={this.props.dataTable}
 			/>
 		</Fragment>
 		)
 }
}
export default Index;