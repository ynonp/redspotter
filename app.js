(function(global) {

    var app = {};

    var next_page = document.querySelector('.page.next');
    var current_page = document.querySelector('.page.current');

    var g = new global.app.Game(
        global.app.Score,
        global.app.Winner,
        global.app.Looser,
        next_page.querySelector('#container')
    );

    var starter = new global.app.Starter( app, current_page );

    starter.render();
    g.reshuffle();

    app.start_game = function() {
        next_page.classList.remove('next');
        next_page.classList.add('current');

        current_page.classList.remove('current');
        current_page.classList.add('previous');
    };


}(this));