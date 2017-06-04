let contact;

function (contact){
    return new Prmoise((resolve, reject)){
        let counter=0;
        contact.email.forEach(function(email){
            if (!validate(email)){
                reject()
            }else{
                counter++
            }
            if (counter === contact.email.lenght){
                resolve()
            }
        })
    }
}
