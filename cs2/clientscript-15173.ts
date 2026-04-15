//
function script15173(int0: dbrow, int1: int, int2: int, int3: unknown_int): void {
    var int4 = -1 as obj;
    var int5 = 0;
    var int6 = 0;
    var int7 = false;
    [int4, int5, int6, int7] = script15127(int0, int1);
    var int8 = comp(-1, 65535);
    var int9 = comp(-1, 65535);
    var int10 = comp(-1, 65535);
    var int11 = comp(-1, 65535);
    var int12 = comp(-1, 65535);
    var int13 = comp(-1, 65535);
    [int8, int9, int10, int11, int12, int13] = script15135(int1);
    var int14 = 0;
    IF_SETOBJECT(int4, int6, int11);
    IF_SETOPBASE(OC_NAME(int4), int13);
    if ((int3 == 1)) {
        if ((int7 == true)) {
            int14 = 100;
        } else if ((int5 == 0)) {
            int14 = 0;
        } else {
            int14 = SCALE(int5, int6, 100);
            int14 = script12377(int14, 0, 100);
        };
    } else {
        int14 = 0;
    };
    switch (int1) {
        case 0: {
            varbitclient_47751 = int14;
            break;
        }
        case 1: {
            varbitclient_47752 = int14;
            break;
        }
        case 2: {
            varbitclient_47753 = int14;
            break;
        }
        case 3: {
            varbitclient_47754 = int14;
            break;
        }
        case 4: {
            varbitclient_47755 = int14;
            break;
        }
        case 5: {
            varbitclient_47756 = int14;
            break;
        }
        case 6: {
            varbitclient_47757 = int14;
            break;
        }
    };
    script4542(int14, int9, int10);
    IF_SETPOSITION(script15175(int1, int2), 1, 0, int8);
    IF_SETHIDE(false, int8);
    return;
}