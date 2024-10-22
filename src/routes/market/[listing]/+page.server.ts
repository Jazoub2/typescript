
import { prisma } from '$lib/index';
import type { PageServerLoad } from './$types';
import type { Actions } from '@sveltejs/kit';
import { error,fail } from '@sveltejs/kit';

export const load = (async ({ params }) => {
    let listing = await prisma.listings.findUnique({
        where: {id: params.listing},
        include: {bids:true}
            
    });
    return{listing}

}) satisfies PageServerLoad;

export const actions: Actions = {
    place_bid: async ({params, request}) => {
        let list = await prisma.listings.findUnique({
            where: {id: params.listing}
            ,include: {bids: true}
         })
        const data = await request.formData();
        const value = data.get('bid_value')?.toString()??"2"
        await prisma.bid.create({
            data:{
                value,
                listingsId: params.listing,
                status: null
            }
        })

    },
    reject_bid: async ({params, request})=>{
        const data = await request.formData();
        const id = data.get("id")?.toString()??"idNotFound"
        console.log("trying to delete",{id})
       /*await prisma.bid.delete({
            where: {id: id}
        })*/
       await prisma.bid.update({
        where: {id: id},
        data: {status: false}
       })
        console.log("bid rejected")
    },
    accept_bid: async ({params, request})=>{
        const data = await request.formData()
        const id = data.get("id")?.toString()??"idNotFound"

        await prisma.bid.update({
            where: {id: id},
            data: {status: true}
        })

    }

}satisfies Actions;