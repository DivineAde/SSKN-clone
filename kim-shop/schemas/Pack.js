export default {
  name: 'pack',
  title: 'Packs',
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
      name: 'name_two',
      title: 'Name_two',
      type: 'string',
    },
    { 
      name: 'name_three',
      title: 'Name_three',
      type: 'string',
    },
    { 
      name: 'name_four',
      title: 'Name_four',
      type: 'string',
    },
  ]
}