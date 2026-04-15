//
function script13238(int0: int, int1: boolean): void {
    var int2 = comp(-1, 65535);
    var string0 = "Item unavailable. Clicking apply will undo this change.";
    switch (int0) {
        case 0: {
            int2 = comp(1845, 146);
            break;
        }
        case 1: {
            int2 = comp(1845, 152);
            break;
        }
        case 2: {
            int2 = comp(1845, 158);
            break;
        }
        case 3: {
            int2 = comp(1845, 164);
            break;
        }
        case 4: {
            int2 = comp(1845, 170);
            break;
        }
        case 5: {
            int2 = comp(1845, 176);
            break;
        }
        case 6: {
            int2 = comp(1845, 182);
            break;
        }
        case 7: {
            int2 = comp(1845, 188);
            break;
        }
        case 8: {
            int2 = comp(1845, 194);
            break;
        }
        case 9: {
            int2 = comp(1845, 200);
            break;
        }
        case 10: {
            int2 = comp(1845, 206);
            break;
        }
        default: {
            return;
        }
    };
    IF_SETHIDE(int1, int2);
    if ((int1 == false)) {
        IF_SETONMOUSEREPEAT(callback(script3876, string0, -2147483645, -2147483643), int2);
    };
    return;
}