//
function script10563(int0: int, int1: int): void {
    if ((CC_FIND(comp(1532, 13), int0) == 1)) {
        CC_SETTRANS(120);
    };
    if ((int1 == 1)) {
        if (((varbitplayer_24912 >= 20) || (varbitplayer_24912 == int0))) {
            var int1 = 2;
        } else if (((varbitplayer_24913 >= 20) || (varbitplayer_24913 == int0))) {
            int1 = 3;
        } else if (((varbitplayer_24913 >= 20) || (varbitplayer_24913 == int0))) {
            int1 = 4;
        } else if ((varbitplayer_24916 > 0)) {
            int1 = (varbitplayer_24916 + 1);
        };
    };
    if ((int1 == 2)) {
        if ((int0 != varbitplayer_24912)) {
            script10560(int0, comp(1532, 17));
            IF_SETTEXT("Base rune cost: <col=ffffff>???</col>.<br>+<col=ffffff>???</col> Total: <col=ffffff>???</col>.", comp(1532, 3));
        };
    } else if ((int1 == 3)) {
        if ((int0 != varbitplayer_24913)) {
            script10560(int0, comp(1532, 19));
            IF_SETTEXT("Base rune cost: <col=ffffff>???</col>.<br>+<col=ffffff>???</col> Total: <col=ffffff>???</col>.", comp(1532, 4));
        };
    } else if (((int1 == 4) && (int0 != varbitplayer_24914))) {
        script10560(int0, comp(1532, 21));
        IF_SETTEXT("Base rune cost: <col=ffffff>???</col>.<br>+<col=ffffff>???</col> Total: <col=ffffff>???</col>.", comp(1532, 5));
    };
    return;
}