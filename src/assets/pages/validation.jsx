import * as Yup from 'yup';

export const userSchema = Yup.object().shape({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    phoneNumber: Yup.string().required('Phone number is required'),
    password: Yup.string().required('Password is required'),
    confirmpassword: Yup.string().oneOf([Yup.ref("password"), null])
});