//
function script11031(int0: number, int1: number): void {
    var int2 = -1;
    var int3 = -1;
    var int4 = 0;
    switch (int1) {
        case 1: {
            int2 = 106889238;
            int3 = 106889248;
            int4 = varbitplayer_28189;
            break;
        }
        case 2: {
            int2 = 106889254;
            int3 = 106889233;
            int4 = varbitplayer_28190;
            break;
        }
        case 3: {
            int2 = 106889258;
            int3 = 106889299;
            int4 = varbitplayer_28191;
            break;
        }
        case 4: {
            int2 = 106889291;
            int3 = 106889308;
            int4 = varbitplayer_28192;
            break;
        }
        default: {
            return;
        }
    };
    var int5 = (int4 / 10);
    var int6 = (int5 + 133);
    if ((int4 >= 750)) {
        int6 = (int6 + 4);
    };
    IF_SETSIZE(int6, int6, 0, 0, int2);
    IF_SETTEXT(inttostring(int4, 10), int3);
    return;
}