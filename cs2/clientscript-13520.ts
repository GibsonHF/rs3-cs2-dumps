//
function script13520(int0: component, int1: unknown_int): void {
    if ((int1 == 3)) {
        return;
    };
    if ((int1 == 2)) {
        script14062((1 - varbitplayer_40059));
        script14061((1 - varbitplayer_40059));
        return;
    };
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    [int2, int3] = script8138(1031);
    var int5 = IF_GETWIDTH(comp(1639, 3));
    var int6 = struct_getparam(31708, 3484);
    var int7 = struct_getparam(31708, 3485);
    var int8 = 5;
    var int9 = ((int6 - 60) / MAX(int8, 1));
    var int10 = ((int7 - 30) / MAX(int8, 1));
    if ((int3 == -1)) {
        int3 = 0;
    };
    if ((int2 == -1)) {
        int2 = int4;
    };
    if ((int5 <= 60)) {
        int4 = 1;
        IF_SETOP(1, "Shrink", int0);
        IF_SETONTIMER(callback(script13521, int6, int9, int10, 1, int2, int4, int3), 107413507);
    } else if ((int5 >= int6)) {
        IF_SETOP(1, "Expand", int0);
        IF_SETONTIMER(callback(script13521, 60, int9, int10, -1, int2, int4, int3), 107413507);
    };
    return;
}