//
function script11855(int0: component): void {
    var int1 = varbitplayer_1668;
    var int2 = script2915();
    if ((varbitplayer_27168 == 1)) {
        if ((int1 >= 10)) {
            int1 = (int1 / 10);
        } else if ((int1 > 0)) {
            int1 = 1;
        } else {
            int1 = 0;
        };
        int2 = MAX(1, (int2 / 10));
    };
    var int3 = MAX(0, SCALE(int1, int2, IF_GETWIDTH(comp(1923, 62))));
    IF_SETSIZE(int3, IF_GETHEIGHT(int0), 0, 0, int0);
    return;
}