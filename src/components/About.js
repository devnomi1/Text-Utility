import React from 'react'

export default function About() {
    return (
			<div>
				<div className="accordion" id="accordionExample">
					<div className="accordion-item">
						<h2 className="accordion-header" id="headingOne">
							<button
								className="accordion-button"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#collapse-One"
								aria-expanded="true"
								aria-controls="collapseOne"
							>
								<strong> Analyze to text</strong>
							</button>
						</h2>
						<div
							id="collapse-One"
							className="accordion-collapse collapse show"
							aria-labelledby="headingOne"
							data-bs-parent="#accordionExample"
						>
							<div className="accordion-body">
								<strong>This is the first item's accordion body.</strong> It is
								shown by default, until the collapse plugin adds the appropriate
								classNamees that we use to style each element. These classNamees
								control the overall appearance, as well as the showing and
								hiding via CSS transitions. You can modify any of this with
								custom CSS or overriding our default variables. It's also worth
								noting that just about any HTML can go within the{" "}
								<code>.accordion-body</code>, though the transition does limit
								overflow.
							</div>
						</div>
					</div>
					<div className="accordion-item">
						<h2 className="accordion-header" id="headingTwo">
							<button
								className="accordion-button collapsed"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#collapse-two"
								aria-expanded="false"
								aria-controls="collapse-two"
							>
								<strong>Free to use</strong>
							</button>
						</h2>
						<div
							id="collapse-two"
							className="accordion-collapse collapse"
							aria-labelledby="headingTwo"
							data-bs-parent="#accordionExample"
						>
							<div className="accordion-body">
								<strong>This is the second item's accordion body.</strong> It is
								hidden by default, until the collapse plugin adds the
								appropriate classNamees that we use to style each element. These
								classNamees control the overall appearance, as well as the
								showing and hiding via CSS transitions. You can modify any of
								this with custom CSS or overriding our default variables. It's
								also worth noting that just about any HTML can go within the{" "}
								<code>.accordion-body</code>, though the transition does limit
								overflow.
							</div>
						</div>
					</div>
					<div className="accordion-item">
						<h2 className="accordion-header" id="headingThree">
							<button
								className="accordion-button collapsed"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#collapse-three"
								aria-expanded="false"
								aria-controls="collapse-three"
							>
								<strong>Browser Compatible</strong>
							</button>
						</h2>
						<div
							id="collapse-three"
							className="accordion-collapse collapse"
							aria-labelledby="headingThree"
							data-bs-parent="#accordionExample"
						>
							<div className="accordion-body">
								<strong>This is the third item's accordion body.</strong> It is
								hidden by default, until the collapse plugin adds the
								appropriate classNamees that we use to style each element. These
								classNamees control the overall appearance, as well as the
								showing and hiding via CSS transitions. You can modify any of
								this with custom CSS or overriding our default variables. It's
								also worth noting that just about any HTML can go within the{" "}
								<code>.accordion-body</code>, though the transition does limit
								overflow.
							</div>
						</div>
					</div>
				</div>
			</div>
		);
}
