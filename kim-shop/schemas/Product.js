export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'array',
      of: [{ type: 'image' }],
      options: {
        hotspot: true,
      }
    },
    { 
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    { 
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 90,
      }
    },
    { 
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    { 
      name: 'details',
      title: 'Details',
      type: 'string',
    },
    { 
      name: 'ingredients',
      title: 'Ingredients',
      type: 'string',
    },
    { 
      name: 'application',
      title: 'Application',
      type: 'string',
    },
    { 
      name: 'results',
      title: 'Results',
      type: 'string',
    },
    { 
      name: 'components',
      title: 'Key ingredients',
      type: 'string',
    },
    { 
      name: 'size',
      title: 'Size',
      type: 'string',
    },
  ]
}