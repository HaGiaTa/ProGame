

export function checkEmail(email, password, type) {
    const dataAccoount = JSON.parse(localStorage.getItem('account'));
    var exists = false;
    for (let i = 0; i < dataAccoount.length; i++) {
        if (email === dataAccoount[i].email) {
            if (type === 'login') {
                if (password === dataAccoount[i].password) {
                    return exists = true;
                } else {
                    return exists;
                }
            }
            return exists = true;
        }
    }
    return exists;
}