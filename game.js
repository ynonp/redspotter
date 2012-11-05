/**
 * Created with JetBrains WebStorm.
 * User: ynonperek
 * Date: 10/24/12
 * Time: 7:37 PM
 * To change this template use File | Settings | File Templates.
 */

(function(global) {
    global.app = global.app || {};

    global.app.Game = function( Score, Winner, Looser, el ) {
        var self = {};
        var score = new Score( document.querySelector('.score') );

        var squares = [];
        var container = el;

        self.add_score = function() {
            score.add();
        };

        self.reset_score = function() {
            score.zero();
        };

        self.render = function() {
            container.innerHTML = '';

            for ( var i=0; i < squares.length; i++ ) {
                squares[i].render();
            }

            score.render();
        };

        self.reshuffle = function() {
            squares = [];

            var winner_idx = Math.floor( Math.random() * 4 );
            for ( var i=0; i < 4; i++ ) {
                var el;
                if ( winner_idx === i ) {
                    el = new Winner( i, container, self );
                } else {
                    el = new Looser( i, container, self );
                }

                squares.push( el );
            }

            self.render();
        };

        container.addEventListener('click', function(e) {
            var idx = Number(e.target.getAttribute('data-index'));
            console.log(e.target);
            console.log(idx);
            if ( idx >= 0 && idx < squares.length ) {
                squares[idx].user_clicked_here();
            }
        });

        return self;
    };



}(this));