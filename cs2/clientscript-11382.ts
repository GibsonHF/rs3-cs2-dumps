//
function script11382(): void {
    var int0 = IF_GETWIDTH(106168344);
    var int1 = (IF_GETWIDTH(106168343) - 4);
    var int2 = 0;
    var int3 = (int1 / 24);
    var int4 = (varbitplayer_27908 * int3);
    if ((int0 < int4)) {
        int2 = MIN((int0 + 1), int4);
    } else if ((int0 > int4)) {
        int2 = MAX((int0 - 2), int4);
    } else {
        IF_SETONTIMER(callback(), 106168344);
        return;
    };
    if ((int2 == 0)) {
        int2 = 1;
        IF_SETONTIMER(callback(), 106168344);
    };
    if ((int2 < (int3 * 5))) {
        IF_SETGRAPHIC(2291, 106168328);
        IF_SETGRAPHIC(378, 106168329);
        IF_SETGRAPHIC(33110, 106168330);
    } else {
        IF_SETGRAPHIC(2290, 106168328);
        IF_SETGRAPHIC(379, 106168329);
        IF_SETGRAPHIC(33109, 106168330);
    };
    if ((int2 < (int3 * (5 + 8)))) {
        IF_SETGRAPHIC(2291, 106168351);
        IF_SETGRAPHIC(378, 106168352);
        IF_SETGRAPHIC(33106, 106168353);
    } else {
        IF_SETGRAPHIC(2290, 106168351);
        IF_SETGRAPHIC(379, 106168352);
        IF_SETGRAPHIC(33105, 106168353);
    };
    IF_SETSIZE(int2, 18, 0, 0, 106168344);
    return;
}