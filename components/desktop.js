import React, {Component, Fragment} from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import Link from 'next/link';

class DesktopNavbar extends React.Component{
 render(){
 	return(
 		<Fragment>
 			<Navbar className="nav-bar sticky-top" collapseOnSelect expand="lg" variant="light">
				  <Link href="/">
				  <Navbar.Brand>
				  		<img className="nav-logo" src="../navlogo.svg" alt="NavLogo"/>
				  </Navbar.Brand>
				  </Link>
				  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
				  <Navbar.Collapse id="responsive-navbar-nav">
				    <Nav className="mr-auto">
				      <Nav.Link className="text-center">
				      	 	<Link activeClassName="d-none" href="/">
				      	 		<div className="nav-item-div">
				      	 		 	<i className="fa mx-1 fa-home"/> Dashboard
				      			 </div>
				      	 		
				      	 	</Link>
				      </Nav.Link>
				      <Nav.Link className="text-center">
				      	 	<Link href="/users">
				      	 		<div className="nav-item-div">
				      	 		 	<i className="fa mx-1 fa-user-alt"/> User List
				      			 </div>
				      	 		
				      	 	</Link>
				      </Nav.Link>
				      <Nav.Link className="text-center" >
                                <Link href="/categories">
                                    <div className="nav-item-div">
                                        <i className="fa mx-1 fa-list-ul"/>Category
                                    </div>
                                </Link>
                            </Nav.Link>

                            <Nav.Link className="text-center" >
                                <Link href="/products">
                                    <div className="nav-item-div">
                                        <i className="fa mx-1 fa-shopping-bag"/>Product
                                    </div>
                                </Link>
                            </Nav.Link>

                            <Nav.Link className="text-center" >
                                <Link href="/transactions">
                                    <div className="nav-item-div">
                                        <i className="fa mx-1 fa-money-bill"/>Transaction
                                    </div>
                                </Link>
                            </Nav.Link>

                            <Nav.Link className="text-center" >
                                <Link href="/reports">
                                    <div className="nav-item-div">
                                        <i className="fa mx-1 fa-file-invoice"/>Reports
                                    </div>
                                </Link>
                            </Nav.Link>
				    </Nav>
				    <Nav>
				    </Nav>
				  </Navbar.Collapse>
			</Navbar>
 		</Fragment>
 		)
 }
}
export default DesktopNavbar;