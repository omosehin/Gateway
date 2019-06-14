import { useState,useEffect } from 'react';
const useForm = (callback,validate) => {
  const [errors,setErrors] =useState({});
  const [values, setValues] = useState({});
  const [isSubmitting,setIsSubmitting] = useState(false);

  useEffect(() => {
    if(Object.keys(errors).length === 0 && isSubmitting){
      callback();
  }
}, [errors])


  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true)
  };

  const resetData =()=>{
    setValues({values:values})
  }
  const resetError =()=>{
    setValues({errors:errors})
  }
  const handleChange = (event) => {
  
    event.persist();
    setValues(values => ({ ...values, [event.target.name]: event.target.value }));
  };

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
    resetData,
    resetError,
  }
};

export default useForm;