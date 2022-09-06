const Fooddata = [
    {
        id: 1,
        rname: "Spinach Soup",
        imgdata: "https://d1uxq5uu95as1y.cloudfront.net/products/22f652443a8bac3d_11spenichsoup.jpeg",
        address: "Soup",
        delimg: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
        somedata: " 1175 + likes this soup",
        price: "₹150 for one",
        rating: "3.8",
        arrimg: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp"
    },
    {
        id: 2,
        rname: "Vada Pav..",
        imgdata: "https://b.zmtcdn.com/data/pictures/chains/5/19295245/089cbcf1d3307542c72f77272556b28b_o2_featured_v2.jpg?output-format=webp",
        address: "Indian Street Food",
        delimg: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
        somedata: " 2525 + order placed recently",
        price: "₹25 for one",
        rating: "3.9",
        arrimg: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp"
    },
    {
        id: 3,
        rname: "Double Chesse Pizza..",
        imgdata: "https://b.zmtcdn.com/data/pictures/chains/1/19708611/10f90d4a69678d98662514d173b29665_o2_featured_v2.jpg",
        address: "Pizza, Fast Food, Pasta",
        delimg: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
        somedata: " 650 + pizza order placed recently",
        price: "₹150 for one",
        rating: "4.2",
        arrimg: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp"
    },
    {
        id: 4,
        rname: "Chineese Platter",
        imgdata: "https://res.cloudinary.com/purnesh/image/upload/w_1080,f_auto/golden-fiesta-h.jpg",
        address: "Noodles,Momos,spring Role",
        delimg: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
        somedata: " 300 + order placed recently",
        price: "₹180 for one",
        rating: "3.8",
        arrimg: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp"
    },
    {
        id: 5,
        rname: "North Indian Thali..",
        imgdata: "https://media.istockphoto.com/photos/indian-thali-picture-id1173948697?k=20&m=1173948697&s=612x612&w=0&h=cML_MEex-7p5mJbNHGwXGcoE9N0e7L1aXcEf3bt68A0=",
        address: "North Indian veg Thali",
        delimg: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
        somedata: "1050 + placed this order recently",
        price: "₹210 for one",
        rating: "4.0",
        arrimg: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp"
    },
    {
        id: 6,
        rname: "Masala Dosa",
        imgdata: "https://assets.cntraveller.in/photos/60ba1de1591f977adc9777a2/16:9/w_1280,c_limit/dosa-recipes-1366x768.jpg",
        address: "South Indian",
        delimg: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
        somedata: " 1100 + order placed recently",
        price: "₹100 for one",
        rating: "3.8",
        arrimg: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp"
    },
    {
        id: 7,
        rname: "Fresh Cocktail",
        imgdata: "https://static.onecms.io/wp-content/uploads/sites/43/2015/05/102561327_3-Cocktails-on-Bar_Photo-by-Meredith.jpg",
        address: "Cocktail,Beverages",
        delimg: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
        somedata: "500 + order placed recently",
        price: "₹100 for one",
        rating: "3.8",
        arrimg: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp"
    },
    {
        id: 8,
        rname: "Indian Masala Chai",
        imgdata: "https://pipingpotcurry.com/wp-content/uploads/2019/05/How-to-make-Masala-Chai-Piping-Pot-Curry.jpg",
        address: "Tea, Coffee, Shake, Beverages",
        delimg: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
        somedata: "500 + order placed recently",
        price: "₹20 for one",
        rating: "3.8",
        arrimg: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp"
    },
    {
        id: 9,
        rname: "Coffe and Shakes",
        imgdata: "https://images.herzindagi.info/image/2019/Sep/oreo-coffee-milkshake-three.jpg",
        address:"  coffee, shakes",
        delimg: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
        somedata: "2525 + order placed recently",
        price: "₹250 for one",
        rating: "3.8",
        arrimg: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp"
    },
];

export default Fooddata;