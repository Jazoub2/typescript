import { prisma } from '$lib';
import { error, fail, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
export const load = (async () => {
    let persons = await prisma.person.findMany()
    return {persons};
}) satisfies PageServerLoad;

export const actions: Actions = {
     create_person: async({ request })=>{
        let data = await request.formData();
        let name = data.get("name")?.toString()??"null"
        let age = Number(data.get("age"))
        let adress = data.get("adress")?.toString()??"null"


        let p = await prisma.person.findUnique({
            where:{ 
            name: name
        }
        })
        if(p){
            return fail(400,{formmessage: "person already exists"})
        }
        if (data != null){  
            if(name !=""||age!=0||adress!=""){
                let person = await prisma.person.create({
                    data:{
                        name,
                        age,
                        adress
                    }
                   })
            }else{
                return fail(400,{formmessage: "please fill all fields"})
            }
           
        }else{
            throw error(500,"data not found")
        }
     },
     edit: async({request})=>{
        let data = await request.formData();
        let e_name = data.get("e_name")?.toString()??"null"
        let toedit = data.get("toedit")?.toString()??"null"
        let e_age = Number(data.get("e_age"))
        let e_adress = data.get("e_adress")?.toString()??"null"
        console.log(toedit)
        const existingPerson = await prisma.person.findUnique({
            where: { id: toedit },
          });
          
          if (!existingPerson) {
            throw error(500,`Person with ID ${toedit} does not exist.`);
          }
        let edited = await prisma.person.update({
            where:{
                id: existingPerson.id 
            },
            data: {
                ...(e_name !== undefined && { name: e_name }),
                ...(e_age !== undefined && { age: e_age }),
                ...(e_adress !== undefined && { adress: e_adress }),
              }
              
        })
     }
        

}satisfies Actions;