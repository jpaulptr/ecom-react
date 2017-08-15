const path = require('path');

const dataService = require(path.resolve('./source/data/home-data'));

exports.getData = (key) => {
    return dataService.getData(key);
};

exports.getItemData = (key) => {
    return dataService.getItemData(key);
};