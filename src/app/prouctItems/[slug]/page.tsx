import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { product } from "@/sanity/product";
import { productdetails } from "@/sanity/productDetails";

export const revalidate = 60; // seconds

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // Await the params Promise to get the slug
  const { slug } = await params;

  // Fetch the post data from Sanity using the slug
  const query = `*[_type=='product' && slug.current == "${slug}"]{"imageUrl":image.asset->url,title,
  department,originalPrice,
  discountPrice,colors,description,
  lDress->{button,"heartIconUrl": heartIcon.asset->url, "cartIconUrl": cartIcon.asset->url, 
    "eyeIconUrl": eyeIcon.asset->url}}[0]`;  
  
    }
  const post = await client.fetch(query);

  return (
    <article
      className="mt-12 mb-24 px-2 2xl:px-12 flex
        flex-col gap-y-8"
    >
      {/* BLOG TITLE */}
      <h1 className="text-xl xs:text-3xl lg:text-5xl font-bold text-dark dark:text-light">
        {product.title}
      </h1>

      <Image
        src={urlForImage(product.image)}
        width={500}
        height={500}
        alt="Textile Design"
        className="rounded"
      />

      {/*D  */}


      {/* AUTHOR SECTION (IMAGE & BIO) */}
      <section
        className="px-2
      sm:px-8 md:px-12 flex gap-2  xs:gap-4 sm:gap-6 items-start 
      xs:items-center justify-start
      "
      >
      
        <button className="w-[180px] h-[50px] bg-blue-500 rounded-md">
          {lDress.button}
        </button>
        <Image
          src={urlForImage(lDress.heartIconUrl.url)}
          width={200}
          height={200}
          alt="ladiesDress"
          className="object-cover rounded-full h-12 w-12 sm:h-24 sm:w-24"
        />
        <Image
          src={urlForImage(lDress.cartIconUrl.url)}
          width={200}
          height={200}
          alt="ladiesDress"
          className="object-cover rounded-full h-12 w-12 sm:h-24 sm:w-24"
        />
        <Image
          src={urlForImage(lDress.eyeIconUrl.url)}
          width={200}
          height={200}
          alt="ladiesDress"
          className="object-cover rounded-full h-12 w-12 sm:h-24 sm:w-24"
        />
      </section>

    </article>
  );
}



// const productsItems = ()=>{
//     return(
//         <main>
//         <div>
//             <Image src={}
//             alt={}
//             height={600}
//             width={}>

//             </Image>
//         </div>
//         </main>
//     )
// }