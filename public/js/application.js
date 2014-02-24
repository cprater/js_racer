$(document).ready(function() {

    // $('#player_1_login').on('submit', function(event) {
    //     event.preventDefault();

    //     var url = $(this).attr('action');
    //     var data = $(this).serialize();

    //     $.post(url, data, function(serverResponse) {

    //     })
    });







    ///GAMEPLAY FUNCTIONS==========================================
    function endGame(player) {
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
