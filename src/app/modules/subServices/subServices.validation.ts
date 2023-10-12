import { z } from 'zod'

const createSubServices = z.object({
  body: z.object({
    title: z.string({
      required_error: 'Title is required',
    }),
    category: z.string({
      required_error: 'Category is required',
    }),
    elements: z.string({
      required_error: 'Elements are required',
    }),
    cost: z.string({
      required_error: 'Cost or Price is required',
    }),
    features: z.string({
      required_error: 'Features are required',
    }),
    includedOption: z.string({
      required_error: 'Included Service Option are required',
    }),
    excludedOption: z.string({
      required_error: 'Excluded Service Option are required',
    }),
    termsCondition: z.string({
      required_error: 'Terms and Conditions are required',
    }),
  }),
})

export const SubServicesValidation = {
  createSubServices,
}
