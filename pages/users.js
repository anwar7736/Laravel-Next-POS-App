export async function getStaticProps(){

	const data = [
        {
            id: 1,
            fullname: 'Md Anwar Hossain',
            username: 'Anwar',
            roll: 'admin',
            lastactivity: '12/12/2021',
        },
        {
            id: 2,
            fullname: 'Md Anwar Hossain',
            username: 'Anwar',
            roll: 'admin',
            lastactivity: '13/12/2021',
        },
        {
            id: 3,
            fullname: 'Md Anwar Hossain',
            username: 'Anwar',
            roll: 'admin',
            lastactivity: '14/12/2021',
        },
        {
            id: 4,
            fullname: 'Md Anwar Hossain',
            username: 'Anwar',
            roll: 'admin',
            lastactivity: '16/12/2021',
        },

    ]


	return {
		props : {
			dataTable:data,
		}
	}
}


import React, {Component, Fragment} from 'react';
import NavBar from '../components/desktop';
import UserList from '../components/userlist';
import Footer from '../components/Footer';
import Head from 'next/head';

class Users extends React.Component{
 render(){

 	return(
 		<Fragment>
 			<Head>
 				<title>Users</title>
 			</Head>
 			<NavBar/>
 			<UserList
 			  dataTable={this.props.dataTable}
 			/>
            <Footer/>
 		</Fragment>
 		)
 }
}
export default Users;