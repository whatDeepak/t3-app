import { FullPageImageView } from "~/common/full-image-page-view";

export default async function PhotoPage({
    params: { id: photoId },
}: {
    params: { id: string };
}) {
    return (
        <div className="flex h-full min-h-0 w-full min-w-0 overflow-y-hidden">
            <FullPageImageView photoId={photoId} />
        </div>
    );
}