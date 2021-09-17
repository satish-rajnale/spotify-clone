// import '@testing-library/jest-dom/extend-expect'


module.exports = {
    addTwoNumbers: function(l1:number,l2:number){
        return l1+l2;
    },
    getPersonname: function(person: {name: string}){
        return person.name;
    },
    async getAsyncName(person: {name: string}){
        return person.name;
    },
    getNameBypromise(person: {name: string}){
        return new Promise((resolve,reject) =>{
            return resolve(person.name);
        });
    },
    getNameCallback(person: {name: string} , callback: (name: string) => void){
        callback(person.name);
    }
};