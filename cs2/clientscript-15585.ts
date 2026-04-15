//
function script15585(): void {
    if ((varbitplayer_56619 == 0)) {
        IF_SETPOSITION(0, 2, 1, 0, comp(798, 22));
        if ((CC_FIND(comp(798, 6), 0) == 1)) {
            CC_SETTEXT("Select Mode");
        };
    } else {
        IF_SETPOSITION(-160, 2, 1, 0, comp(798, 22));
        IF_SETPOSITION(160, 2, 1, 0, comp(798, 33));
        if ((CC_FIND(comp(798, 6), 0) == 1)) {
            CC_SETTEXT("Select Difficulty");
        };
    };
    IF_SETHIDE(script734(varbitplayer_56619), comp(798, 12));
    IF_SETHIDE(script6427(varbitplayer_56619), comp(798, 33));
    IF_SETHIDE(script734(varbitplayer_56619), comp(798, 32));
    var int0 = comp(-1, 65535);
    switch (varbitplayer_25406) {
        case 0: {
            int0 = comp(798, 12);
            break;
        }
        case 1: {
            int0 = comp(798, 22);
            break;
        }
        case 2: {
            int0 = comp(798, 33);
            break;
        }
        case 3: {
            int0 = comp(798, 32);
            break;
        }
        default: {
            int0 = comp(798, 12);
            break;
        }
    };
    var int1 = IF_GETX(int0);
    IF_SETPOSITION(--int1, 0, 0, 0, comp(798, 34));
    if ((varbitplayer_56619 == 0)) {
        IF_SETTEXT("Choose Game Mode", comp(798, 50));
    } else {
        IF_SETTEXT("Choose Difficulty", comp(798, 50));
    };
    script15586();
    var int2 = script6428(varbitplayer_25406, 5);
    if ((script9096() == 1)) {
        script13994(comp(1420, 57), comp(1420, 58), 28557 as struct, "", int2);
        script13959(comp(1420, 59), 655 as struct, int2);
        switch (varbitplayer_49039) {
            case 0: {
                stack(-1);
                stack(93061180);
                IF_SETGRAPHIC();
                break;
            }
            case 1: {
                stack(34557);
                stack(93061180);
                IF_SETGRAPHIC();
                break;
            }
            case 2: {
                stack(34558);
                stack(93061180);
                IF_SETGRAPHIC();
                break;
            }
            case 3: {
                stack(34553);
                stack(93061180);
                IF_SETGRAPHIC();
                break;
            }
        };
    };
    return;
}