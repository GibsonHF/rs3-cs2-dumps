//
function script13238(int0: number, int1: number): void {
    var int2 = -1;
    var string0 = "Item unavailable. Clicking apply will undo this change.";
    switch (int0) {
        case 0: {
            int2 = 120914066;
            break;
        }
        case 1: {
            int2 = 120914072;
            break;
        }
        case 2: {
            int2 = 120914078;
            break;
        }
        case 3: {
            int2 = 120914084;
            break;
        }
        case 4: {
            int2 = 120914090;
            break;
        }
        case 5: {
            int2 = 120914096;
            break;
        }
        case 6: {
            int2 = 120914102;
            break;
        }
        case 7: {
            int2 = 120914108;
            break;
        }
        case 8: {
            int2 = 120914114;
            break;
        }
        case 9: {
            int2 = 120914120;
            break;
        }
        case 10: {
            int2 = 120914126;
            break;
        }
        default: {
            return;
        }
    };
    IF_SETHIDE(int1, int2);
    if ((int1 == 0)) {
        IF_SETONMOUSEREPEAT(callback(script3876, string0, -2147483645, -2147483643), int2);
    };
    return;
}