//
function script15796(int0: int, int1: int, int2: int, int3: int, int4: cs2enum, int5: int, int6: component): void {
    if ((int4 == -1 as cs2enum)) {
        return;
    };
    var int7 = 0;
    var int8 = script15795(int4, int6);
    var int9 = 0;
    var int10 = 0;
    var int11 = comp(-1, 65535);
    if (((int2 != 0) || (int3 != 0))) {
        int9 = (IF_GETX(int6) + int2);
        int10 = (IF_GETY(int6) + int3);
        int11 = comp(845, 4);
        if ((((int2 < 0) && (int9 < IF_GETX(int11))) || ((int2 > 0) && (int9 > ((IF_GETX(int11) + IF_GETWIDTH(int11)) - IF_GETWIDTH(int6)))))) {
            var int2 = (0 - int2);
            int9 = (IF_GETX(int6) + int2);
            if ((int8 == 0)) {
                int7 = 1;
            };
        };
        if ((((int3 < 0) && (int10 < IF_GETY(int11))) || ((int3 > 0) && (int10 > ((IF_GETY(int11) + IF_GETHEIGHT(int11)) - IF_GETHEIGHT(int6)))))) {
            var int3 = (0 - int3);
            int10 = (IF_GETY(int6) + int3);
            if ((int8 == 0)) {
                int7 = 1;
            };
        };
        IF_SETPOSITION(int9, int10, 0, 0, int6);
    };
    var int12 = 0;
    var int13 = -1 as graphic;
    var int14 = 0;
    var int15 = 0;
    if ((((int8 == 1) && (MODULO(CLIENTCLOCK(), 15) == 0)) || (int7 == 1))) {
        [int14, int15] = script15794(int4, int6);
        if (((int14 != 0) || (int15 != 0))) {
            if (((int14 == -999) && (int14 == -999))) {
                int2 = 0;
                int3 = 0;
            } else {
                int2 = int14;
                int3 = int15;
            };
        };
        int12 = ENUM_GETOUTPUTCOUNT(int4);
        if ((int5 > int12)) {
            var int5 = int12;
        } else if ((int5 < 0)) {
            int5 = 0;
        };
        int13 = enum_getvalue(0, 23, int4, int5);
        if ((int13 == -1 as graphic)) {
            IF_SETPOSITION(int0, int1, 0, 0, int6);
            [int2, int3] = script15793(int4);
        };
        stack(int13);
        stack(int6);
        IF_SETGRAPHIC();
        if ((int5 >= int12)) {
            int5 = 0;
        } else {
            int5 = (int5 + 1);
        };
    };
    IF_SETONTIMER(callback(script15796, int0, int1, int2, int3, int4, int5, int6), int6);
    return;
}