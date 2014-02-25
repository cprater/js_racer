$(document).ready(function() {

    function getName(player) {
        // console.log(player)
        var url = '/game_over'
        var data = {
            name: player
        }

        $.post(url, data, function(serverResopnse) {
            console.log(serverResopnse)
            $('.winner > h1').text(serverResopnse + ' Wins!!');
        }, 'json');
    }



    ///GAMEPLAY FUNCTIONS==========================================
    function endGame(player) {
        return $(player).find('.active').is(':last-child')
    }

    function determinePlayer(player) {
        // console.log(player)
        if (player === "#player_1")
            getName(player)
        else if (player === "#player_2")
            getName(player)
    }

    function movePlayer(player) {
        var endgame = endGame(player)
        if (endgame === true) {
            determinePlayer(player)
            // $('.winner > h1').text(winner + ' Wins!!');
            $(document).off("keyup");
        } else
            $(player).find('.active').removeClass('active').next().addClass('active');
    }

    $(document).on("keyup", function(event) {
        var keycode = event.keyCode
        if (keycode === 75)
            movePlayer('#player_1')
        else if (keycode === 83)
            movePlayer('#player_2')
    });

});
