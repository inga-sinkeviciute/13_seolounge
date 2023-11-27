import { Outlet } from "react-router-dom";
import { Footer } from "../sections/Footer";
import { Header } from "../sections/Header";

export function PublicLayout() {
	return (
		<>
			<Header />
			<main>
				<Outlet />
			</main>
			<Footer />
		</>
	);
}
