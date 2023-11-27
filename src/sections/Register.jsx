import { Link } from "react-router-dom";
import style from "./Auth.module.css";
import { useState } from "react";
import {
	isValidEmail,
	isValidPassword,
	isValidPhone,
	isValidUsername,
} from "../lib/IsValid";

export function Register() {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [pass, setPass] = useState("");
	const [repass, setRepass] = useState("");
	const [tos, setTos] = useState(false);

	function handleChangeUsername(event) {
		setUsername(event.target.value);
	}

	function handleChangeEmail(event) {
		setEmail(event.target.value);
	}

	function handleChangePhone(event) {
		setPhone(event.target.value);
	}

	function handleChangePassword(event) {
		setPass(event.target.value);
	}

	function handleChangeRepeatPassword(event) {
		setRepass(event.target.value);
	}

	function handleChangeTos() {
		setTos(!tos);
	}

	function handleSubmit(event) {
		event.preventDefault();

		console.log("Form submit...");
		console.log({
			username,
			email,
			phone,
			pass,
			repass,
			tos,
		});

		let isAllInfoOK = true;

		if (!isValidUsername(username)) {
			isAllInfoOK = false;
		}
		if (!isValidEmail(email)) {
			isAllInfoOK = false;
		}
		if (!isValidPhone(phone)) {
			isAllInfoOK = false;
		}
		if (!isValidPassword(pass)) {
			isAllInfoOK = false;
		}
		if (!isValidPassword(repass)) {
			isAllInfoOK = false;
		}
		if (tos !== true) {
			isAllInfoOK = false;
		}
		console.log("Ar viskas OK:", isAllInfoOK);
	}

	return (
		<section className="container">
			<div className="row">
				<form
					onSubmit={handleSubmit}
					className="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4 mt-5 mb-5"
				>
					<h1 className={style.mainTitle + " mb-3 fw-normal"}>
						Please sign in
					</h1>

					<div className="form-floating">
						<input
							onChange={handleChangeUsername}
							value={username}
							type="text"
							className="form-control"
							id="username"
							placeholder="Username"
						/>
						<label htmlFor="username">Username</label>
					</div>
					<div className="form-floating">
						<input
							onChange={handleChangeEmail}
							value={email}
							type="email"
							className="form-control"
							id="email"
							placeholder="name@example.com"
						/>
						<label htmlFor="email">Email address</label>
					</div>
					<div className="form-floating">
						<input
							onChange={handleChangePhone}
							value={phone}
							type="tel"
							className="form-control"
							id="phone"
							placeholder="+37012345678"
						/>
						<label htmlFor="phone">Phone number</label>
					</div>
					<div className="form-floating">
						<input
							onChange={handleChangePassword}
							value={pass}
							type="password"
							className="form-control"
							id="password"
							placeholder="Password"
						/>
						<label htmlFor="password">Password</label>
					</div>
					<div className="form-floating">
						<input
							onChange={handleChangeRepeatPassword}
							value={repass}
							type="password"
							className="form-control"
							id="passwordRepeat"
							placeholder="Password"
						/>
						<label htmlFor="passwordRepeat">Repeat password</label>
					</div>

					<div className="form-check text-start my-3">
						<input
							onChange={handleChangeTos}
							value={tos}
							className="form-check-input"
							type="checkbox"
							id="agree"
						/>
						<label className="form-check-label" htmlFor="agree">
							Agree to <Link to="/tos">Terms of Service</Link>
						</label>
					</div>
					<button className="btn btn-primary w-100 py-2" type="submit">
						Sign in
					</button>
				</form>
			</div>
		</section>
	);
}
