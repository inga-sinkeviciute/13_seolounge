export function Login() {
	return (
		<section className="container">
			<div className="row">
				<form className="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4 mt-5 mb-5">
					<h1 class="h3 mb-3 fw-normal">Please sign in</h1>

					<div class="form-floating">
						<input
							type="email"
							class="form-control"
							id="floatingInput"
							placeholder="name@example.com"
						/>
						<label for="floatingInput">Email address</label>
					</div>
					<div class="form-floating">
						<input
							type="password"
							class="form-control"
							id="floatingPassword"
							placeholder="Password"
						/>
						<label for="floatingPassword">Password</label>
					</div>

					<div class="form-check text-start my-3">
						<input
							class="form-check-input"
							type="checkbox"
							value="remember-me"
							id="flexCheckDefault"
						/>
						<label class="form-check-label" for="flexCheckDefault">
							Remember me
						</label>
					</div>
					<button class="btn btn-primary w-100 py-2" type="submit">
						Sign in
					</button>
				</form>
			</div>
		</section>
	);
}
