import supabase from '$lib/supabaseClient'

/** @type {import('./$types').RequestHandler} */
export async function GET({ url }) 
{	  

  let { data: posts, error } = await supabase
  .from('posts')  
  .select('*')

  console.log(posts)
  return new Response(JSON.stringify(posts.data))
}

export async function POST({ body }) {

const { title, content } = await body.json()
const { data, error } = await supabase
  .from('posts')
  .insert([{ title, content }])
return new Response(JSON.stringify(data))
}