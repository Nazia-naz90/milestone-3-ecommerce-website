import Image from "next/image";
import { client } from "@/sanity/lib/client";
import Header from "@/app/components/navbar";
import Footer from "@/app/components/footerFirst";
import { FaEye, FaHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
// import { urlForImage } from "@/sanity/lib/image";
// import { urlForImage } from "@/sanity/lib/image";

export const revalidate = 60; // seconds

export default async function Page({ params }:{
  params: Promise<{ id: string }>;
}
  
) {
  // Await the params Promise to get the slug
  const { id } = await params;

  // Fetch the product data from Sanity using the slug
  const query = `*[_type=='product' && id  == "${id}"]{
    "imageUrl": image.asset->url,
    name,
    department,
    originalPrice,
    discountPrice,
    colors,
    id,
    description,
    lDress->{
      description,
      button,
      "heartIconUrl": heartIcon.asset->url,
      "cartIconUrl": cartIcon.asset->url,
      "eyeIconUrl": eyeIcon.asset->url
    }
  }[0]`;

  const product = await client.fetch(query);

  return (

<>
<Header/>
<article className="mt-12 mb-24 px-10 sm:px-2  md:px-10 lg:px-32 xl:px-4
     lg:flex md:flex items-center sm:items-center justify-center 
      py-10 bg-white shadow-lg rounded-lg max-w-7xl
     h-auto border-2 mx-auto  space-y-10 sm:space-y-8 gap-x-5 sm:gap-x-0
     md:gap-x-4 lg:gap-x-10">
      
<div>
      {/* FEATURED IMAGE */}
      {product.imageUrl && (
        <Image
        src={product.imageUrl}
          width={400}
          height={400}
          alt="image"
          className="rounded-lg  w-[350px] sm:w-[300px] md:w-[400px] 
          lg:w-[450px] h-auto  shadow-lg transition-all 
          transform hover:scale-105"
        />
      )}
</div>


{/* PRODUCT TITLE & DETAILS */}
<div className="flex flex-col items-center justify-center w-[250px] 
sm:w-[400px] lg:w-[450px] h-auto space-y-4 
  mx-auto">

  {/* PRODUCT TITLE */}
  <h1 className="text-[1.5rem] text-yellow-600 sm:text-[3rem] lg:text-[3rem] 
  font-bold text-dark dark:text-light">
    {product.name}
  </h1> 

  <div>
    {/* DEPARTMENT */}
    {product.department && (
      <p className="text-[#737373] text-[14px]">
        {product.department}
      </p>
    )}
    {/* ORIGINAL PRICE */}
    {product.originalPrice && (
      <p className="text-[#BDBDBD] text-[16px] font-bold mt-2">
        {product.originalPrice}
        <span className="text-[#23856D]">
          {product.discountPrice}
        </span>
      </p>
    )}
  </div>

  <div>
    {/* PRODUCT DESCRIPTION */}
    {product.description && (
      <p className="text-blue-700 text-[16px] sm:font-bold
      text-justify sm:text-justify 
      mt-2">
        {product.description}
      </p>
    )}
  </div>

  <div>
    {/* PRODUCT COLORS */}
    <div className="flex justify-center gap-2 mt-4">
      {product.colors && product.colors.map((color: string, index: string) => (
        <div key={index} className="w-4 h-4 rounded-full" style={{ backgroundColor: color }} />
      ))}
    </div>
  </div>

  {/* PRODUCTS DETAIL */}
  {product.lDress && (
    <section className="flex flex-col px-0 sm:px-4 md:px-12 lg:px-0
     gap-2 xs:gap-4 
    sm:gap-6 items-start xs:items-center justify-start">
      <p className="text-[18px] font-semibold text-center sm:text-justify">
        {product.lDress.description}
      </p>
      <div className="flex items-center justify-center mx-auto space-x-4">
        <button className="w-[140px] h-[45px]
         border-transparent bg-blue-500 rounded-md">
          {product.lDress.button}
        </button>
        {product.lDress.heartIconUrl && (
          <FaHeart className="text-rose-700 w-6 h-6"/>
          
        )}
        {product.lDress.cartIconUrl && (
          <FaCartShopping className="text-blue-500 w-6 h-6"/>
        )}
        {product.lDress.eyeIconUrl && (
          <FaEye className="text-blue-600 w-6 h-6"/>
        )}
      </div>
    </section>
  )}
</div>
</article>
<Footer/>
</>

  );
}


// import Image from "next/image";
// import { client } from "@/sanity/lib/client";
// import { urlForImage } from "@/sanity/lib/image";

// export const revalidate = 60; // seconds

// export default async function Page({ params }:{
//   params: Promise<{ slug: string }>;
// }
  
// ) {
//   // Await the params Promise to get the slug
//   const { slug } = await params;

//   // Fetch the product data from Sanity using the slug
//   const query = `*[_type=='product' && slug.current == "${slug}"]{
//     "imageUrl": image.asset->url,
//     title,
//     department,
//     originalPrice,
//     discountPrice,
//     colors,
//     description,
//     lDress->{
//       button,
//       "heartIconUrl": heartIcon.asset->url,
//       "cartIconUrl": cartIcon.asset->url,
//       "eyeIconUrl": eyeIcon.asset->url
//     }
//   }[0]`;

//   const product = await client.fetch(query);

//   return (
//     <article className="mt-12 mb-24 px-2 2xl:px-12 flex flex-col gap-y-8">
//       {/* PRODUCT TITLE */}
//       <h1 className="text-xl xs:text-3xl lg:text-5xl font-bold text-dark dark:text-light">
//         {product.title}
//       </h1>

//       {/* FEATURED IMAGE */}
//       {product.imageUrl && (
//         <Image
//           src={product.imageUrl}
//           width={500}
//           height={500}
//           alt={product.title}
//           className="rounded"
//         />
//       )}

//       {/* PRODUCTS DETAIL */}
//       {product.lDress && (
//         <section className="px-2 sm:px-8 md:px-12 flex gap-2 xs:gap-4 sm:gap-6 items-start xs:items-center justify-start">
//           <button className="w-[180px] h-[50px] bg-blue-500 rounded-md">
//             {product.lDress.button}
//           </button>
//           {product.lDress.heartIconUrl && (
//             <Image
//               src={product.lDress.heartIconUrl}
//               width={200}
//               height={200}
//               alt="Heart Icon"
//               className="object-cover rounded-full h-12 w-12 sm:h-24 sm:w-24"
//             />
//           )}
//           {product.lDress.cartIconUrl && (
//             <Image
//               src={product.lDress.cartIconUrl}
//               width={200}
//               height={200}
//               alt="Cart Icon"
//               className="object-cover rounded-full h-12 w-12 sm:h-24 sm:w-24"
//             />
//           )}
//           {product.lDress.eyeIconUrl && (
//             <Image
//               src={product.lDress.eyeIconUrl}
//               width={200}
//               height={200}
//               alt="Eye Icon"
//               className="object-cover rounded-full h-12 w-12 sm:h-24 sm:w-24"
//             />
//           )}
//         </section>
//       )}
//     </article>
//   );
// }




// import Image from "next/image";
// import { client } from "@/sanity/lib/client";
// import { urlForImage } from "@/sanity/lib/image";
// import { product } from "@/sanity/product";
// import { productdetails } from "@/sanity/productDetails";

// export const revalidate = 60; // seconds

// export default async function Page({
//   params,
// }: {
//   params: Promise<{ slug: string }>;
// }) {
//   // Await the params Promise to get the slug
//   const { slug } = await params;


//   // Fetch the product data from Sanity using the slug
//   const query = `*[_type=='product' && slug.current == "${slug}"]{"imageUrl":image.asset->url,title,
//   department,originalPrice,
//   discountPrice,colors,description,
//   lDress->{button,"heartIconUrl": heartIcon.asset->url, "cartIconUrl": cartIcon.asset->url, 
//     "eyeIconUrl": eyeIcon.asset->url}}[0]`;  
  
  
//   return (
//     <article
//       className="mt-12 mb-24 px-2 2xl:px-12 flex
//         flex-col gap-y-8"
//     >
//       {/* PRODUCT TITLE */}
//       <h1 className="text-xl xs:text-3xl lg:text-5xl font-bold text-dark dark:text-light">
//         {product.title}
//       </h1>

//       <Image
//         src={urlForImage(product.image)}
//         width={500}
//         height={500}
//         alt="Textile Design"
//         className="rounded"
//       />

//       {/*PRODUCTS DETAIL*/}
//       <section
//         className="px-2
//       sm:px-8 md:px-12 flex gap-2  xs:gap-4 sm:gap-6 items-start 
//       xs:items-center justify-start
//       "
//       >
      
//         <button className="w-[180px] h-[50px] bg-blue-500 rounded-md">
//           {lDress.button}
//         </button>
//         <Image
//           src={urlForImage(lDress.heartIconUrl.url)}
//           width={200}
//           height={200}
//           alt="ladiesDress"
//           className="object-cover rounded-full h-12 w-12 sm:h-24 sm:w-24"
//         />
//         <Image
//           src={urlForImage(lDress.cartIconUrl.url)}
//           width={200}
//           height={200}
//           alt="ladiesDress"
//           className="object-cover rounded-full h-12 w-12 sm:h-24 sm:w-24"
//         />
//         <Image
//           src={urlForImage(lDress.eyeIconUrl.url)}
//           width={200}
//           height={200}
//           alt="ladiesDress"
//           className="object-cover rounded-full h-12 w-12 sm:h-24 sm:w-24"
//         />
//       </section>

//     </article>
//   );
// }


