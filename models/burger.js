const orm = require('../config/orm.js');

let burger = {
    selectAll = cb => {
        orm.selectAll("burgers", res => {
            cb(res);
        });
    },
    insertOne = (cols, vals, cb) => {
        orm.insertOne("burgers", cols, vals, (res) => {
            cb(res);
        });
    },
    updateone = (obColVals, condition, cb) => {
        orm.updateone("burgers", condition, (res) => {
            cb(res);
        });
    }
}

module.exports = burger;