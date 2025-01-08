import type { PageServerLoad } from './$types';
import { prisma } from '$lib';
import { fail, type Actions } from '@sveltejs/kit';

export const load = (async (event) => {
    let {characters} = await event.parent() 
    let recentGames = await prisma.game.findMany({
      take: 10,
      orderBy:{createdAt: 'desc'},
      include: {
        win: {
          include: {
            image: true
          }
        }, // Include full details of winner
        loss: {
          include: {
            image: true
          }
        }   // Include full details of loser
    }
    })
    return{characters,recentGames}
  }) satisfies PageServerLoad;

  export const actions: Actions = {
    add_match: async({request})=>{
        let data = await request.formData()
        let player_one = data.get("select_p1")?.toString()??"null"
        let player_two = data.get("select_p2")?.toString()??"null"
        let winner = data.get("winner")?.toString()??"null"
        if (player_one == player_two){
          return fail(400, {errorcode:"Please Select Two different Characters"})
        }

        if (winner == "player 1"){
          var p1 = await prisma.character.update({
            where: {name: player_one},
            data: {
              wins: {increment: 1},
              currentstreak:{increment: 1},
              games:{increment: 1},
            }            
          })
        let c = await prisma.character.findUnique({
          where: {
            name: player_two
          }
        })  
        if(c && p1){
            await prisma.game.create({
            data:{
              winnercharacterId:p1.id,
              losercharacterId:c.id
            }
          })
        }          
        

          if(p1.higheststreak < p1.currentstreak)
          { 
            await prisma.character.update({
              where: {name: player_one},
              data: {
                higheststreak: p1.currentstreak
              }
            })
          }
          await prisma.character.update({
            where: {name: player_two},
            data: {
              currentstreak:0,
            }            
          })
        }
        else if (winner == "player 2"){
          var p2 = await prisma.character.update({
            where: {name: player_two},
            data: {
              wins: {increment: 1},
              currentstreak: {increment: 1},
              games:{increment: 1},
            }            
          })
          let q = await prisma.character.findUnique({
            where: {
              name:player_one
            }
          })
          if(q && p2){
            await prisma.game.create({
              data:{
                winnercharacterId: p2.id,
                losercharacterId: q.id,
              }
            })
          }
          if(p2.higheststreak < p2.currentstreak)
            { 
              await prisma.character.update({
                where: {name: player_two},
                data: {
                  higheststreak: p2.currentstreak
                }
              })
            }
          await prisma.character.update({
            where: {name: player_one},
            data: {
              currentstreak:0,
            }            
          })
        }
    }
  }satisfies Actions;