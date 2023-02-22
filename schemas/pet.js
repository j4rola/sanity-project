// schemas/pet.js
export default {
    name: 'pet',
    type: 'document',
    title: 'Pet',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name'
      },
      {
        name: 'image',
        type: 'image',
        title: 'Image',
        options: {
          hotspot: true
        }
      },
      {
        name: 'owner',
        type: 'reference',
        to: [{type: 'owner'}], 
        title: 'Owner'
      },
    ]
  }