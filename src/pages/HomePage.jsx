import { BusinessGrowth } from "../sections/BusinessGrowth";
import { Hero } from "../sections/Hero";
import { HowCanWeHelp } from "../sections/HowCanWeHelp";
import { Services } from "../sections/Services";

export function HomePage() {
	return (
		<>
			<Hero />
			<Services limit={3} />
			<BusinessGrowth />
			<HowCanWeHelp />
		</>
	);
}
