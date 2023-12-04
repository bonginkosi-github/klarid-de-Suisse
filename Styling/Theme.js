const { Dimensions } = require("react-native");

const { width, height } = Dimensions.get('window');

export const COLORS = {
    primary: '#0C0E0E',
    accent: '#3D3E40',
    grey: '#DBD5D5',
    lightGrey: '#E4E6EA',
    whiteSmoke:'#F8F8F8',
    Smoky: '#F5F5F5',
    white: '#FFFFFF',
    white2: '#EEF0F0',
    red: '#FF0000',
    green: '#009900',
    orange: '#FF9900', 
    purple: '#990099',
};

export const SIZES = {
    h1: 30,
    h2: 24,
    h3: 20,
    h4: 18,
    h5: 16,
    h6: 14,

    width,
    height,
};

export const FONTWEIGHT = {
    bold: 'bold',
    normal: 'normal',
    weight500: '500',
    weight700: '700',
};