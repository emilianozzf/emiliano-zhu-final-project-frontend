import React from 'react';
import PropTypes from 'prop-types';
import getFormattedDate from '../../utils/getFormattedDate';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './post.scss';
import Comment from './comment/Comment';
import { Link } from 'react-router-dom';

const ViewPost = ({ post, auth, onDelete, onEdit, onReply, onDeleteComment }) => {
	const postDate = getFormattedDate(post.date);
	var user_id = auth.isAuthenticated ? auth.user.id : '';
	let comments = [];
	for (let i = 0; i < post.comments.length; i++) {
		comments.push(
			<Comment
				key={post.comments[i]._id}
				auth={auth}
				comment={post.comments[i]}
				onDelete={() => onDeleteComment(post.comments[i]._id)}
			/>
		);
	}
	return (
		<Container className="mt-4 viewPost">
			<Container>
			<Row>
				<Link to="/discussion">
					<i className="fas fa-backward" />
					<strong>BACK</strong>
				</Link>
			</Row>
			<Row>
				<Col className="text-center postTitle" style={{color:"rgb(255,255,255)", fontWeight:"bold"}}>
					<h2>{post.title}</h2>
				</Col>
			</Row>
			<Row className="my-4" style={{ whiteSpace: 'pre-wrap', color:"rgb(255,255,255)",fontSize:"1.1em" }}>
				<Col>{post.body}</Col>
			</Row>
			<Row className="d-flex flex-column font-italic footerStyle" style={{color: "rgb(200,198,198)",fontStyle: "italic"}}>
				<Col>Created by : {post.author.user_name}</Col>
				<Col>Date: {postDate}</Col>
			</Row>

			{auth.isAuthenticated && user_id === post.author.id ? (
				<Row className="mt-4 mb-5">
					<Col className="text-center">
						<button type="button" className="btn btn-warning" onClick={onEdit} style={{
							marginRight:"10px",
							fontSize:"bold"
						}}>
							Edit
						</button>
						<button type="button" class="btn btn-danger" onClick={onDelete} style={{
							marginRight:"10px",
							fontSize:"bold"
						}}>
							Delete
						</button>
						<button type="button" class="btn btn-success" onClick={onReply} style={{
							marginRight:"10px",
							fontSize:"bold"
						}}>
							Reply
						</button>
					</Col>
				</Row>
			) : (
				<Row className="mt-4 mb-5">
					<Col className="text-center">
						<button type="button" className="btn btn-success" onClick={onReply}
										style={{
											marginRight: "10px",
											fontSize: "bold"
										}}>
							Reply
						</button>
					</Col>
				</Row>
			)}
			</Container>
			<p style={{color:"rgba(234, 46, 73, 0.9)", fontSize:"1.5em", marginTop:"50px",
				fontWeight:"bold"}}>Comments</p>
			{comments}
		</Container>
	);
};

ViewPost.propTypes = {
	post: PropTypes.object.isRequired,
	auth: PropTypes.object.isRequired,
	onEdit: PropTypes.func.isRequired,
	onDelete: PropTypes.func.isRequired
};

export default ViewPost;
