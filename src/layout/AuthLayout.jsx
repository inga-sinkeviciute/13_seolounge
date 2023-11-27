import { Outlet } from "react-router-dom";
import { HeaderSimplified } from "../sections/HeaderSimplified";
import { FooterSimplified } from "../sections/FooterSimplified";

export function AuthLayout() {
	return (
		<>
			<HeaderSimplified />
			<main>
				<Outlet />
			</main>
			<FooterSimplified />
		</>
	);
}
