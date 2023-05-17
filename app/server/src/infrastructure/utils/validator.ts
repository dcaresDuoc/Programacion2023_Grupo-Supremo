import Joi from 'joi'

const validator = (schema: Joi.ObjectSchema) => (payload: Joi.Root) =>
  schema.validate(payload, { abortEarly: false })

const signupSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(3).max(10).required(),
  confirmPassword: Joi.ref('password'),
  address: {
    state: Joi.string().length(2).required()
  },
  DOB: Joi.date().greater(new Date('2012-01-01')).required(),
  referred: Joi.boolean().required(),
  referralDetails: Joi.string().when('referred', {
    is: true,
    then: Joi.string().required().min(3).max(50),
    otherwise: Joi.string().optional()
  }),
  // hobbies: Joi.array().items([Joi.number(), Joi.string()]).required(),
  acceptTos: Joi.boolean().truthy('Yes').valid(true).required()
})

// * CATEGORY
// ? CREATE CATEGORY
const schemaReqBodyCreateCategory = Joi.object({
  name: Joi.string().required()
})
export const validateReqBodyCreateCategory = validator(schemaReqBodyCreateCategory)

// ? UPDATE CATEGORY BY ID
const schemaReqParamsUpdateCategoryById = Joi.object({
  categoryId: Joi.string().required()
})
export const validateReqParamsUpdateCategoryById = validator(schemaReqParamsUpdateCategoryById)

// ? DELETE CATEGORY BY ID
const schemaReqParamsDeleteCategoryById = Joi.object({
  categoryId: Joi.string().required()
})
export const validateReqParamsDeleteCategoryById = validator(schemaReqParamsDeleteCategoryById)

// * SUB CATEGORY
// ? CREATE SUB CATEGORY
const schemaReqBodyCreateSubCategory = Joi.object({
  name: Joi.string().required(),
  categoryId: Joi.string().required()
})
export const validateReqBodyCreateSubCategory = validator(schemaReqBodyCreateSubCategory)

// ? UPDATE SUB CATEGORY BY ID
const schemaReqParamsUpdateSubCategoryById = Joi.object({
  subCategoryId: Joi.string().required()
})
export const validateReqParamsUpdateSubCategoryById = validator(schemaReqParamsUpdateSubCategoryById)

const schemaReqBodyUpdateSubCategoryById = Joi.object({
  name: Joi.string().optional(),
  categoryId: Joi.string().optional()
})
export const validateReqBodyUpdateSubCategoryById = validator(schemaReqBodyUpdateSubCategoryById)

// ? DELETE SUB CATEGORY BY ID
const schemaReqParamsDeleteSubCategoryById = Joi.object({
  subCategoryId: Joi.string().required()
})
export const validateReqParamsDeleteSubCategoryById = validator(schemaReqParamsDeleteSubCategoryById)

// * SUB SUB CATEGORY
// ? CREATE SUB SUB CATEGORY
const schemaReqBodyCreateSubSubCategory = Joi.object({
  name: Joi.string().required(),
  subCategoryId: Joi.string().required()
})
export const validateReqBodyCreateSubSubCategory = validator(schemaReqBodyCreateSubSubCategory)

// ? UPDATE SUB SUB CATEGORY BY ID
const schemaReqParamsUpdateSubSubCategoryById = Joi.object({
  subSubCategoryId: Joi.string().required()
})
export const validateReqParamsUpdateSubSubCategoryById = validator(schemaReqParamsUpdateSubSubCategoryById)

const schemaReqBodyUpdateSubSubCategoryById = Joi.object({
  name: Joi.string().optional(),
  subCategoryId: Joi.string().optional()
})
export const validateReqBodyUpdateSubSubCategoryById = validator(schemaReqBodyUpdateSubSubCategoryById)

// ? DELETE SUB SUB CATEGORY BY ID
const schemaReqParamsDeleteSubSubCategoryById = Joi.object({
  subSubCategoryId: Joi.string().required()
})
export const validateReqParamsDeleteSubSubCategoryById = validator(schemaReqParamsDeleteSubSubCategoryById)
