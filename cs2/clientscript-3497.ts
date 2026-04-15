//
function script3497(int0: int, int1: boolean): void {
    var int2 = comp(-1, 65535);
    var string0 = "This slot is only available when a loadout includes a one-handed weapon.";
    if ((int0 == 17)) {
        int2 = comp(116, 57);
    } else if ((int0 == 23)) {
        int2 = comp(116, 70);
    } else if ((int0 == 29)) {
        int2 = comp(116, 83);
    };
    if ((int2 != comp(-1, 65535))) {
        IF_SETHIDE(int1, int2);
        if ((int1 == false)) {
            IF_SETONMOUSEREPEAT(callback(script8799, string0, int2, -1), int2);
            IF_SETONMOUSELEAVE(callback(script8805), int2);
        } else {
            IF_SETONMOUSEREPEAT(callback(), int2);
            IF_SETONMOUSELEAVE(callback(), int2);
        };
    };
    return;
}