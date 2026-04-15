//
function script11361(int0: int, int1: int, int2: component, int3: int, int4: unknown_int): void {
    var int5 = enum_getvalue(0, 73, 9013 as cs2enum, int1);
    var int6 = -1 as struct;
    if ((int3 > 0)) {
        int6 = enum_getvalue(0, 73, 9013 as cs2enum, script11356(((int3 - 9) + 1)));
    };
    if (((script11359(int5) == 1) || (script11359(int6) == 1))) {
        return;
    };
    var int7 = script11357();
    if ((int4 == 1)) {
        if (((int3 <= 0) && (int7 == -1))) {
            return;
        };
        if ((((varbitplayer_27734 == int1) || (varbitplayer_27735 == int1)) || (varbitplayer_27736 == int1))) {
            return;
        };
        if ((script11360(int1) == 0)) {
            return;
        };
        if ((CC_FIND(comp(1311, 586), (9 + int7)) == 1)) {
            if ((int2 == comp(-1, 65535))) {
                CC_SETGRAPHIC(struct_getparam(int5, 5060));
            } else if ((CC_FIND(int2, int3) == 1)) {
                CC_SETGRAPHIC(struct_getparam(int5, 5060));
            };
        };
    } else if (((CC_FIND(comp(1311, 586), int0) == 1) && (CC_GETGRAPHIC() != 18269 as graphic))) {
        CC_SETGRAPHIC(18269 as graphic);
    };
    return;
}