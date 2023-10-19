import { z } from 'zod'

const addFeedback = z.object({
  body: z.object({
    firstName: z.string({
      required_error: 'First Name is required',
    }),
    lastName: z
      .string({
        required_error: 'Last Name is required',
      })
      .optional(),
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
  }),
})

export const FeedbackValidation = {
  addFeedback,
}
