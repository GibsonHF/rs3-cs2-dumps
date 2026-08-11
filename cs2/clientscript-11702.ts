//
function script11702(int0: number, int1: number): void {
    var int2 = comp(-1, 65535);
    var int3 = -1;
    switch (varbitplayer_19000) {
        case 1: {
            int2 = comp(105, 222);  // stockmarket:offertype_text ?
            int3 = 6881503;
            break;
        }
        case 4: {
            int2 = comp(707, 6);  // stock_favourites:favourites_frame ?
            int3 = 46333959;
            break;
        }
    };
    if (((int2 == comp(-1, 65535)) && (int3 == -1))) {
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