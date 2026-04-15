//
function script3719(int0: unknown_int): void {
    IF_SETHIDE(true, comp(1614, 68));
    IF_SETHIDE(true, comp(1614, 76));
    IF_SETHIDE(true, comp(1614, 84));
    IF_SETHIDE(true, comp(1614, 16));
    IF_SETHIDE(true, comp(1614, 25));
    IF_SETHIDE(true, comp(1614, 53));
    var int1 = comp(-1, 65535);
    var int2 = comp(-1, 65535);
    switch (int0) {
        case 1: {
            int1 = comp(1614, 68);
            int2 = comp(1614, 16);
            break;
        }
        case 2: {
            int1 = comp(1614, 76);
            int2 = comp(1614, 25);
            break;
        }
        case 3: {
            int1 = comp(1614, 84);
            int2 = comp(1614, 53);
            break;
        }
    };
    IF_SETHIDE(false, int1);
    IF_SETHIDE(false, int2);
    return;
}