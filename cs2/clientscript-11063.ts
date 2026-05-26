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
            IF_SETGRAPHIC(10964 as graphic, comp(1592, 24));
        };
        if ((IF_GETWIDTH(comp(1592, 5)) >= 150)) {
            IF_SETGRAPHIC(10964 as graphic, comp(1592, 23));
        };
        if ((IF_GETWIDTH(comp(1592, 5)) >= 30)) {
            IF_SETGRAPHIC(10964 as graphic, comp(1592, 22));
        };
    } else {
        IF_SETONTIMER(callback(), comp(1592, 7));
    };
    return;
}