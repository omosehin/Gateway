export default function validate(values) {
    let errors = {};
    if (!values.email) {
      errors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is invalid';
    }
    if (!values.password) {
      errors.password = 'Password is required';
    } else if (values.password.length < 8) {
      errors.password = 'Password must be 8 or more characters';
    }
    return errors;
  };

// export const Validate = (Values) =>{
//     const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
//     const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{4,8}$/;
//     let errors = {};
//     if(!Values.email){
//         errors.email  = 'Email Address is required !'
//     }
//     if(!emailRegex.test(Values.email)){
//         email.errors = "Valid email address is required!"
//     }
//     if(!passwordRegex.test(Values.password)){
//         errors.password = `Password requires one lower and one upper case letter, 
//                          one digit, 6-13 length, and no spaces!`
//     }
//     if(!Values.username){
//         username.errors = 'Username is required !'
//     }
    
//     if(Values.password !== password2){
//         confirmPassword.errors = 'Password do not match !'
//     }
//     return errors;
//     };