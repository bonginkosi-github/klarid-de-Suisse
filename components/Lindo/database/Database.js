export const COLOURS = {
    white: '#ffffff',
    black: '#000000',
    green: '#00AC76',
    red: '#ff7878',
    glossyred: '#DD0004',
    blue: '#0043F9',
    pink: '#ffddf4',
    backgroundLight: '#F0F0F3',
    backgroundMedium: '#B9B9B9',
    backgroundDark: '#77777',
    palepink: '#FFF5F5',
    canvapink: '#FF0833',
}

export const Items = [
    {
        id:1,
        category: 'product',
        productName: 'UNI TONE LIGHTENING CLARIFYING MILK MINI-TUBES',
        productPrice:264,
        description: '500 ml - 16.9 fl.oz \n Contains depigmenting agents, softeners and moisturizers.s',
        isOff:true,
        offPrecentage: 10,
        //productImage: require('../database/images/accessories/bg.png'), //expo doctor --fix-dependencies,
        productImage: require('../database/images/accessories/bg.png'),
        productImageList: [
            require ('../database/images/accessories/bg.png'),
            require ('../database/images/accessories/tizer.png'),
            require ('../database/images/accessories/item_bg (4).png'),
        ]
    },

     {
         id:2,
         category: 'accessory',
         productName: 'UNI TONE CLARIFYING NIGHT CREAM',
         productPrice:353,
         description: '500 ml - 16.9 fl.oz \n Contains depigmenting agents, softeners and moisturizers.',
         isOff:true,
         offPrecentage: 10,
         productImage: require('../database/images/products/klar.png'),
         isAvailable:false,
         productImageList: [
            //require ('../../components/database/images/accessories/klar.png'),
            require ('../database/images/accessories/klar.png'),
            require ('../database/images/accessories/number.png'),
            require ('../database/images/accessories/item_bg (3).png'),
            
         ]
     },
     {
         id:3,
         category: 'product',
         productName: 'UNI TONE CLARIFYING\nSERUM',
         productPrice:675,
         description: '500 ml - 16.9 fl.oz \n Contains depigmenting agents, softeners and moisturizers.',
         isOff:false,
         offPrecentage: 10,
         productImage: require('../database/images/products/tizer.png'),
         isAvailable:true,
         //Image: 'https://thestayathomechef.com/wp-content/uploads/2017/08/Most-Amazing-Lasagna-2-e1574792735811.jpg',
         productImageList: [
            require ('../database/images/accessories/tizer.png'),
            require ('../database/images/accessories/number.png'),
            require ('../database/images/accessories/bg.png'),
         ]
     },
     {
         id:4,
         category: 'accessory',
         productName: 'UNI TONE LIGHTENING GLYCERIN',
         productPrice:548,
         description: '500 ml - 16.9 fl.oz \n Contains depigmenting agents, softeners and moisturizers.',
         isOff:false,
         offPrecentage: 10,
         productImage: require('../database/images/products/tizer.png'),
         isAvailable:true,
         productImageList: [
            require ('../database/images/accessories/tizer.png'),
            require ('../database/images/accessories/item_bg (3).png'),
            require ('../database/images/accessories/number.png'),
         ]
     },

    {
        id:6,
        category: 'accessory',
        productName: 'UNI TONE LIGHTENING GLYCERIN',
        productPrice:739,
        description: '500 ml - 16.9 fl.oz \n Contains depigmenting agents, softeners and moisturizers.',
        isOff:true,
        offPrecentage: 10,
        productImage: require('../database/images/products/number.png'), //expo doctor --fix-dependencies,
        productImageList: [
            require ('../database/images/accessories/number.png'),
            require ('../database/images/accessories/bg.png'),
            require ('../database/images/accessories/tizer.png'),
        ]
    },

    {
        id:8,
        category: 'accessory',
        productName: 'UNI TONE CLARIFYING DAY CREAM',
        productPrice:485,
        description: '500 ml - 16.9 fl.oz \n Contains depigmenting agents, softeners and moisturizers.',
        isOff:false,
        offPrecentage: 10,
        isAvailable:true,
        productImage: require('../database/images/products/number.png'), //expo doctor --fix-dependencies,
        productImageList: [
            require ('../database/images/accessories/number.png'),
            require ('../database/images/accessories/number.png'),
            require ('../database/images/accessories/item_bg (3).png'),
        ]
    },
    

]
