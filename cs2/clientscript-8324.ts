//
function script8324(int0: int): void {
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    var int5 = -1;
    var int6 = -1;
    var int7 = script8314(int0);
    var int8 = comp(-1, 65535);
    var int9 = script10405(int7);
    var int10 = comp(-1, 65535);
    if ((int7 != -1)) {
        int10 = struct_getparam(int9, 3503);
        if ((script12612(int9) == true)) {
            int8 = struct_getparam(int9, 3509);
            if ((int7 == int0)) {
                [int1, int2, int3, int4] = script8717(int0);
                IF_SETPOSITION(int1, int2, 0, 0, int10);
                IF_SETSIZE(int3, int4, 0, 0, int10);
                int7 = script8372(int8, int0);
                int6 = script8371(int8, (int7 + 1));
                if (((int6 == -1) && (int7 > 0))) {
                    int5 = script8371(int8, (int7 - 1));
                };
                if ((int6 != -1)) {
                    int7 = int6;
                } else if ((int5 != -1)) {
                    int7 = int5;
                } else {
                    int7 = -1;
                };
                if ((int7 != -1)) {
                    script8365(int0, int7);
                };
                int9 = script10405(int7);
            } else {
                int10 = struct_getparam(script10405(int0), 3503);
                [int1, int2, int3, int4] = script8717(int7);
                IF_SETPOSITION(int1, int2, 0, 0, int10);
                IF_SETSIZE(int3, int4, 0, 0, int10);
            };
            if ((int7 != -1)) {
                int8 = struct_getparam(int9, 3509);
                script8358(int7, script8372(int8, int0));
                script8370(int7, script8372(int8, int7));
                script8359(int7, script8374(int8), script8372(int8, int7));
                script8390(int7);
            } else {
                IF_SETHIDE(true, int10);
            };
        } else {
            IF_SETHIDE(true, int10);
        };
    };
    return;
}