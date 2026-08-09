//
function script1179(int0: number): void {
    var int1 = (varplayer_6144 - DATE_MINUTES());
    if ((varbitplayer_22875 == 1)) {
        if ((varbitplayer_223 == 0)) {
            if ((MAP_LANG() == 1)) {
                IF_SETGRAPHIC(2715 as graphic, int0);
            } else {
                IF_SETGRAPHIC(2731 as graphic, int0);
            };
        } else {
            if ((MAP_LANG() == 1)) {
                IF_SETGRAPHIC(5571 as graphic, int0);
            } else {
                IF_SETGRAPHIC(5569 as graphic, int0);
            };
            if (((varbitplayer_223 == 1) || (int1 > 0))) {
                script8800("Bonus XP is active!", int0, -1);
            };
        };
    } else {
        if ((MAP_LANG() == 1)) {
            IF_SETGRAPHIC(5571 as graphic, int0);
        } else {
            IF_SETGRAPHIC(5569 as graphic, int0);
        };
        if (((varbitplayer_223 == 1) || (int1 > 0))) {
            script8800("Bonus XP is active!", int0, -1);
        };
    };
    return;
}