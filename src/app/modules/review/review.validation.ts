import { z } from 'zod'

const addReview = z.object({
  body: z.object({
    firstName: z.string({
      required_error: 'First Name is required',
    }),
    lastName: z
      .string({
        required_error: 'Last Name is required',
      })
      .optional(),
    email: z.string({
      required_error: 'Email is required',
    }),
    comment: z.string({
      required_error: 'Comment is required',
    }),
    profileImg: z
      .string({
        required_error: 'First Name is required',
      })
      .optional(),
    location: z
      .string({
        required_error: 'Location is required',
      })
      .optional(),
    reviewImg: z
      .string({
        required_error: 'Review Image is required',
      })
      .optional(),
    shortVideo: z
      .string({
        required_error: 'Short Video is required',
      })
      .optional(),
  }),
})

export const ReviewValidation = {
  addReview,
}
