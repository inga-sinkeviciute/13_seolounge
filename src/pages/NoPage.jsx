import ufoImg from "../assets/ufo.webp";

export function NoPage() {
	return (
		<>
			<section className="container">
				<div className="row">
					<div className="col-12 col-sm-6 col-md-4 offset-lg-2 col-xl-3 offset-xl-3">
						<h1>404</h1>
						<h2>Page not found :(</h2>
					</div>
					<div className="col-12 col-sm-6 col-md-8 col-lg-4 col-xl-3">
						<img src={ufoImg} alt="UFO" />
					</div>
				</div>
			</section>
		</>
	);
}
