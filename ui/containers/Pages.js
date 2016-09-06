import React, { Component } from 'react'
import fetch from 'isomorphic-fetch'
import { Pages } from '../components'

export default class PagesContainer extends Component {

	state = {
		pages: []
	}

	componentDidMount() {
		fetch('/api/v1/pages')
		.then((response) => response.json())
		.then((pages) => this.setState({ pages }))
	}

	render() {
    	return <Pages pages={this.state.pages} />
 	}
}