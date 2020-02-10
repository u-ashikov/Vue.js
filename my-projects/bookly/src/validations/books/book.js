import { required, maxLength } from 'vuelidate/lib/validators'

export const validations = {
    title: {
        required
    },
    author: {
        required
    },
    description: {
        required,
        maxLength: maxLength(1000)
    },
    isbnNumber: {
        required,
        maxLength: maxLength(10)
    }
}