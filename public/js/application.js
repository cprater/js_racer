$(document).ready(function() {

    function endGame(player) {
        // console.log($(player).find('.active').is(':last-child'))
        return $(player).find('.active').is(':last-child')
    }

    function determinePlayer(player) {
        if (player === "#Player_1")
            return "Player 1"
        else if (player === "#Player_2")
            return "Player 2"
    }

    function movePlayer(player) {
        var endgame = endGame(player)
        if (endgame === true) {
            var winner = determinePlayer(player)
            $('.winner > h1').text(winner + ' Wins!!');
            $(document).off("keyup");
        } else
            $(player).find('.active').removeClass('active').next().addClass('active');
    }


    $(document).on("keyup", function(event) {
        var keycode = event.keyCode
        console.log(event)
        if (keycode === 75)
            movePlayer('#Player_1')
        else if (keycode === 83)
            movePlayer('#Player_2')
    });

});
