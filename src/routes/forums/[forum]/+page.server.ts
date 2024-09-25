
import { prisma } from '$lib/index';
import type { PageServerLoad, ActionsExport } from './$types';
import type { Actions } from '@sveltejs/kit';
import { error,fail } from '@sveltejs/kit';
let messages = await prisma.forum.findMany();

export const load = (async ({ params }) => {
    let messages = await prisma.message.findMany({
        where: {
            forumId: params.forum}
    });
    console.log(messages)
    return {messages}
}) satisfies PageServerLoad;


export const actions: Actions = {
 createmessage: async({ params, request })=>
    {
     let forum = await prisma.forum.findUnique({
        where: {id: params.forum}
        ,include: {messages: true}
     })
     const data = await request.formData();
     const message = data.get('blop')?.toString();
     if (!message) {
        return fail(400, { message: "not found" });
        }

     const newMessage = await prisma.message.create({
        data: {
            content: message,
            forumId: forum?.id
            }
        });
    
    /*
    let forum = params.forum;
    if(!forum){
        throw error(418, "forum not found");
    }

    console.log(message)
    messages.push(message as string);*/
 }} satisfies Actions;