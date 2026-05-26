//
function script13237(int0: number, int1: number, int2: number, int3: number): void {
    var int4 = -1;
    var int5 = -1;
    var string0 = "null";
    switch (int0) {
        case 0: {
            int4 = 120913935;
            int5 = 120914065;
            break;
        }
        case 1: {
            int4 = 120913934;
            int5 = 120914071;
            break;
        }
        case 2: {
            int4 = 120913933;
            int5 = 120914077;
            break;
        }
        case 3: {
            int4 = 120913932;
            int5 = 120914083;
            break;
        }
        case 4: {
            int4 = 120913931;
            int5 = 120914089;
            break;
        }
        case 5: {
            int4 = 120913930;
            int5 = 120914095;
            break;
        }
        case 6: {
            int4 = 120913929;
            int5 = 120914101;
            break;
        }
        case 7: {
            int4 = 120913928;
            int5 = 120914107;
            break;
        }
        case 8: {
            int4 = 120913927;
            int5 = 120914113;
            break;
        }
        case 9: {
            int4 = 120913926;
            int5 = 120914119;
            break;
        }
        case 10: {
            int4 = 120913925;
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