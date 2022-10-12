export default {
    required: (value) => !! value || 'This required field',
    email: (v) => {
        /* eslint-disable-next-line no-useless-escape*/
        const re =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
        if (re.test(String(v).toLowerCase().trim())) {
          return true;
        }
        return "Invalid Email";
      },
      heading: (val) =>{
        if(val.length<=200){
         return true;
        }
        return "Title should not exceed 200 characters";
      },
}