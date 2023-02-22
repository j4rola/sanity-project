// schemas/pet.js
export default {
    name: 'owner',
    type: 'document',
    title: 'Owners',
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
        name: 'pets',
        type: 'array',
        of: [{type: 'pet'}],
        title: 'Pets'
      },
      
      
    ]
  }