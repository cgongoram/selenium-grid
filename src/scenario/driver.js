var _ = require('lodash');
var wd = require('wd');
var TestCase = require('./testCase');
var Driver = require('../driver');

var WDTestCase = TestCase.extend({
    constructor: function () {
        TestCase.apply(this, arguments);
    },
    // timeout for raw wd methods (ms)
    // raw methods are the _ ones.
    timeout: 10000,
    run: function (remote, desired, done) {
        var browser = this.createBrowser(remote, desired, done);
        this.doRun(browser, remote, desired);
    },
    createBrowser: function (remote, desired, done) {
        desired = _.defaults({name: this.name}, desired);
        var browser = new Driver(remote, desired, done);
        return browser;
    },
    doRun: function (browser, remote, desired) {
        console.log('please define steps');
    }
});

module.exports = WDTestCase;
