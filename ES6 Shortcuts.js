// ES6 Code Snippet Shorcuts (enter)

// Import/export
imp =	import fs from 'fs';  // imp = import project
imn =	import 'animate.css'  // imn = import neutral
imd =	import {rename} from 'fs';  // imd = import destructured
rqr =	require(''); 
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
sfc = const Home = () => {
    return (  );
}
 
export default Home;

// 
imrc =	import React, { Component } from 'react'
imrs =	import React, { useState } from 'react'
imrse =	import React, { useState, useEffect } from 'react'

props =	this.props.propName
state =	this.state.stateName

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