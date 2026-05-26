//
function script11382(): void {
    var int0 = IF_GETWIDTH(comp(1620, 24));
    var int1 = (IF_GETWIDTH(comp(1620, 23)) - 4);
    var int2 = 0;
    var int3 = (int1 / 24);
    var int4 = (varbitplayer_27908 * int3);
    if ((int0 < int4)) {
        int2 = MIN((int0 + 1), int4);
    } else if ((int0 > int4)) {
        int2 = MAX((int0 - 2), int4);
    } else {
        IF_SETONTIMER(callback(), comp(1620, 24));
        return;
    };
    if ((int2 == 0)) {
        int2 = 1;
        IF_SETONTIMER(callback(), comp(1620, 24));
    };
    if ((int2 < (int3 * 5))) {
        IF_SETGRAPHIC(2291 as graphic, comp(1620, 8));
        IF_SETGRAPHIC(378 as graphic, comp(1620, 9));
        IF_SETGRAPHIC(33110 as graphic, comp(1620, 10));
    } else {
        IF_SETGRAPHIC(2290 as graphic, comp(1620, 8));
        IF_SETGRAPHIC(379 as graphic, comp(1620, 9));
        IF_SETGRAPHIC(33109 as graphic, comp(1620, 10));
    };
    if ((int2 < (int3 * (5 + 8)))) {
        IF_SETGRAPHIC(2291 as graphic, comp(1620, 31));
        IF_SETGRAPHIC(378 as graphic, comp(1620, 32));
        IF_SETGRAPHIC(33106 as graphic, comp(1620, 33));
    } else {
        IF_SETGRAPHIC(2290 as graphic, comp(1620, 31));
        IF_SETGRAPHIC(379 as graphic, comp(1620, 32));
        IF_SETGRAPHIC(33105 as graphic, comp(1620, 33));
    };
    IF_SETSIZE(int2, 18, 0, 0, comp(1620, 24));
    return;
}