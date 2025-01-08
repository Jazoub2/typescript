
import type { PageServerLoad, Actions } from './$types';
import {fail, redirect } from '@sveltejs/kit';
import { prisma } from '$lib';

export const load = (async () => {
    return {};
}) satisfies PageServerLoad;

export const actions: Actions = {
    register: async({request})=>{
        let data = await request.formData();
        let username = data.get("username")?.toString()??"null"
        let password = data.get("password")?.toString()??"null"
        
        if(username == null || password == null){
            return fail(400, {register_fail: "please input username and password"})
        }
        let user = await prisma.user.findUnique({
            where: {
                username: username
            }
        })
        if (user == null){
            await prisma.user.create({
                data: {username,password}
                
            })
        throw redirect(307, "/login")
        }else{
            return fail(400,{username_in_use_fail: "Username alreaady in use, Please choose another one"})
        }
    }

} satisfies Actions;