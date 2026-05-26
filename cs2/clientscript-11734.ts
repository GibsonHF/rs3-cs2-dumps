//
function script11734(int0: number, int1: number, int2: number, int3: number): void {
    CC_DELETEALL(int0);
    CC_DELETEALL(int1);
    CC_DELETEALL(int3);
    var int4 = ENUM_GETOUTPUTCOUNT(10255);
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    var string0 = "";
    var int8 = -1;
    var int9 = -1;
    var int10 = -1;
    var int11 = 0;
    while ((int5 < int4)) {
        int7 = enum_getvalue(0, 0, 10255 as cs2enum, int5);
        string0 = enum_getvalue(0, 36, 10257 as cs2enum, int7);
        if (((varclient_4986 == int7) || (varclient_4987 == int7))) {
            int11 = 1;
        };
        int6 = script10410(int0, int1, 28556, 0, (int5 * 50), IF_GETWIDTH(int0), 50, int6, int11, string0);
        if ((CC_FIND(int1, (int6 - 1)) == 1)) {
            CC_SETONRELEASE(callback(script11735, int7, int0));
        };
        int11 = 0;
        int5 = (int5 + 1);
    };
    IF_SETSCROLLSIZE(0, (int4 * 50), int2);
    script7791(int3, int2);
    return;
}