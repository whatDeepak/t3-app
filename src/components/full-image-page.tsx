import { clerkClient } from "@clerk/nextjs/server";
import { getImage } from "~/server/queries";

export async function FullPageImageView(props: { id: number }) {
    const image = await getImage(props.id);

    const userInfo = await clerkClient.users.getUser(image.userId);
    return (
        <div className="flex h-full w-screen min-w-0 items-center justify-center text-white">
            <div className="flex-shrink flex-grow">
                <img src={image.url} className="object-contain" alt={image.name} />
            </div>
            <div className="flex h-full w-56 flex-shrink-0 flex-col border-l">
                <div className="border-b p-2 text-center text-lg">{image.name}</div>
            </div>

            <div className="p-2">
                <div>Uploaded By:</div>
                <div>{userInfo.fullName}</div>
            </div>

            <div className="p-2">
                <div>Created On:</div>
                <div>{image.createdAt.toLocaleDateString()}</div>
            </div>
            
        </div>
    );
} 