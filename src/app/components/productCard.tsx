import Image from 'next/image';
import { urlForImage } from "@/sanity/lib/image";

const ProductCard = ({ product }) => {
  return (
    <div className="flex flex-col items-center p-4 mt-6 rounded-lg transition-all transform hover:scale-105 hover:shadow-lg">
      <div>
        {/* FEATURED IMAGE */}
        <Image
          src={product.imageUrl}
          width={500}
          height={500}
          alt={product.name}
          className="rounded"
        />
      </div>
      <div className="mt-4 text-center">
        <h3 className="text-[#252B42] text-16px font-bold">
          {product.name}
        </h3>
        <p className="text-[#737373] text-[14px]">
          {product.department}
        </p>
        <p className="text-[#BDBDBD] text-[16px] font-bold mt-2">
          {product.originalPrice}{""}
          <span className="text-[#23856D]">
            {product.discountPrice}
          </span>
        </p>
        <div className="flex justify-center gap-2 mt-4">
          {product.colors.map((color, index) => (
            <div key={index} className="w-4 h-4 rounded-full" style={{ backgroundColor: color }} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;



// import Image from 'next/image';
// import { urlForImage } from "@/sanity/lib/image";
// import { groq } from 'next-sanity';
// import { client } from '@/sanity/lib/client';

// export interface Product {
//     image:string;
//     name:string;
//     department:string;
//     originalPrice:string;
//     discountPrice:string;
//     colors:string[];
// }

// interface ProductCardProps{
//     product:Product;
// }

// const ProductCard:React.FC<ProductCardProps>=({product})=>{

// export default async function ProductCard ()  {

//     const product = await client.fetch(groq `*[_type=="product"]{
//     "imageUrl": image.asset->url,
//     title,
//     department,
//     originalPrice,
//     discountPrice,
//     colors,
//     description`)}

//   return(
//     <div className="flex flex-col items-center p-4 mt-6 rounded-lg transition-all transform hover:scale-105 hover:shadow-lg">
//         <div>
//             {/* FEATURED IMAGE */}
                  
//                     <Image
//                       src={product.imageUrl}
//                       width={500}
//                       height={500}
//                       alt={product.name}
//                       className="rounded"
//                     />
            
//         </div>
//         <div className="mt-4 text-center">
//         <h3 className="text-[#252B42] text-16px font-bold">
//          {product.name}   
//         </h3> 
//         <p className="text-[#737373] text-[14px]">
//         {product.department}
//         </p>
//         <p className="text-[#BDBDBD] text-[16px] font-bold mt-2">
//          {product.originalPrice}{""}
//          <span className="text-[#23856D]">
//          {product.discountPrice}
//          </span>
//         </p>
//         <div className="flex justify-center gap-2 mt-4">
//         {product.colors.map((color,index)=>(
//             <div key={index} className={`w-4 h-4 ${color} rounded-full`}/>
//         ))}
//         </div>

//         </div>

//     </div>
//   )  
// }
