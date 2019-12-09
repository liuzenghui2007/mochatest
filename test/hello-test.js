const assert = require('assert');
const sum = require('../hello');
const fs = require('fs')

describe('#hello.js', () => {
    describe('#sum()', () => {
        before(function () {
            console.log('before:');
        });

        after(function () {
            console.log('after.');
        });

        beforeEach(function () {
            console.log('  beforeEach:');
        });

        afterEach(function () {
            console.log('  afterEach.');
        });

        // 可以测试同步函数，传入无参数函数即可
        it('test sync function', function () {
            // TODO:
            assert(true);
        });
        // 测试异步函数,读取文件
        it('test async function', function (done) {
            fs.readFile('./data.txt', function (err, data) {
                if (err) {
                    done(err);
                } else {
                    done();
                }
            });
        });
    });
});