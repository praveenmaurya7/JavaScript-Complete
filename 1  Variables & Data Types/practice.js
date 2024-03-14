// Question 1
const product = {
    title: "Ball Pen",
    rating: 4,
    offer: 5,
    price: 270,
};

console.log(product);

// Question 2

const profile = {
    username: "@shradhakhapra",
    posts: 195,
    followers: 589000,
    following: 4,
    isFollow: true,
};

console.log(profile);

// we can print types of keys of object
console.log(typeof profile["isFollow"]);
console.log(typeof profile["followers"]);
console.log(typeof profile["username"]);