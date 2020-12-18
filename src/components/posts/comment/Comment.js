import React from 'react';
import getFormattedDate from '../../../utils/getFormattedDate';
import { Button, Col, Row } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';

const Comment = ({ auth, comment, onDelete }) => {
	const postDate = getFormattedDate(comment.date);
	const user_id = auth.isAuthenticated ? auth.user.id : '';
	return (
		<div className="row">
			<div className="col-md-12">
				<div style={{
					color:"rgb(200,198,198)",
					display: "flex",
					justifyContent:"space-between",
					fontStyle: "italic"
				}}>
					<strong>{comment.author.user_name}</strong>
					<span>{postDate}</span>
				</div>

				<p style={{ color:"rgb(255,255,255)",fontSize:"1.1em" }}>{comment.text}</p>
				{auth.isAuthenticated && user_id === comment.author.id ? (
					<div style={{
						display: "flex",
						justifyContent:"flex-end"
					}}>
							<Button className="mr-2" variant="danger" onClick={onDelete}>
								Delete
							</Button>
					</div>
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
