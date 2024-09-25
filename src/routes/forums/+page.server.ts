import { prisma } from '$lib/index';
import type { ActionsExport, PageServerLoad } from './$types';
import type { Actions } from '@sveltejs/kit';


export const load = (async ({request, params}) => {
    let forums = await prisma.forum.findMany();
    return {forums};
}) satisfies PageServerLoad;


export const actions: Actions = {
    create: async({ request })=>{
        const data = await request.formData(); // gets data from the form
        const name = data.get('name')?.toString()??"lul"; // gets the value from the input
        await prisma.forum.create({data: { name }});
        /*forums.push(name as string); //pushes the name onto the forumns list
        console.log(forums)*/
    }
}satisfies Actions;
