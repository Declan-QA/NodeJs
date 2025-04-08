export const validateEmailDomain = (email) => {
  const constraintregex = /\.[a-zA-Z]{2,}$/;
  return constraintregex.test(email);
};


export const validateDate = (date)=>{
  return new Date(date) < Date.now();
}

export const Lencheck = (password) =>{
  return  (password.length >= 9)?  [true] : [false, "Must be 9 Characters or more in length"]
}

export const Uppercheck = (password) =>{
  let code;
  let length =password.length

  for (let i = 0; i < length; i++) {
    code = password.charCodeAt(i);
    if (code > 64 && code < 91) { 
      return [true];
    }
  } 
  return [false,"Has no Uppercase Letters"]
}


export const Lowercheck = (password) =>{
 let code;
  let length =password.length

  for (let i = 0; i < length; i++) {
    code = password.charCodeAt(i);
    if (code > 96 && code < 123) { 
      return [true];
    }
  } 
 return [false,"Has no Lowercase Letters"]
}

export const SpecialCheck = (password) => {
  let code;
  let length =password.length

  for (let i = 0; i < length; i++) {
    code = password.charCodeAt(i);
    if (!(code > 47 && code < 58) && // numeric (0-9)
        !(code > 64 && code < 91) && // upper alpha (A-Z)
        !(code > 96 && code < 123)) { // lower alpha (a-z)
      return [true];
    }
  }
  return [false,"Has no Special Characters"];
};


export const Numcheck = (password) =>{
  return (password.split("").some((letter)=>{return !isNaN(letter)}))? [true]: [false, "Has no Numbers"]
}

export const paswordcheck = (password) =>{
  const checks= [Lencheck(password),Uppercheck(password),Lowercheck(password),SpecialCheck(password),Numcheck(password)]
  if (checks.every((value)=>{return value[0]==true})){
    return true
  } else {
    return checks.map((element)=>{if (!element[0]) return element[1]}).filter((value)=>{return value !=undefined})
  }
}