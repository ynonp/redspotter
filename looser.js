/**
 * Created with JetBrains WebStorm.
 * User: ynonperek
 * Date: 10/24/12
 * Time: 7:36 PM
 * To change this template use File | Settings | File Templates.
 */

(function(global) {


    global.app = global.app || {};

    global.app.Looser = function( i, el, game ) {
        var self = {};

        self.user_clicked_here = function() {
            game.reset_score();
            game.reshuffle();
            console.log('Loose');
        };

        self.render = function() {
            var template = document.querySelector('#tmpl-looser').innerHTML;
            var f = Handlebars.compile(template);

            var result = f({ i: i });
            el.innerHTML += result;
        };

        return self;
    };

}(this));


