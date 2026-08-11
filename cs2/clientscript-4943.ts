//
function script4943(int0: number): void {
    var int1 = 0;
    var int2 = 0;
    var int3 = comp(1258, 246);  // clan_stronghold_main_decor:right_custom_layer
    if ((int0 == 0)) {
        if ((varbitplayer_6679 == 2)) {
            int1 = (IF_GETX(int3) + 12);
            int2 = 156;
        } else {
            int1 = (IF_GETX(int3) - 12);
            int2 = -150;
        };
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