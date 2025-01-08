import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';
import { prisma } from '$lib/index';


export const load = (async ({cookies, url}) => {

    if(url.pathname.includes('login')||url.pathname.includes("register")){
        return
    }
    //kollar om user har kaka, annars goto login
    let user_id = cookies.get("user_id")
    if (!user_id) {
        throw redirect(307, "/login");
      }
    //kollar om user finns, om inte, ta bort kaka och goto login
    let user = await prisma.user.findUnique({ where: { id: user_id } });
    if (!user) {
        cookies.delete("id", { path: "/" });
        throw redirect(307, "/login");
      }
    
      return { user };
}) satisfies LayoutServerLoad;