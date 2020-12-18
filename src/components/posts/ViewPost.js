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
			<Row>
				<Link to="/">
					<i className="fas fa-backward" />
					BACK
				</Link>
			</Row>
			<Row>
				<Col className="text-center postTitle">
					<h2>{post.title}</h2>
				</Col>
			</Row>
			<Row className="my-4" style={{ whiteSpace: 'pre-wrap' }}>
				<Col>{post.body}</Col>
			</Row>
			<Row className="d-flex flex-column font-italic footerStyle">
				<Col>Created by : {post.author.user_name}</Col>
				<Col>Date: {postDate}</Col>
			</Row>
			{auth.isAuthenticated && user_id === post.author.id ? (
				<Row className="mt-4 mb-5">
					<Col className="text-center">
						<Button className="mr-2" variant="outline-info" onClick={onEdit}>
							Edit
						</Button>
						<Button className="mr-2" variant="outline-danger" onClick={onDelete}>
							Delete
						</Button>
						<Button variant="outline-success" onClick={onReply}>
							Reply
						</Button>
					</Col>
				</Row>
			) : (
				<Row className="mt-4 mb-5">
					<Col className="text-center">
						<Button variant="outline-success" onClick={onReply}>
							Reply
						</Button>
						{/*</Link>*/}
					</Col>
				</Row>
			)}
			<p className="text-light bg-dark font-weight-bold">Comments</p>
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
