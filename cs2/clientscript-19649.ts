//
function script19649(int0: unknown_int, int1: unknown_int): unknown_int {
    var int2 = 13333;
    var int3 = 1;
    if ((int1 == 1)) {
        if ((varbitplayer_45588 >= 15)) {
            int2 = 13332;
            if ((((int0 == 1) && (varbitplayer_56778 == 1)) || ((int0 == 0) && (varbitplayer_56777 == 1)))) {
                int3 = 0;
            };
        } else {
            int2 = 19187;
        };
    } else if ((varbitplayer_45588 >= 15)) {
        int2 = 13331;
        if ((((int0 == 1) && (varbitplayer_56778 == 1)) || ((int0 == 0) && (varbitplayer_56777 == 1)))) {
            int3 = 0;
        };
    } else {
        int2 = 13333;
    };
    if ((int0 == 1)) {
        stack(int2);
        stack(42008591);
        IF_SETGRAPHIC();
        IF_SETHIDE(int3, 42008595);
    } else {
        stack(int2);
        stack(42008590);
        IF_SETGRAPHIC();
        IF_SETHIDE(int3, 42008594);
    };
    return -1;
}