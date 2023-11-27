import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";

export function FooterSimplified() {
	return (
		<div className="container">
			<footer className="py-5">
				<div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
					<p>© 2023 Company, Inc. All rights reserved.</p>
					<ul className="list-unstyled d-flex">
						<li className="ms-3">
							<a className="link-body-emphasis" href="/">
								<FaTwitter />
							</a>
						</li>
						<li className="ms-3">
							<a className="link-body-emphasis" href="/">
								<FaInstagram />
							</a>
						</li>
						<li className="ms-3">
							<a className="link-body-emphasis" href="/">
								<FaFacebook />
							</a>
						</li>
					</ul>
				</div>
			</footer>
		</div>
	);
}
