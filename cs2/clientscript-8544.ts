//
function script8544(int0: int): void {
    if ((((int0 <= 0) || (int0 == 1019)) || (int0 == 23))) {
        return;
    };
    if ((IF_GETHIDE(script8586(int0)) == true)) {
        return;
    };
    if ((IF_GETHIDE(script8594(int0)) == false)) {
        script1042(script8595(int0), script8597(int0));
    };
    if ((IF_GETHIDE(script8590(int0)) == false)) {
        script8541(script8592(int0), script8593(int0));
    };
    var int1 = 0;
    var int2 = enum_getvalue(0, 9, script8602(int0), int1);
    var int3 = enum_getvalue(0, 9, script8603(int0), int1);
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    while ((int2 != comp(-1, 65535))) {
        int4 = 0;
        int5 = 0;
        int6 = 0;
        int7 = 0;
        while ((CC_FIND(int2, int4) == 1)) {
            if ((int4 == 0)) {
                int5 = CC_GETWIDTH();
            };
            if ((((int7 * 14) + 14) > IF_GETHEIGHT(int2))) {
                int6 = ((int6 + int5) + 4);
                int7 = 0;
            };
            CC_SETPOSITION((int6 + 2), (int7 * 14), 0, 0);
            if ((CC_FIND[1](int3, int4) == 1)) {
                CC_SETPOSITION[1]((CC_GETX() - 2), CC_GETY(), 0, 0);
            };
            int7 = (int7 + 1);
            int4 = (int4 + 1);
        };
        if ((int4 == 0)) {
            int2 = comp(-1, 65535);
        } else {
            int6 = ((int6 + int5) + 4);
            IF_SETSIZE(int6, 0, 0, 1, int2);
            IF_SETSIZE(int6, 0, 0, 1, int3);
            IF_SETPOSITION((IF_GETX(int2) + int6), 0, 0, 0, enum_getvalue(0, 9, script8602(int0), (int1 + 1)));
            int1 = (int1 + 1);
            int2 = enum_getvalue(0, 9, script8602(int0), int1);
            int3 = enum_getvalue(0, 9, script8603(int0), int1);
        };
    };
    script1068(script8599(int0), MAX(0, (int1 - 1)), int0);
    return;
}