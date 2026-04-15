//
function script8063(int0: int): void {
    var int1 = enum_getvalue(0, 9, 13326 as cs2enum, int0);
    var int2 = comp(-1, 65535);
    var int3 = -1;
    var int4 = -1;
    [int2, int3, int4] = script6348(int0);
    if ((int2 != comp(-1, 65535))) {
        IF_SETSIZE(0, 0, 0, 0, enum_getvalue(0, 9, 13327 as cs2enum, int0));
        script13874(enum_getvalue(0, 9, 13328 as cs2enum, int0), 16777215);
        script6571(enum_getvalue(0, 9, 13329 as cs2enum, int0), 16777215);
        IF_SETONTIMER(callback(script6369, int0, -2147483645), int1);
    } else {
        script6371(int0, int1);
    };
    return;
}