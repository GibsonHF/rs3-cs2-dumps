//
function script12364(): void {
    var int0 = IF_GETWIDTH(114360324);
    var int1 = (IF_GETWIDTH(114360321) - 2);
    var int2 = 0;
    var int3 = (int1 / 32);
    var int4 = SCALE(int1, 32, script12362(varplayer_6200));
    if ((int0 < int4)) {
        int2 = MIN((int0 + 2), int4);
    } else if ((int0 > int4)) {
        int2 = MAX((int0 - 2), int4);
    } else {
        IF_SETONTIMER(callback(), 114360324);
        return;
    };
    if ((int2 == 0)) {
        int2 = 1;
        IF_SETONTIMER(callback(), 114360324);
    };
    IF_SETSIZE(int2, 0, 0, 1, 114360324);
    return;
}