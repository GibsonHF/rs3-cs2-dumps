//
function script18116(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number): void {
    if ((varclient_1963 == 0)) {
        return;
    };
    var int8 = struct_getparam(int0, 5166);
    var int9 = enum_getvalue(0, 32, int8, int1);
    var int10 = 0;
    if (((CC_FIND(85918039, 0) == 1) && (int6 == 0))) {
        var int5 = CC_GETMODELANGLE_Y();
        int10 = CC_GETMODELZOOM();
        var int3 = CC_GETMODELYOF();
    } else {
        int10 = (300 + int2);
        int3 = (100 + int3);
    };
    if ((int7 == 1)) {
        CC_DELETEALL(85918039);
    };
    CC_CREATE(85918039, 6, IF_GETNEXTSUBID(85918039));
    CC_SETSIZE(0, 0, 1, 1);
    CC_SETPOSITION(0, 0, 1, 1);
    CC_SETNPCMODEL(int9);
    CC_SETMODELANGLE(0, int3, int4, int5, 10, int10);
    CC_SETMODELANIM(struct_getparam(int0, 5167));
    IF_SETHIDE(1, 85918165);
    var int11 = struct_getparam(int0, 6126);
    script18117(ENUM_GETOUTPUTCOUNT(int11), int1);
    return;
}