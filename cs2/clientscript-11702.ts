//
function script11702(int0: number, int1: number): void {
    var int2 = -1;
    var int3 = -1;
    switch (varbitplayer_19000) {
        case 1: {
            int2 = 6881620;
            int3 = 6881624;
            break;
        }
        case 4: {
            int2 = 46333972;
            int3 = 46333976;
            break;
        }
    };
    if (((int2 == -1) && (int3 == -1))) {
        return;
    };
    IF_SETSCROLLSIZE(0, 0, int2);
    if ((int0 >= IF_GETHEIGHT(int2))) {
        IF_SETSCROLLSIZE(0, int0, int2);
    };
    IF_SETSCROLLPOS(0, int1, int2);
    script7791(int3, int2);
    return;
}