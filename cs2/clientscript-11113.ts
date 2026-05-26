//
function script11113(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number, int8: number, int9: number, int10: number, int11: number, int12: number): void {
    if ((IF_FIND(comp(1598, 35)) == 1)) {
        cc_setparam(4894, int12);
    };
    script11114(1, int0, int6, int12, 104726538, 104726540, 104726539);
    script11114(2, int1, int7, int12, 104726535, 104726541, 104726536);
    script11114(3, int2, int8, int12, 104726548, 104726546, 104726549);
    script11114(4, int3, int9, int12, 104726553, 104726550, 104726554);
    script11114(5, int4, int10, int12, 104726556, 104726551, 104726557);
    script11114(6, int5, int11, int12, 104726560, 104726558, 104726561);
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