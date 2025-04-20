import { StreamChat } from "stream-chat";
import { clerkClient } from '@clerk/nextjs/server'

const api_key = "kvd3hcehksac";
const api_secret =
  "ygr9t4pvzq9ubnqsgkxj358agbt9f5b6a393n7gv9pydrfxvhkxfxxc3faup4q4b";

export async function POST(request) {
  // Initialize a Server Client
  const serverClient = StreamChat.getInstance(api_key, api_secret);
  const user = await request.json();
  // Create User Token
  const token = serverClient.createToken(user.data.id);
  
  const client = await clerkClient()
  await serverClient.upsertUser({id : user.data.id})
  
  await client.users.updateUserMetadata(user.data.id, {
    publicMetadata: {
      token : token,
    },
  })

  // console.log('User Created',token);

  //give access to all members for all channels
  const slugs = ["Python", "JavaScript", "Next", "React", "Java", "C++"]
  slugs.forEach(async (item)=>{
    const channel = serverClient.channel("messaging", item, {
      image: "https://getstream.io/random_png/?name=react",
      name: `${item} Forum`,
      createdById : user.data.id
    });
    await channel.create()
    channel.addMembers([user.data.id])
  })
  return Response.json({ message: "Account Created" });


}
