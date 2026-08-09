//
function script13237(int0: number, int1: number, int2: number, int3: number): void {
    var int4 = comp(-1, 65535);
    var int5 = comp(-1, 65535);
    var string0 = "null";
    switch (int0) {
        case 0: {
            int4 = comp(1845, 15);
            int5 = comp(1845, 145);
            break;
        }
        case 1: {
            int4 = comp(1845, 14);
            int5 = comp(1845, 151);
            break;
        }
        case 2: {
            int4 = comp(1845, 13);
            int5 = comp(1845, 157);
            break;
        }
        case 3: {
            int4 = comp(1845, 12);
            int5 = comp(1845, 163);
            break;
        }
        case 4: {
            int4 = comp(1845, 11);
            int5 = comp(1845, 169);
            break;
        }
        case 5: {
            int4 = comp(1845, 10);
            int5 = comp(1845, 175);
            break;
        }
        case 6: {
            int4 = comp(1845, 9);
            int5 = comp(1845, 181);
            break;
        }
        case 7: {
            int4 = comp(1845, 8);
            int5 = comp(1845, 187);
            break;
        }
        case 8: {
            int4 = comp(1845, 7);
            int5 = comp(1845, 193);
            break;
        }
        case 9: {
            int4 = comp(1845, 6);
            int5 = comp(1845, 199);
            break;
        }
        case 10: {
            int4 = comp(1845, 5);
            int5 = comp(1845, 205);
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