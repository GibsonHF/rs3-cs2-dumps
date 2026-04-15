//
function script13237(int0: int, int1: boolean, int2: unknown_int, int3: int): void {
    var int4 = comp(-1, 65535);
    var int5 = -1;
    var string0 = "null";
    switch (int0) {
        case 0: {
            int4 = comp(1845, 15);
            int5 = 120914065;
            break;
        }
        case 1: {
            int4 = comp(1845, 14);
            int5 = 120914071;
            break;
        }
        case 2: {
            int4 = comp(1845, 13);
            int5 = 120914077;
            break;
        }
        case 3: {
            int4 = comp(1845, 12);
            int5 = 120914083;
            break;
        }
        case 4: {
            int4 = comp(1845, 11);
            int5 = 120914089;
            break;
        }
        case 5: {
            int4 = comp(1845, 10);
            int5 = 120914095;
            break;
        }
        case 6: {
            int4 = comp(1845, 9);
            int5 = 120914101;
            break;
        }
        case 7: {
            int4 = comp(1845, 8);
            int5 = 120914107;
            break;
        }
        case 8: {
            int4 = comp(1845, 7);
            int5 = 120914113;
            break;
        }
        case 9: {
            int4 = comp(1845, 6);
            int5 = 120914119;
            break;
        }
        case 10: {
            int4 = comp(1845, 5);
            int5 = 120914125;
            break;
        }
        default: {
            return;
        }
    };
    IF_SETHIDE(int1, int4);
    IF_SETPOSITION(IF_GETX(int4), (int3 + 2), 0, 0, int4);
    if ((int2 == 2)) {
        string0 = "Redo change";
    } else if ((int2 == 1)) {
        string0 = "Undo change";
    } else {
        return;
    };
    IF_SETONMOUSEREPEAT(callback(script3876, string0, -2147483645, -2147483643), int5);
    return;
}