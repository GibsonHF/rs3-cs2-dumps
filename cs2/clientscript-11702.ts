//
function script11702(int0: int, int1: int): void {
    var int2 = comp(-1, 65535);
    var int3 = comp(-1, 65535);
    switch (varbitplayer_19000) {
        case 1: {
            int2 = comp(105, 340);
            int3 = comp(105, 344);
            break;
        }
        case 4: {
            int2 = comp(707, 20);
            int3 = comp(707, 24);
            break;
        }
    };
    if (((int2 == comp(-1, 65535)) && (int3 == comp(-1, 65535)))) {
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