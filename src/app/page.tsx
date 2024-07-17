import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/d74ef580-f9a7-45ea-ab70-cfe26aa75c01-232bil.jpg",
  "https://utfs.io/f/30e7a989-2a12-4134-8dc2-3fcb1b40a77b-g18oku.jpg",
  "https://utfs.io/f/9fe13ba9-ad8a-480c-b032-e92925dcc90f-60giqr.jpg",
  "https://utfs.io/f/83c1d46a-5a53-43c4-8f84-ae99a60d0407-s8sowa.jpg",
];

const mockImages = mockUrls.map((url,index) => ({
  id: index+1,
  url,
}));


export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-1/4 p-4">
            <img src={image.url} alt="image" />
          </div>
        ))}
      </div>
    </main>
  );
}
