//
function script5097(): void {
    switch (varbitplayer_7078) {
        case 1: {
            IF_SETTEXT("Unable to load your clan data.", comp(1113, 4));
            IF_SETTEXT("Sorry!", comp(1113, 6));
            stack(7532);
            stack(72941575);
            IF_SETGRAPHIC();
            IF_SETTEXT("Please try again later when the system is less busy.", 72941576);
            break;
        }
        case 2: {
            IF_SETTEXT("And the winner is:", comp(1113, 4));
            IF_SETTEXT("<col=ff7f7f>Red Team!</col>", comp(1113, 6));
            stack(7531);
            stack(72941575);
            IF_SETGRAPHIC();
            if ((varbitplayer_7079 == 1)) {
                IF_SETTEXT("Congratulations, your team won!", comp(1113, 8));
            } else if ((varbitplayer_7079 == 2)) {
                IF_SETTEXT("Oh dear, better luck next time.", comp(1113, 8));
            } else {
                IF_SETTEXT("Better luck next time to the Blue Team.", comp(1113, 8));
            };
            break;
        }
        case 3: {
            IF_SETTEXT("And the winner is:", comp(1113, 4));
            IF_SETTEXT("<col=7f7fff>Blue Team!</col>", comp(1113, 6));
            stack(7530);
            stack(72941575);
            IF_SETGRAPHIC();
            if ((varbitplayer_7079 == 2)) {
                IF_SETTEXT("Congratulations, your team won!", comp(1113, 8));
            } else if ((varbitplayer_7079 == 1)) {
                IF_SETTEXT("Oh dear, better luck next time.", comp(1113, 8));
            } else {
                IF_SETTEXT("Better luck next time to the Red Team.", comp(1113, 8));
            };
            break;
        }
        case 5: {
            IF_SETTEXT("And the result is:", comp(1113, 4));
            IF_SETTEXT("It's a draw!", comp(1113, 6));
            stack(7532);
            stack(72941575);
            IF_SETGRAPHIC();
            IF_SETTEXT("Well done, everyone!", 72941576);
            break;
        }
        case 4: {
            IF_SETTEXT("And the winner is:", comp(1113, 4));
            if ((STRING_LENGTH(varclient_2537) > 0)) {
                IF_SETTEXT(varclient_2537, comp(1113, 6));
            } else {
                IF_SETTEXT("... missing!", comp(1113, 6));
            };
            stack(7532);
            stack(72941575);
            IF_SETGRAPHIC();
            IF_SETTEXT("Better luck next time to everyone else.", 72941576);
            break;
        }
        case 6: {
            IF_SETTEXT("And the winner is:", comp(1113, 4));
            IF_SETTEXT("YOU!", comp(1113, 6));
            stack(7532);
            stack(72941575);
            IF_SETGRAPHIC();
            IF_SETTEXT("Congratulations!", 72941576);
            break;
        }
        default: {
            IF_SETTEXT("", comp(1113, 4));
            IF_SETTEXT("", comp(1113, 6));
            stack(-1);
            stack(72941575);
            IF_SETGRAPHIC();
            IF_SETTEXT("", 72941576);
            break;
        }
    };
    return;
}