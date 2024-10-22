import type { Actions } from '@sveltejs/kit';
import { prisma } from '$lib/index';
import type { PageServerLoad, ActionsExport } from './$types';
export const load = (async () => {
    
    let listings = await prisma.listings.findMany();
    return {listings};
}) satisfies PageServerLoad;

export const actions: Actions = {
    create_listing: async ({params, request}) => {
        const data = await request.formData();

        const name = data.get('listing_name')?.toString()??"name";
        const desc = data.get('listing_description')?.toString()??"desc";
        const price = data.get('listing_price')?.toString()??"price"

        await prisma.listings.create({
            data: {
                name,
                price,
                description: desc
             }
            })
        console.log(name);
        console.log(desc);
        console.log(price);


    }

}satisfies Actions;