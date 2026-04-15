//
function script1222(int0: int, int1: int, int2: int, int3: int): void {
    var int4 = script15709(1);
    var int5 = script10405(2);
    var int6 = struct_getparam(int5, 3505);
    var int7 = ((script8407(int6) + int2) - (int0 / 2));
    var int8 = ((script8408(int6) + int3) - (int1 / 2));
    var int9 = script10074();
    var int10 = IF_GETWIDTH(int9);
    var int11 = IF_GETHEIGHT(int9);
    int7 = MAX(int7, 0);
    int8 = MAX(int8, 0);
    int7 = MIN(int7, (int10 - int0));
    int8 = MIN(int8, (int11 - int1));
    IF_SETSIZE(int0, int1, 0, 0, int4);
    IF_SETPOSITION(int7, int8, 0, 0, int4);
    return;
}