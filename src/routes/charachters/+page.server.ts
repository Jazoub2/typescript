import {fail, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { prisma } from '$lib';
export const load = (async (event) => {
  let {characters} = await event.parent() 
  return{characters}
}) satisfies PageServerLoad;

export const actions: Actions = {
    add_char: async({ params, cookies, request })=>{
        let data = await request.formData()
        const name = data.get("name")?.toString()??"null"
        const desc = data.get("desc")?.toString()??"null"
        let image = data.get("image") as File;
        let base64String = Buffer.from(await image.arrayBuffer()).toString('base64')


        let existing_character = await prisma.character.findUnique({
          where: {
            name: name
          }
        })
        if (existing_character){
          return fail(400, {errorcode:"Character name already in use"})
        }
        await prisma.character.create({
            data: {
              name: name,
              desc: desc,
              image: { // Use the images field to create an associated image
                create: {
                  encoding: base64String,
                },
              },
            },
          });
          
    }
}satisfies Actions;