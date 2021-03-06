export default function validate(values) {
    let errors = {};
    if (!values.username) {
        errors.username = 'Name is required';
    } else if (values.username.length < 4) {
        errors.username = 'Name is too short';
    }
    if (!values.email) {
        errors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email address is invalid';
    }
    if (!values.password) {
        errors.password = 'Password is required';
    } else if (values.password.length < 4) {
        errors.password = 'Password must be 4 or more characters';
    }
    return errors;
};

