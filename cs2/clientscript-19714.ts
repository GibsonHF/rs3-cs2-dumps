//
function script19714(int0: unknown_int, int1: struct, int2: dbrow, int3: cs2enum): void {
    var int4 = ENUM_GETOUTPUTCOUNT(int3);
    if ((int4 <= 1)) {
        return;
    };
    var int5 = -1;
    while ((++int5 < int4)) {
        script7852(comp(1495, 24), int5, 0, 0, 1, 1, 25, 25, 0, 0, 4479 as dbrow, inttostring((int5 + 1), 10));
        CC_BUTTON_SETCANTOGGLE(true);
        if ((int5 == 0)) {
            CC_BUTTON_SETTOGGLED(true);
        };
        CC_SETOP(1, "Select");
        CC_SETONOP(callback(script19716, int0, int1, int2, int5, int4));
    };
    IF_SETHIDE(false, comp(1495, 24));
    return;
}