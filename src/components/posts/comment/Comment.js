import React from 'react';
import getFormattedDate from '../../../utils/getFormattedDate';
import { Button, Col, Row } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';

const Comment = ({ auth, comment, onDelete }) => {
	const postDate = getFormattedDate(comment.date);
	const user_id = auth.isAuthenticated ? auth.user.id : '';
	return (
		<div className="row">
			<div className="col-md-12">
				<div className="d-flex justify-content-between">
					<strong>{comment.author.user_name}</strong>
					<span className="text-muted">{postDate}</span>
				</div>

				<p>{comment.text}</p>
				{auth.isAuthenticated && user_id === comment.author.id ? (
					<Row className="mt-4">
						<Col className="text-right">
							<Button className="mr-2" variant="danger" onClick={onDelete}>
								Delete
							</Button>
						</Col>
					</Row>
				) : (
					''
				)}
				<hr />
			</div>
		</div>
	);
};

Comment.propTypes = {
	comment: PropTypes.object.isRequired,
	auth: PropTypes.object.isRequired,
	onDelete: PropTypes.func.isRequired
};

export default Comment;
