//
function script19649(int0: number, int1: number): number {
    var int2 = 13333 as graphic;
    var int3 = true;
    if ((int1 == 1)) {
        if ((varbitplayer_45588 >= 15)) {
            int2 = 13332 as graphic;
            if ((((int0 == 1) && (varbitplayer_56778 == 1)) || ((int0 == 0) && (varbitplayer_56777 == 1)))) {
                int3 = false;
            };
        } else {
            int2 = 19187 as graphic;
        };
    } else if ((varbitplayer_45588 >= 15)) {
        int2 = 13331 as graphic;
        if ((((int0 == 1) && (varbitplayer_56778 == 1)) || ((int0 == 0) && (varbitplayer_56777 == 1)))) {
            int3 = false;
        };
    } else {
        int2 = 13333 as graphic;
    };
    if ((int0 == 1)) {
        IF_SETGRAPHIC(int2, comp(641, 15));
        IF_SETHIDE(int3, comp(641, 19));
    } else {
        IF_SETGRAPHIC(int2, comp(641, 14));
        IF_SETHIDE(int3, comp(641, 18));
    };
    return -1;
}