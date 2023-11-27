import { useContext } from "react";
import style from "./Hero.module.css";
import { GlobalContext } from "../context/GlobalContext";
// import heroImg from '../assets/img/hero.png';

export function Hero() {
	const { updateLuckyNumber } = useContext(GlobalContext);

	function primaryBtn() {
		updateLuckyNumber(7);
	}

	return (
		<div className={style.heroSection}>
			<div className="container px-4 py-5">
				<div className="row align-items-center g-5 py-5">
					<div className="col-lg-6">
						<h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
							Responsive left-aligned hero with image
						</h1>
						<p className="lead">
							Quickly design and customize responsive mobile-first sites with
							Bootstrap, the world’s most popular front-end open source toolkit,
							featuring Sass variables and mixins, responsive grid system,
							extensive prebuilt components, and powerful JavaScript plugins.
						</p>
						<div className="d-grid gap-2 d-md-flex justify-content-md-start">
							<button
								onClick={primaryBtn}
								type="button"
								className="btn btn-primary btn-lg px-4 me-md-2"
							>
								Primary
							</button>
							<button
								type="button"
								className="btn btn-outline-secondary btn-lg px-4"
							>
								Default
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
