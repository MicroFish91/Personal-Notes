// ES6 Code Snippet Shorcuts (enter)

// Import/export
imp =	import 'animate.css'; // imn = import neutral
import fs, { rename } from 'fs'; // imp = import project
imn =	imd =	rqr =	require(''); 
mde =	module.exports = {};
env =	export const nameVariable = localVariable; //env = environmental var.

// Inside of a class
con =	constructor() {}  // constructor
met =	add() {}  // method

// Arrays
fre =	array.forEach(currentItem => {}) //fre = for-each
fof =	for(const item of object) {}  //fof = for-of
fin =   for(const item in object) {}  //fin = for-in

// Functions
anfn =	(params) => {}  //anfn = anonymous function
nfn =	const add = (params) => {} // nfn = named function

// Destructuring
dob =	const {rename} = fs   // dob = destructuring object
dar =	const [first, second] = [1,2]  // dar = destructuring array

// Timed
sti =	setInterval(() => {}); 
sto =	setTimeout(() => {});

// Promise
prom =	return new Promise((resolve, reject) => {});
thenc =	.then((res) => {}).catch((err) => {});

// Console
ccl =	console.clear()
clg =	console.log(object)
cer =   console.error(object)





// ** React Snippets (tab) **

// Stateless functional component
rfe = const Home = () => {
    return (  );
}
 
export default Home;

// 
imrc =	imp React, { Component } from 'react'
imrs =	imp React, { useState } from 'react'
imrse =	imp React, { useState, useEffect } from 'react'
props =	this.props.propName
state =	this.state.stateName
cp→	const { } = this.props
cs→	const { } = this.state

// Class
rcc = std class boilerplate

// Constructor
rconst =	constructor(props) with this.state
bnd =	this.methodName = this.methodName.bind(this)

// Render
ren =	render() { return( ) }

// Set State
sst =	this.setState({ })
ssf =	this.setState((state, props) => return { })


// Browser router
imb = { BrowserRouter as Router } from 'react-router-dom'
imbc = { Route, Switch, NavLink, Link } from 'react-router-dom'

