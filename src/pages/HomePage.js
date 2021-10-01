import React from 'react'
import { Container } from '@material-ui/core'
import Header from '../components/Header'
import PostList from '../components/PostList'

function Homepage() {
   return (
      <Container maxWidth='lg'>
         <Header />
         <PostList />
      </Container>
   )
}

export default Homepage
