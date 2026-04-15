//
function script3351(int0: int, int1: int, int2: component, int3: int): [int, int] {
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    var int8 = IF_GETWIDTH(comp(1322, 18));
    var int9 = IF_GETHEIGHT(comp(1322, 18));
    int6 = int8;
    if ((varclient_6403 != 0)) {
        [int4, int5, int6, int7] = UNKNOWN_COMMAND_126();
    };
    var int10 = 0;
    var int11 = 0;
    var int12 = 0;
    var int13 = 0;
    var int14 = 0;
    var int15 = 0;
    var int16 = 0;
    var int17 = 0;
    [int14, int15, int16, int17] = script2956();
    var int18 = (int4 + int14);
    var int19 = (((int9 - int1) - int17) - int5);
    if ((CC_FIND(int2, int3) == 1)) {
        int10 = cc_getparam(6122);
        int11 = cc_getparam(6123);
        int12 = cc_getparam(6124);
        int13 = cc_getparam(7539);
    };
    var int20 = 1;
    int20 = script3352(int12, int10, int13, int11, int18, int0, int19, int1);
    if ((int20 == 0)) {
        return [int18, int19];
    };
    int18 = (((int6 + int4) - int0) - int16);
    int20 = script3352(int12, int10, int13, int11, int18, int0, int19, int1);
    if ((int20 == 0)) {
        return [int18, int19];
    };
    int19 = (int5 + int15);
    int18 = (int4 + int14);
    int20 = script3352(int12, int10, int13, int11, int18, int0, int19, int1);
    if ((int20 == 0)) {
        return [int18, int19];
    };
    int18 = (((int6 + int4) - int0) - int16);
    int20 = script3352(int12, int10, int13, int11, int18, int0, int19, int1);
    if ((int20 == 0)) {
        return [int18, int19];
    };
    int19 = (((int9 - int1) - int17) - int5);
    return [int18, int19];
}