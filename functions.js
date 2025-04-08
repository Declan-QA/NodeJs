export const validateEmailDomain = (email) => {
    const constraintregex=/\.[a-zA-Z]{2,}$/
    return constraintregex.test(email);
};


//tr.2atGg8rej2p