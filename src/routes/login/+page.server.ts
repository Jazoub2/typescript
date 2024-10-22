import { fail, redirect } from '@sveltejs/kit';
import type { PageServerLoad,Actions } from './$types';
import { prisma } from '$lib';
export const load = (async () => {
    return {};
}) satisfies PageServerLoad;

export const actions: Actions = {
    login: async ({params, request, cookies})=>{
        let data = await request.formData()
        let username = data.get('username')?.toString()
        let password = data.get('password')?.toString()
        if(!username || !password){
            return fail(400,{login_fail:"please enter password and username"})
        }
        let user = await prisma.user.findUnique({
        where: {
            username: username
            }
        })
//register
        if(user == null){
            user = await prisma.user.create({
                data: {username,password}
              })
        }else{
            if(password != user.password){
                return fail(400, {login_fail: "incorrect password or username"})
            }
        }
        cookies.set("user_id",user.id,{path: "/"})
        throw redirect(307, "/")
    },
    logout: async ({cookies})=>{
        cookies.delete("user_id",{path: "/"})
        throw redirect(307, "/login")
    }

}satisfies Actions;

/*
få username och password CHECK
om inte username eller password
    throw error
    CHECK
annars: 
    kolla om användare finns
else. 
    skapa ny användare, redirect till login
*/ 