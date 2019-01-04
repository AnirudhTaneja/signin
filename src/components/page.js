import React, { Component } from 'react'
import Search from '../components/search'


class Page extends Component {
componentDidMount(){
    this.props.getMember()
}

}