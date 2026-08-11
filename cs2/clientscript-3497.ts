//
function script3497(int0: number, int1: number): void {
    var int2 = comp(-1, 65535);
    var string0 = "This slot is only available when a loadout includes a one-handed weapon.";
    switch (int0) {
        case 21: {
            int2 = comp(116, 139);  // rand_bound_interface:setupa_6_blocked
            break;
        }
        case 27: {
            int2 = comp(116, 88);  // rand_bound_interface:setupb_6_blocked
            break;
        }
        case 33: {
            int2 = comp(116, 105);  // rand_bound_interface:setupc_6_blocked
            break;
        }
        case 39: {
            int2 = comp(116, 134);  // rand_bound_interface:setupd_6_blocked
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