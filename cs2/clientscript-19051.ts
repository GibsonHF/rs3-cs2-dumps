//
function script19051(int0: unknown_int): void {
    var int1 = comp(-1, 65535);
    switch (int0) {
        case 1: {
            int1 = comp(1014, 79);
            break;
        }
        case 2: {
            int1 = comp(1014, 80);
            break;
        }
        case 3: {
            int1 = comp(1014, 81);
            break;
        }
    };
    IF_SETMODELANIM(22645 as seq, int1);
    IF_SETONTIMER(callback(), int1);
    return;
}