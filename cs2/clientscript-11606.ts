//
function script11606(int0: component, int1: component, int2: struct, int3: int, int4: int, int5: int, int6: int, string0: string, string1: string, string2: string): int {
    if (((int0 == comp(-1, 65535)) || (int2 == -1 as struct))) {
        return int5;
    };
    var int7 = struct_getparam(int2, 4405);
    if ((int7 != -1 as struct)) {
        var int2 = int7;
    };
    var int8 = script9984(int2, int6);
    if (((int2 == -1 as struct) || (int8 == -1 as struct))) {
        return int5;
    };
    var int5 = MAX(0, int5);
    var int9 = struct_getparam(int8, 3808);
    var int10 = struct_getparam(int8, 3807);
    CC_CREATE(int0, 5, IF_GETNEXTSUBID(int0));
    CC_SETSIZE(int9, int10, 0, 0);
    CC_SETPOSITION(int3, int4, 0, 0);
    CC_SETGRAPHIC(struct_getparam(int8, 3909));
    CC_SETCOLOUR(struct_getparam(int8, 7448));
    CC_SETTRANS(struct_getparam(int8, 6120));
    script11628(int2, int6, CC_GETID(), CC_GETID(), 0, int9, int10);
    script11627(int1, int6, int5, int3, int4, int9, int10, string0, string1, string2);
    return (int5 + 1);
}