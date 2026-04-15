//
function script4943(int0: unknown_int): void {
    var int1 = 0;
    var int2 = 0;
    var int3 = comp(1258, 246);
    if (((int0 == 0) && (varbitplayer_6679 == 2))) {
        int1 = (IF_GETX(int3) + 12);
        int2 = 156;
    } else {
        int1 = (IF_GETX(int3) - 12);
        int2 = -150;
    };
    int1 = MAX(int1, -150);
    int1 = MIN(int1, 156);
    IF_SETPOSITION(int1, IF_GETY(int3), 0, 0, int3);
    if ((int1 == int2)) {
        IF_SETONTIMER(callback(), int3);
        script5220();
    };
    return;
}