//
function script11064(int0: unknown_int, int1: unknown_int, string0: string): void {
    var int2 = comp(-1, 65535);
    switch (int0) {
        case 104333334: {
            int2 = comp(1592, 19);
            break;
        }
        case 104333335: {
            int2 = comp(1592, 20);
            break;
        }
        case 104333336: {
            int2 = comp(1592, 21);
            break;
        }
    };
    if ((int1 == 0)) {
        IF_SETHIDE(false, int2);
    } else {
        IF_SETHIDE(true, int2);
    };
    IF_SETTEXT(string0, comp(1592, 16));
    return;
}