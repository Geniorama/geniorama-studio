import {defineField, defineType} from 'sanity'

export const categoryType = defineType({
  name: 'category',
  title: 'Categoría',
  type: 'document',
  fields: [
    defineField({
      name: 'nameEs',
      title: 'Nombre (Español)',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'nameEn',
      title: 'Nombre (Inglés)',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'nameEn',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Descripción',
      type: 'text',
    }),
  ],
}) 