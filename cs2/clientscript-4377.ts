//[clientscript,clan_vote_update]
function script4377(): void {
    if ((varplayer_2081 == varclient_1499)) {
        IF_SETTEXT("You have voted.", 72155210);
    } else {
        IF_SETTEXT("You have not yet voted.<br>How would you like to vote?", 72155210);
    };
    if ((varbitplayer_8989 == 0)) {
        IF_SETTEXT("Results of last vote:", 72155148);
    } else if (((varbitplayer_8992 == 1) || (varbitplayer_8992 == 0))) {
        IF_SETTEXT("Vote open for less than a minute.", 72155148);
    } else {
        IF_SETTEXT(`Vote open for less than ${inttostring(varbitplayer_8992, 10)} minutes.`, 72155148);
    };
    var int0 = (varbitplayer_8987 + varbitplayer_8988);
    var int1 = 0;
    var int2 = 0;
    if ((int0 > 0)) {
        if ((int0 == varbitplayer_8987)) {
            int1 = 100;
        } else if ((int0 == varbitplayer_8988)) {
            int2 = 100;
        } else {
            int1 = ((100 * varbitplayer_8987) / int0);
            if ((varbitplayer_8988 == 0)) {
                int2 = 0;
            } else {
                int2 = (100 - int1);
            };
        };
    };
    IF_SETTEXT(inttostring(varbitplayer_8987, 10), 72155143);
    IF_SETTEXT(inttostring(varbitplayer_8988, 10), 72155144);
    script4542(int1, 72155187, 72155192);
    script4542(int2, 72155197, 72155202);
    return;
}