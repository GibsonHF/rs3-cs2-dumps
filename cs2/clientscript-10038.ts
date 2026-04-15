//
function script10038(int0: int, int1: unknown_int, int2: unknown_int): void {
    var int3 = comp(-1, 65535);
    var int4 = comp(-1, 65535);
    var int5 = comp(-1, 65535);
    var int6 = comp(-1, 65535);
    var int7 = -1;
    var int8 = -1 as dbrow;
    switch (int0) {
        case 0: {
            int8 = 13088 as dbrow;
            break;
        }
        case 1: {
            int8 = 13087 as dbrow;
            break;
        }
        case 2: {
            int8 = 13089 as dbrow;
            break;
        }
        default: {
            script12478("Unexpected slot type when setting the secondary slots in the lobby.");
            return;
        }
    };
    if ((int2 == -1)) {
        switch (int0) {
            case 0: {
                int8 = 13088 as dbrow;
                break;
            }
            case 1: {
                int8 = 13087 as dbrow;
                break;
            }
            case 2: {
                int8 = 13089 as dbrow;
                break;
            }
            default: {
                script12478("Unexpected slot type when setting the secondary slots in the lobby.");
                return;
            }
        };
        if ((script18461(int8) == 1)) {
            script18464(int8);
        } else {
            if ((CC_FIND(dbrow_getfield(int8, 733184, 0), 0) == 1)) {
                CC_DELETE();
            };
            script10038(int0, 0, 0);
        };
        script10051();
        return;
    };
    switch (int0) {
        case 0: {
            IF_SETONVARCTRANSMIT(callback(script10037, 0, varclient_4263, 4263, 1), 59441223);
            int3 = 59441230;
            int4 = 59441224;
            int5 = 59441247;
            int6 = 59441248;
            int7 = 2;
            break;
        }
        case 1: {
            IF_SETONVARCTRANSMIT(callback(script10037, 1, varclient_4264, 4264, 1), 59441196);
            int3 = 59441202;
            int4 = 59441197;
            int5 = 59441219;
            int6 = 59441220;
            break;
        }
        case 2: {
            IF_SETONVARCTRANSMIT(callback(script10037, 2, varclient_4265, 4265, 1), 59441249);
            int3 = 59441256;
            int4 = 59441250;
            int5 = 59441273;
            int6 = 59441274;
            int7 = 2;
            break;
        }
        default: {
            return;
        }
    };
    script4161(int6, 255);
    IF_SETONTIMER(callback(), int6);
    IF_SETHIDE(1, int6);
    IF_SETOP(1, "", int3);
    IF_SETONOP(callback(), int3);
    IF_SETONMOUSEREPEAT(callback(), int3);
    IF_SETONCLICK(callback(), int3);
    switch (int7) {
        case 0: {
            script10046(int3, int4, int5, int6, int0);
            break;
        }
        case 1: {
            script10041(int3, int4, int5, int6, int0);
            break;
        }
        case 2: {
            script10045(int3, int4, int5, int6, int0);
            break;
        }
        case -1: {
            script10044(int3, int4, int5, int6, int0);
            break;
        }
    };
    if ((int0 == 0)) {
        CC_DELETEALL(int5);
    };
    script10051();
    return;
}