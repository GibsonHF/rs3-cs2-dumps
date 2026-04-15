//
function script8291(int0: component, int1: int, int2: unknown_int): void {
    if ((script8874() == 0)) {
        return;
    };
    if ((script8313(int1) == 1)) {
        script8327(int1);
        return;
    };
    var int3 = script10405(int1);
    if ((int3 == -1 as struct)) {
        return;
    };
    var int4 = struct_getparam(int3, 3503);
    var int5 = struct_getparam(int3, 3504);
    var int6 = struct_getparam(int3, 3505);
    var int7 = struct_getparam(int3, 3506);
    var int8 = 0;
    var int9 = 0;
    if ((IF_FIND(int0) == 1)) {
        int8 = script6355();
        int9 = script6356();
    };
    IF_SETPOSITION(int8, int9, 0, 0, int4);
    IF_SETSIZE(IF_GETWIDTH(int0), IF_GETHEIGHT(int0), 0, 0, int4);
    script8361(int1);
    script8705(int1);
    var int10 = struct_getparam(21301 as struct, 3503);
    IF_SETHIDE(false, int4);
    IF_SETHIDE(true, int10);
    script8792();
    script6739(0);
    script8390(int1);
    script13842(int1);
    if (((int7 != comp(-1, 65535)) && (CC_FIND(int7, 0) == 1))) {
        CC_SETONDRAGCOMPLETE(callback(script8304, int1, int2));
        CC_DRAGPICKUP((IF_GETWIDTH(int7) / 2), (CC_GETHEIGHT() / 2));
        FORCE_INTERFACE_DRAG();
    };
    return;
}