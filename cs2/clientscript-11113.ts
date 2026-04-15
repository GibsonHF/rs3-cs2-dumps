//
function script11113(int0: unknown_int, int1: unknown_int, int2: unknown_int, int3: unknown_int, int4: unknown_int, int5: unknown_int, int6: int, int7: int, int8: int, int9: int, int10: int, int11: int, int12: int): void {
    if ((IF_FIND(comp(1598, 35)) == 1)) {
        cc_setparam(4894, int12);
    };
    script11114(1, int0, int6, int12, comp(1598, 10), comp(1598, 12), comp(1598, 11));
    script11114(2, int1, int7, int12, comp(1598, 7), comp(1598, 13), comp(1598, 8));
    script11114(3, int2, int8, int12, comp(1598, 20), comp(1598, 18), comp(1598, 21));
    script11114(4, int3, int9, int12, comp(1598, 25), comp(1598, 22), comp(1598, 26));
    script11114(5, int4, int10, int12, comp(1598, 28), comp(1598, 23), comp(1598, 29));
    script11114(6, int5, int11, int12, comp(1598, 32), comp(1598, 30), comp(1598, 33));
    script11116(int12);
    switch (int12) {
        case 1:
        case 2: {
            IF_SETTEXT("Calibrating", comp(1598, 4));
            IF_SETHIDE(true, comp(1598, 39));
            IF_SETHIDE(true, comp(1598, 37));
            break;
        }
        case 3: {
            IF_SETTEXT("Machine is empty", comp(1598, 4));
            IF_SETHIDE(false, comp(1598, 39));
            IF_SETHIDE(false, comp(1598, 37));
            IF_SETHIDE(false, comp(1598, 58));
            break;
        }
        case 4: {
            IF_SETTEXT("Current attributes", comp(1598, 4));
            IF_SETHIDE(false, comp(1598, 39));
            IF_SETHIDE(false, comp(1598, 37));
            IF_SETHIDE(true, comp(1598, 58));
            break;
        }
    };
    if (((int12 == 2) || (int12 == 4))) {
        IF_SETHIDE(true, comp(1598, 58));
        IF_SETTRANS(0, comp(1598, 60));
    } else {
        IF_SETHIDE(false, comp(1598, 58));
        IF_SETTRANS(196, comp(1598, 60));
    };
    return;
}