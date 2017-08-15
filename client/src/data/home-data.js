const Promise = require('bluebird');

const dataSet = [
    { 
        title: 'Mr', 
        firstName: 'John', 
        lastName: 'Jones', 
        bio: 'Lots of text would be here.' 
    },
    { 
        title: 'Mrs', 
        firstName: 'Jane', 
        lastName: 'Rivera', 
        bio: 'Even more text would be here.' 
    }
];


const dataItemsSet = [
    { 
        item: 'Lemmons',
        price: .99
    },
    { 
        item: 'Limes',
        price: .59
    }
];


exports.getData = (key) => {
    return Promise.resolve(dataSet[key]);
};

exports.getItemData = (key) => {
    return Promise.resolve(dataItemsSet[key]);
};