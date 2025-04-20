import Chatforum from "@/components/Chatforum";
// import { currentUser } from "@clerk/nextjs/dist/types/server";
import { currentUser } from "@clerk/nextjs/server";

export default async function Page({ params }) {
  const user = await currentUser()
    const slug = (await params).slug
    return <Chatforum slug={slug} clerkUser={{id : user.id ,name: user.firstName, token : user.publicMetadata.token}}/>
  } 
// This is used to dynamically generate metadata based on the slug

export async function generateMetadata({ params }) {
  const { slug } = await params;
  // console.log(params)
  return {
    title: `${slug} Forum`,
    description: `Join the discussion in the ${slug} forum.`,
  };
}
   