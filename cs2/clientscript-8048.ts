//
function script8048(): void {
    script3097();
    var string0 = "";
    var int0 = (varplayer_3690 - 1);
    switch (int0) {
        case 0: {
            string0 = "Congratulations! Your saved game has been updated. Progress in the beta won't affect your progress in the main game.";
            break;
        }
        case 1: {
            string0 = "The login server timed out while trying to update your saved game. Please try again later.";
            break;
        }
        case 2: {
            string0 = "Source save game file does not exist. Please check that your accounts are synched correctly.";
            break;
        }
        case 3: {
            string0 = "There was an error contacting the login server. Please try again later";
            break;
        }
        case 4: {
            string0 = "There was an error converting your saved game. Please try again later.";
            break;
        }
        default: {
            return;
        }
    };
    script3093(-3, 4041 as dbrow, "Save Game Update", string0, 2611, "", "OK");
    return;
}