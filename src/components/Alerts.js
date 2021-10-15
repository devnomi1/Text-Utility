import React from "react";
// import PropTypes from 'prop-types'

function Alerts(props) {
	return (
		<div
			className="alert alert-warning alert-dismissible fade show"
			role="alert"
		>
			<strong>{props.alerts}</strong>

			<button
				type="button"
				className="btn-close"
				data-bs-dismiss="alert"
				aria-label="Close"
			></button>
		</div>
	);
}

Alerts.propTypes = {};

export default Alerts;
