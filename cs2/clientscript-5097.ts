//
function script5097(): void {
    switch (varbitplayer_7078) {
        case 1: {
            IF_SETTEXT("Unable to load your clan data.", comp(1113, 4));  // clan_field_gameover:header
            IF_SETTEXT("Sorry!", comp(1113, 6));  // clan_field_gameover:winner
            IF_SETGRAPHIC(7532 as graphic, comp(1113, 7));  // clan_field_gameover:image
            IF_SETTEXT("Please try again later when the system is less busy.", comp(1113, 8));  // clan_field_gameover:message
            break;
        }
        case 2: {
            IF_SETTEXT("And the winner is:", comp(1113, 4));  // clan_field_gameover:header
            IF_SETTEXT("<col=ff7f7f>Red Team!</col>", comp(1113, 6));  // clan_field_gameover:winner
            IF_SETGRAPHIC(7531 as graphic, comp(1113, 7));  // clan_field_gameover:image
            if ((varbitplayer_7079 == 1)) {
                IF_SETTEXT("Congratulations, your team won!", comp(1113, 8));  // clan_field_gameover:message
            } else if ((varbitplayer_7079 == 2)) {
                IF_SETTEXT("Oh dear, better luck next time.", comp(1113, 8));  // clan_field_gameover:message
            } else {
                IF_SETTEXT("Better luck next time to the Blue Team.", comp(1113, 8));  // clan_field_gameover:message
            };
            break;
        }
        case 3: {
            IF_SETTEXT("And the winner is:", comp(1113, 4));  // clan_field_gameover:header
            IF_SETTEXT("<col=7f7fff>Blue Team!</col>", comp(1113, 6));  // clan_field_gameover:winner
            IF_SETGRAPHIC(7530 as graphic, comp(1113, 7));  // clan_field_gameover:image
            if ((varbitplayer_7079 == 2)) {
                IF_SETTEXT("Congratulations, your team won!", comp(1113, 8));  // clan_field_gameover:message
            } else if ((varbitplayer_7079 == 1)) {
                IF_SETTEXT("Oh dear, better luck next time.", comp(1113, 8));  // clan_field_gameover:message
            } else {
                IF_SETTEXT("Better luck next time to the Red Team.", comp(1113, 8));  // clan_field_gameover:message
            };
            break;
        }
        case 5: {
            IF_SETTEXT("And the result is:", comp(1113, 4));  // clan_field_gameover:header
            IF_SETTEXT("It's a draw!", comp(1113, 6));  // clan_field_gameover:winner
            IF_SETGRAPHIC(7532 as graphic, comp(1113, 7));  // clan_field_gameover:image
            IF_SETTEXT("Well done, everyone!", comp(1113, 8));  // clan_field_gameover:message
            break;
        }
        case 4: {
            IF_SETTEXT("And the winner is:", comp(1113, 4));  // clan_field_gameover:header
            if ((STRING_LENGTH(varclient_2537) > 0)) {
                IF_SETTEXT(varclient_2537, 72941574);
            } else {
                IF_SETTEXT("... missing!", comp(1113, 6));  // clan_field_gameover:winner
            };
            IF_SETGRAPHIC(7532 as graphic, comp(1113, 7));  // clan_field_gameover:image
            IF_SETTEXT("Better luck next time to everyone else.", comp(1113, 8));  // clan_field_gameover:message
            break;
        }
        case 6: {
            IF_SETTEXT("And the winner is:", comp(1113, 4));  // clan_field_gameover:header
            IF_SETTEXT("YOU!", comp(1113, 6));  // clan_field_gameover:winner
            IF_SETGRAPHIC(7532 as graphic, comp(1113, 7));  // clan_field_gameover:image
            IF_SETTEXT("Congratulations!", comp(1113, 8));  // clan_field_gameover:message
            break;
        }
        default: {
            IF_SETTEXT("", comp(1113, 4));  // clan_field_gameover:header
            IF_SETTEXT("", comp(1113, 6));  // clan_field_gameover:winner
            IF_SETGRAPHIC(-1 as graphic, comp(1113, 7));  // clan_field_gameover:image
            IF_SETTEXT("", comp(1113, 8));  // clan_field_gameover:message
            break;
        }
    };
    return;
}