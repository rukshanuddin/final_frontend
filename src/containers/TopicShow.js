import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchTopicLink } from '../actions/movieActions'
// Components
import MovieDetail from '../components/MovieDetail'
import { Form, FormControl } from 'react-bootstrap'

class MovieShow extends Component {
  componentDidMount() {
    let paramsId = parseInt(this.props.match.params.id, 10)
    this.props.fetchMovieId(paramsId)