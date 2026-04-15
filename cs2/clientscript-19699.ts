//
function script19699(int0: unknown_int, int1: int, int2: int, int3: int, int4: int, int5: int, int6: int, int7: int, int8: int, int9: int, int10: int): void {
    var string0 = script13084(int2, 4);
    var string1 = script13084(int1, 2);
    var string2 = script13084(int3, 4);
    var string3 = script13084(int4, 4);
    var string4 = script13084(int5, 4);
    var string5 = script13084(int6, 4);
    var string6 = script13084(int7, 4);
    var string7 = script13084(int8, 4);
    var string8 = script13084(int9, 4);
    var string9 = script13084(int10, 4);
    var int11 = enum_getvalue(0, 73, 7716 as cs2enum, int2);
    var string10 = "Unknown";
    if ((int11 != -1 as struct)) {
        string10 = struct_getparam(int11, 3493);
    };
    if ((int0 == 1)) {
        MES_TYPED(99, 0, `X ${string2} :: Y ${string3} ::  W ${string4} :: H ${string5} :: P ${string6} :: N ${string7} :: V ${string8} :: L ${string9} -- Window ${string1} :: ${string0} (${string10})`);
    } else {
        MES_TYPED(99, 0, `X ${string2} :: Y ${string3} ::  W ${string4} :: H ${string5} :: P ${string6} :: N ${string7} :: V ${string8} :: L ${string9} -- Window ${string0} (${string10})`);
    };
    return;
}