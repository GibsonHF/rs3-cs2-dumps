//
function script11063(): void {
    var int0 = SCALE(300, 500, varbitplayer_27151);
    var int1 = IF_GETWIDTH(104333317);
    var int2 = (int0 - int1);
    if ((int1 < int0)) {
        if ((int2 >= 20)) {
            IF_SETSIZE((int1 + 5), IF_GETHEIGHT(104333317), 0, 0, 104333317);
        } else {
            IF_SETSIZE((int1 + 1), IF_GETHEIGHT(104333317), 0, 0, 104333317);
        };
        if ((IF_GETWIDTH(104333317) >= 300)) {
            IF_SETGRAPHIC(10964, 104333336);
        };
        if ((IF_GETWIDTH(104333317) >= 150)) {
            IF_SETGRAPHIC(10964, 104333335);
        };
        if ((IF_GETWIDTH(104333317) >= 30)) {
            IF_SETGRAPHIC(10964, 104333334);
        };
    } else {
        IF_SETONTIMER(callback(), 104333319);
    };
    return;
}