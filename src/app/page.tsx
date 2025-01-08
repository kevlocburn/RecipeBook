import RecipePicker from 'components/Home/RecipePicker';
import { Container, Hero } from 'components/core';
import { api } from 'trpc/server';
import { HydrateClient } from 'trpc/server';

export default async function Page() {
	const recipes = await api.example.findRecipes();

	return (
		<HydrateClient>
			<Hero title="Find a Recipe" />
			<Container>
				<RecipePicker recipes={recipes} />
			</Container>
		</HydrateClient>
	);
}
