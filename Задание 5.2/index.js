function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}

const original = {
    name: 'John',
    address: {
        city: 'New York',
        country: 'USA'
    }
};

const clone = deepClone(original);
clone.address.city = 'Los Angeles';

console.log(original.address.city);
console.log(clone.address.city);