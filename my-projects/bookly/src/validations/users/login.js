import { required, email } from 'vuelidate/lib/validators'

export const validations = {
    email: {
        required,
        email
    },
    password: {
        required
    }
}