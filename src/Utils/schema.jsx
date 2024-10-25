import * as Yup from 'yup'; 
export const validationSchema = Yup.object({
    firstName: Yup.string()
      .required('First Name is required')
      .min(2, 'First Name must be at least 2 characters'),
    lastName: Yup.string()
      .required('Last Name is required')
      .min(2, 'Last Name must be at least 2 characters'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    age: Yup.number()
      .required('Age is required')
      .positive('Age must be positive')
      .integer('Age must be an integer')
      .min(18, 'You must be at least 18 years old'),
    phoneNumber: Yup.string()
      .required('Phone Number is required')
      .matches(/^[0-9]+$/, 'Phone Number must be only digits')
      .min(10, 'Phone Number must be at least 10 digits'),
    birthDate: Yup.date()
      .required('Birth Date is required')
      .max(new Date(), 'Birth Date cannot be in the future'),
  });

export const validationSchemaUpdate = Yup.object({
    firstName: Yup.string()
      .min(2, 'First Name must be at least 2 characters'),
    lastName: Yup.string()

      .min(2, 'Last Name must be at least 2 characters'),
    email: Yup.string()
      .email('Invalid email address'),
    age: Yup.number().positive('Age must be positive')
      .integer('Age must be an integer')
      .min(18, 'You must be at least 18 years old'),
    phoneNumber: Yup.string()
      .matches(/^[0-9]+$/, 'Phone Number must be only digits')
      .min(10, 'Phone Number must be at least 10 digits'),
    birthDate: Yup.date()
      .max(new Date(), 'Birth Date cannot be in the future'),
  });