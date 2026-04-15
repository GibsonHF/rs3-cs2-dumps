//
function script11063(): void {
    var int0 = SCALE(300, 500, varbitplayer_27151);
    var int1 = IF_GETWIDTH(comp(1592, 5));
    var int2 = (int0 - int1);
    if ((int1 < int0)) {
        if ((int2 >= 20)) {
            IF_SETSIZE((int1 + 5), IF_GETHEIGHT(comp(1592, 5)), 0, 0, comp(1592, 5));
        } else {
            IF_SETSIZE((int1 + 1), IF_GETHEIGHT(comp(1592, 5)), 0, 0, comp(1592, 5));
        };
        if ((IF_GETWIDTH(comp(1592, 5)) >= 300)) {
            stack(10964);
            stack(104333336);
            IF_SETGRAPHIC();
        };
        if ((IF_GETWIDTH(comp(1592, 5)) >= 150)) {
            stack(10964);
            stack(104333335);
            IF_SETGRAPHIC();
        };
        if ((IF_GETWIDTH(comp(1592, 5)) >= 30)) {
            stack(10964);
            stack(104333334);
            IF_SETGRAPHIC();
        };
    } else {
        IF_SETONTIMER(callback(), comp(1592, 7));
    };
    return;
}