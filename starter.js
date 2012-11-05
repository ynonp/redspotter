/**
 * Created with JetBrains WebStorm.
 * User: ynonperek
 * Date: 10/31/12
 * Time: 4:43 PM
 * To change this template use File | Settings | File Templates.
 */


(function(global) {
    global.app = global.app || {};

    global.app.Starter = function( app, el ) {
        var self = {};

        self.render = function() {
            var template = document.querySelector('#tmpl-starter').innerHTML;
            el.innerHTML = template;

            var btn = el.querySelector('button');
            btn.addEventListener('click', function() {
                app.start_game();
            });
        };

        return self;
    };

}(this));