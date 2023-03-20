import React, { useEffect } from "react";
import FontAwesome from "react-fontawesome";
import { Link } from "react-router-dom";
import { excerpt } from "../utility";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const BlogCards = ({
    id,
    title,
    description,
    blogcontent,
    category,
    imgUrl,
    userId,
    author,
    timestamp,
    user,
    handleDelete,
  }) => {
    return (
        <div>
             <Card id ={id} style={{height:"500px"}}>
      <Card.Img variant="top" src={imgUrl} style={{height:"250px"}} />
      <Card.Body>
        <Card.Title><strong>{title}</strong></Card.Title>
        <Card.Text>
         <div dangerouslySetInnerHTML={{__html : excerpt(blogcontent, 120)}} ></div>
        </Card.Text>
        <Link to={`/detail/${id}`}><Button >Read More</Button></Link>
      </Card.Body>
    </Card>
        </div>
    );
};

export default BlogCards;