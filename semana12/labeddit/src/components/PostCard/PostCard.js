import React from 'react'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import { PostCardContainer, PostCardContent } from './styled'

const PostCard = (props) => {

  return (
    <PostCardContainer onClick={props.onClick}>
      <CardActionArea>
        <CardMedia
          component={'img'}
          alt={props.title}
          height={'150px'}
          image={props.image}
          title={props.title}
        />
        <PostCardContent>
          <Typography align={'center'}>
            {props.title.toUpperCase()}
          </Typography>
        </PostCardContent>
      </CardActionArea>
    </PostCardContainer>
  )
}

export default PostCard
