//
function script3497(int0: number, int1: number): void {
    var int2 = -1;
    var string0 = "This slot is only available when a loadout includes a one-handed weapon.";
    switch (int0) {
        case 21: {
            int2 = 7602315;
            break;
        }
        case 27: {
            int2 = 7602264;
            break;
        }
        case 33: {
            int2 = 7602281;
            break;
        }
        case 39: {
            int2 = 7602310;
            break;
        }
    };
    if ((int2 != -1)) {
        IF_SETHIDE(int1, int2);
        if ((int1 == 0)) {
            IF_SETONMOUSEREPEAT(callback(script8799, string0, int2, -1), int2);
        } else {
            IF_SETONMOUSEREPEAT(callback(), int2);
        };
    };
    return;
}