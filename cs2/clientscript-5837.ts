//
function script5837(int0: component, int1: struct, int2: struct): void {
    if (((int0 == comp(-1, 65535)) || (int1 == -1 as struct))) {
        return;
    };
    IF_SETONVARTRANSMIT(callback(script9990, int0, int1, int2, 3814, 1), int0);
    var int3 = struct_getparam(int1, 3797);
    var int4 = struct_getparam(int1, 4405);
    if ((int4 != -1)) {
        var int1 = int4;
    };
    int1 = script9984(int1, int3);
    if ((int1 != -1 as struct)) {
        IF_SETTEXTFONT(struct_getparam(int1, 3810), int0);
        IF_SETCOLOUR(struct_getparam(int1, 3811), int0);
    };
    if ((int2 == -1 as struct)) {
        var int2 = 26419 as struct;
    };
    var int5 = struct_getparam(int2, 3915);
    var int6 = struct_getparam(int2, 4247);
    var int7 = struct_getparam(int2, 4248);
    if ((int5 == 0)) {
        int5 = (0 - int6);
    };
    if (((int7 == 0) || (int7 == 2))) {
        IF_SETPOSITION(int6, IF_GETY(int0), (2 - int7), 0, int0);
        IF_SETSIZE(((3 * int6) + int5), (IF_GETHEIGHT(IF_GETLAYER(int0)) - IF_GETHEIGHT(int0)), 1, 1, int0);
    };
    return;
}