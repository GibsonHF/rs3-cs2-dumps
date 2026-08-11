//
function script15585(): void {
    if ((varbitplayer_56619 == 0)) {
        IF_SETPOSITION(0, 2, 1, 0, comp(798, 22));  // game_mode_selection:ironman
        if ((CC_FIND(comp(798, 6), 0) == 1)) {  // game_mode_selection:button_confirm
            CC_SETTEXT("Select Mode");
        };
    } else {
        IF_SETPOSITION(-160, 2, 1, 0, comp(798, 22));  // game_mode_selection:ironman
        IF_SETPOSITION(160, 2, 1, 0, comp(798, 33));  // game_mode_selection:hardcore
        if ((CC_FIND(comp(798, 6), 0) == 1)) {  // game_mode_selection:button_confirm
            CC_SETTEXT("Select Difficulty");
        };
    };
    IF_SETHIDE(script734(varbitplayer_56619), comp(798, 12));  // game_mode_selection:standard
    IF_SETHIDE(script6427(varbitplayer_56619), comp(798, 33));  // game_mode_selection:hardcore
    IF_SETHIDE(script734(varbitplayer_56619), comp(798, 32));  // game_mode_selection:group_ironman
    var int0 = comp(-1, 65535);
    switch (varbitplayer_25406) {
        case 0: {
            int0 = comp(798, 12);  // game_mode_selection:standard
            break;
        }
        case 1: {
            int0 = comp(798, 22);  // game_mode_selection:ironman
            break;
        }
        case 2: {
            int0 = comp(798, 33);  // game_mode_selection:hardcore
            break;
        }
        case 3: {
            int0 = comp(798, 32);  // game_mode_selection:group_ironman
            break;
        }
        default: {
            int0 = comp(798, 12);  // game_mode_selection:standard
            break;
        }
    };
    var int1 = IF_GETX(int0);
    int1 = (int1 - 2);
    IF_SETPOSITION(int1, 0, 0, 0, comp(798, 34));  // game_mode_selection:highlight_layer
    if ((varbitplayer_56619 == 0)) {
        IF_SETTEXT("Choose Game Mode", comp(798, 50));  // game_mode_selection:header_text
    } else {
        IF_SETTEXT("Choose Difficulty", comp(798, 50));  // game_mode_selection:header_text
    };
    script15586();
    var int2 = script6428(varbitplayer_25406, 5);
    if ((script9096() == 1)) {
        script13994(93061177, 93061178, 28557, "", int2);
        script13959(93061179, 655, int2);
        switch (varbitplayer_49039) {
            case 0: {
                IF_SETGRAPHIC(-1 as graphic, comp(1420, 60));  // acc_create:advanced_icon_ironman
                break;
            }
            case 1: {
                IF_SETGRAPHIC(34557 as graphic, comp(1420, 60));  // acc_create:advanced_icon_ironman
                break;
            }
            case 2: {
                IF_SETGRAPHIC(34558 as graphic, comp(1420, 60));  // acc_create:advanced_icon_ironman
                break;
            }
            case 3: {
                IF_SETGRAPHIC(34553 as graphic, comp(1420, 60));  // acc_create:advanced_icon_ironman
                break;
            }
        };
    };
    return;
}