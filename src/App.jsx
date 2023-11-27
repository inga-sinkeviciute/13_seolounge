import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ServicesPage } from "./pages/ServicesPage";
import { HomePage } from "./pages/HomePage";
import { NoPage } from "./pages/NoPage";
import { RegisterPage } from "./pages/RegisterPage";
import { TosPage } from "./pages/TosPage";
import { ListingPage } from "./pages/ListingPage";
import { PublicLayout } from "./layout/PublicLayout";
import { AuthLayout } from "./layout/AuthLayout";
import { ContextWrapper } from "./context/GlobalContext";

function App() {
	return (
		<ContextWrapper>
			<BrowserRouter>
				<Routes>
					<Route Component={PublicLayout}>
						<Route index path="/" element={<HomePage />} />
						<Route path="/services" element={<ServicesPage />} />
						<Route path="/listing" element={<ListingPage />} />
						<Route path="/tos" element={<TosPage />} />
						<Route path="*" element={<NoPage />} />
					</Route>
					<Route Component={AuthLayout}>
						<Route path="/register" element={<RegisterPage />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</ContextWrapper>
	);
}

export default App;
