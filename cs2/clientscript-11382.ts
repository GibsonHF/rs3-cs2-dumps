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
        stack(2291);
        stack(106168328);
        IF_SETGRAPHIC();
        stack(378);
        stack(106168329);
        IF_SETGRAPHIC();
        stack(33110);
        stack(106168330);
        IF_SETGRAPHIC();
    } else {
        stack(2290);
        stack(106168328);
        IF_SETGRAPHIC();
        stack(379);
        stack(106168329);
        IF_SETGRAPHIC();
        stack(33109);
        stack(106168330);
        IF_SETGRAPHIC();
    };
    if ((int2 < (int3 * (5 + 8)))) {
        stack(2291);
        stack(106168351);
        IF_SETGRAPHIC();
        stack(378);
        stack(106168352);
        IF_SETGRAPHIC();
        stack(33106);
        stack(106168353);
        IF_SETGRAPHIC();
    } else {
        stack(2290);
        stack(106168351);
        IF_SETGRAPHIC();
        stack(379);
        stack(106168352);
        IF_SETGRAPHIC();
        stack(33105);
        stack(106168353);
        IF_SETGRAPHIC();
    };
    IF_SETSIZE(int2, 18, 0, 0, comp(1620, 24));
    return;
}