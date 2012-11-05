/**
 * Created with JetBrains WebStorm.
 * User: ynonperek
 * Date: 10/24/12
 * Time: 7:43 PM
 * To change this template use File | Settings | File Templates.
 */


(function(global) {
    global.app = global.app || {};

    global.app.Score = function( el ) {
        var score = 0;

        var self = {};

        self.render = function() {
            el.innerHTML = score;
        };

        self.add = function() {
            score += 10;
        };

        self.zero = function() {
            score = 0;
        };


        return self;
    };


}(this));