//
function script14110(int0: cs2enum, int1: int, int2: int, int3: int, int4: int, int5: int, int6: int): [int, unknown_int] {
    var int7 = enum_getvalue(0, 73, int0, int2);
    if ((int7 == -1 as struct)) {
        return [int5, 0];
    };
    var int8 = struct_getparam(int7, 6980);
    if ((int8 == -1 as obj)) {
        return [int5, 0];
    };
    var int9 = script7090(int8);
    if ((struct_getparam(int7, 6981) == true)) {
        int8 = script14090(int8);
    };
    var string0 = OC_NAME(int8);
    if ((int9 == 1)) {
        var int5 = script10410(comp(1944, 6), comp(1944, 7), 35508 as struct, int3, int4, 40, 40, int5, false, "");
    } else {
        int5 = script10410(comp(1944, 6), comp(1944, 7), 35515 as struct, int3, int4, 40, 40, int5, false, "");
        string0 = `${string0} - Not stored`;
    };
    var string1 = "<col=B8D1D1>";
    if ((OC_MEMBERS(int8) == 1)) {
        string1 = "<col=F8D56B>";
    };
    CC_SETOP(1, `View ${string1}${OC_NAME(int8)}</col>`);
    CC_SETONOP(callback(script14099, int7, int8, int9, int4, (int4 - (14 + 20)), -2147483644));
    if (((struct_getparam(int7, 7765) == 1) && (int9 == 1))) {
        CC_SETOP(2, `Remove ${string1}${OC_NAME(int8)}</col>`);
    } else if (((int8 == 2574 as obj) && (int9 == 1))) {
        CC_SETOP(2, `Look through ${string1}${OC_NAME(int8)}</col>`);
    } else if (((int8 == 53443 as obj) && (int9 == 1))) {
        CC_SETOP(2, `Inspect ${string1}${OC_NAME(int8)}</col>`);
    };
    var int10 = IF_GETNEXTSUBID(comp(1944, 6));
    CC_SETONVARTRANSMIT(callback(script14134, int0, int2, int4, int5, int10, 7863, 1103, 1102, 5699, 5987, 1107, 6));
    CC_CREATE(127401990, 5, int10);
    CC_SETPOSITION((int3 + 4), (int4 + 4), 0, 0);
    CC_SETSIZE(32, 32, 0, 0);
    CC_SETOBJECT(int8, -1);
    CC_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643));
    CC_SETOP(1, "Info");
    if (((int9 == 0) || ((MAP_MEMBERS() == 0) && (OC_MEMBERS(int8) == 1)))) {
        CC_SETCOLOUR(5526612);
    } else {
        CC_SETCOLOUR(16777215);
    };
    return [int5, int9];
}