export default {
  name: 'set',
  title: 'Set',
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
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    { 
      name: 'discount',
      title: 'Discount',
      type: 'number',
    },
    { 
      name: 'details',
      title: 'Details',
      type: 'string',
    },
    { 
      name: 'application',
      title: 'Application',
      type: 'string',
    },
  ]
}