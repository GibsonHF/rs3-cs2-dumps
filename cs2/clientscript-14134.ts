//
function script14134(int0: cs2enum, int1: int, int2: int, int3: int, int4: int): void {
    var int5 = enum_getvalue(0, 73, int0, int1);
    if ((int5 == -1 as struct)) {
        return;
    };
    var int6 = struct_getparam(int5, 6980);
    if ((int6 == -1 as obj)) {
        return;
    };
    var int7 = script7090(int6);
    if ((struct_getparam(int5, 6981) == true)) {
        int6 = script14090(int6);
    };
    var string0 = OC_NAME(int6);
    var string1 = "<col=B8D1D1>";
    var int8 = 0;
    if ((varplayer_7863 == int5)) {
        int8 = 1;
    };
    if ((OC_MEMBERS(int6) == 1)) {
        string1 = "<col=F8D56B>";
    };
    if ((int7 == 1)) {
        script14001(comp(1944, 6), 35508 as struct, (int4 - 11), 0, int8, 1);
    } else {
        script14001(comp(1944, 6), 35515 as struct, (int4 - 11), 0, int8, 1);
        string0 = `${string0} - Not stored`;
    };
    if ((CC_FIND(comp(1944, 7), (int3 - 1)) == 1)) {
        CC_SETOP(1, `View ${string1}${OC_NAME(int6)}</col>`);
        if (((struct_getparam(int5, 7765) == 1) && (int7 == 1))) {
            CC_SETOP(2, `Remove ${string1}${OC_NAME(int6)}</col>`);
        } else if (((int6 == 2574 as obj) && (int7 == 1))) {
            CC_SETOP(2, `Look through ${string1}${OC_NAME(int6)}</col>`);
        };
        CC_SETONOP(callback(script14099, int5, int6, int7, int2, (int2 - (14 + 20)), -2147483644));
    };
    if ((CC_FIND(comp(1944, 6), int4) == 1)) {
        CC_SETOBJECT(int6, -1);
        CC_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643));
        if (((int7 == 0) || ((MAP_MEMBERS() == 0) && (OC_MEMBERS(int6) == 1)))) {
            CC_SETCOLOUR(5526612);
        } else {
            CC_SETCOLOUR(16777215);
        };
    };
    return;
}