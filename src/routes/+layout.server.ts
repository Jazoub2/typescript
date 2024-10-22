import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';
import { prisma } from '$lib/index';


export const load = (async ({cookies, url}) => {

    if(url.pathname.includes('login')){
        return
    }

    let user_id = cookies.get("user_id")
    if (!user_id) {
        throw redirect(307, "/login");
      }
    let user = await prisma.user.findUnique({ where: { id: user_id } });
    if (!user) {
        cookies.delete("id", { path: "/" });
        throw redirect(307, "/login");
      }
    
      return { user };
}) satisfies LayoutServerLoad;