//
function script3497(int0: int, int1: boolean): void {
    var int2 = comp(-1, 65535);
    var string0 = "This slot is only available when a loadout includes a one-handed weapon.";
    switch (int0) {
        case 21: {
            int2 = comp(116, 138);
            break;
        }
        case 27: {
            int2 = comp(116, 87);
            break;
        }
        case 33: {
            int2 = comp(116, 104);
            break;
        }
        case 39: {
            int2 = comp(116, 133);
            break;
        }
    };
    if ((int2 != comp(-1, 65535))) {
        IF_SETHIDE(int1, int2);
        if ((int1 == false)) {
            IF_SETONMOUSEREPEAT(callback(script8799, string0, int2, -1), int2);
        } else {
            IF_SETONMOUSEREPEAT(callback(), int2);
        };
    };
    return;
}