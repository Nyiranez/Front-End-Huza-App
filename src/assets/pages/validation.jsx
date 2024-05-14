import * as yup from 'yup'

export const userSchema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
    phoneNumber: yup.string().min(10). max(10).required(),
    role: yup.string().required(),
    password: yup.string().min(4).max(8).required(),

});