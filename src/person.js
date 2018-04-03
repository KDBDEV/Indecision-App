export const isAdult = (age) => {
    if(age >= 18) {
        return "is adult";
    } 
};

export const canDrink = (age) => {
    if(age >= 21) {
        return "can drink";
    }
}

export default (age) => {
    if(age >= 65) {
        return true;
    }
}