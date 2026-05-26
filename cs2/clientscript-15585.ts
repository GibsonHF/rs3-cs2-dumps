//
function script15585(): void {
    if ((varbitplayer_56619 == 0)) {
        IF_SETPOSITION(0, 2, 1, 0, 52297750);
        if ((CC_FIND(52297734, 0) == 1)) {
            CC_SETTEXT("Select Mode");
        };
    } else {
        IF_SETPOSITION(-160, 2, 1, 0, 52297750);
        IF_SETPOSITION(160, 2, 1, 0, 52297761);
        if ((CC_FIND(52297734, 0) == 1)) {
            CC_SETTEXT("Select Difficulty");
        };
    };
    IF_SETHIDE(script734(varbitplayer_56619), 52297740);
    IF_SETHIDE(script6427(varbitplayer_56619), 52297761);
    IF_SETHIDE(script734(varbitplayer_56619), 52297760);
    var int0 = -1;
    switch (varbitplayer_25406) {
        case 0: {
            int0 = 52297740;
            break;
        }
        case 1: {
            int0 = 52297750;
            break;
        }
        case 2: {
            int0 = 52297761;
            break;
        }
        case 3: {
            int0 = 52297760;
            break;
        }
        default: {
            int0 = 52297740;
            break;
        }
    };
    var int1 = IF_GETX(int0);
    IF_SETPOSITION(--int1, 0, 0, 0, 52297762);
    if ((varbitplayer_56619 == 0)) {
        IF_SETTEXT("Choose Game Mode", 52297778);
    } else {
        IF_SETTEXT("Choose Difficulty", 52297778);
    };
    script15586();
    var int2 = script6428(varbitplayer_25406, 5);
    if ((script9096() == 1)) {
        script13994(93061177, 93061178, 28557, "", int2);
        script13959(93061179, 655, int2);
        switch (varbitplayer_49039) {
            case 0: {
                IF_SETGRAPHIC(-1, 93061180);
                break;
            }
            case 1: {
                IF_SETGRAPHIC(34557, 93061180);
                break;
            }
            case 2: {
                IF_SETGRAPHIC(34558, 93061180);
                break;
            }
            case 3: {
                IF_SETGRAPHIC(34553, 93061180);
                break;
            }
        };
    };
    return;
}