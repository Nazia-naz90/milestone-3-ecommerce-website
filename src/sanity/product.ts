import { defineType, defineField } from "sanity";

// schemas/product.js
export const product = defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'department',
      title: 'Department',
      type: 'string',
    }),
    defineField({
      name: 'originalPrice',
      title: 'Original Price',
      type: 'string',
    }),
    defineField({
      name: 'discountPrice',
      title: 'Discount Price',
      type: 'string',
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
    }),

    defineField({ name: 'colors',
       title: 'Colors', 
       type: 'array', 
       of: [{ type: 'string' }], 
      }),
      defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: { source: 'title', maxLength: 96, },
      }),
        defineField({ name: 'lDress',
           title: 'Ladies Dress', 
           type: 'reference', 
           to: [{ type: 'lDress' }], 
          }),
  ],
});
   