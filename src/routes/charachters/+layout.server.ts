import type { LayoutServerLoad } from './$types';
import { prisma } from '$lib';

export const load = (async () => {
    let characters = await prisma.character.findMany({
        include: {image: true}
      })
      return {characters};
}) satisfies LayoutServerLoad;  