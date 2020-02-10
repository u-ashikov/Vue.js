import { required, email, minLength } from 'vuelidate/lib/validators'
import users from '../../queries/users'

export const validations = {
    username: {
        required,
        unique: function (val) {
            if (val === '') {
                return true;
            }

            return users.getByUsername(val)
                .then(function (response) {
                    if (response && response.status == 200) {
                        return Object.keys(response.data).length == 0;
                    }

                    return true;
                });
        }
    },
    email: {
        required,
        email,
        unique: function (val) {
            if (val === '') {
                return true;
            }

            return users.getByEmail(val)
                .then(function (response) {
                    if (response && response.status == 200) {
                        return Object.keys(response.data).length == 0;
                    }

                    return true;
                });
        }
    },
    password: {
        required,
        minLength: minLength(6)
    }
}