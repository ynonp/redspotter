(function(global) {

    var app = {};

    var container = document.querySelector('#container');

    var g = new global.app.Game(
        global.app.Score,
        global.app.Winner,
        global.app.Looser,
        container
    );

    var starter = new global.app.Starter( app, container );

    starter.render();

    app.start_game = function() {
        g.reshuffle();
    };


}(this));