//
function script7792(int0: inv, int1: obj, int2: int): void {
    var int3 = comp(-1, 65535);
    var int4 = -1;
    var int5 = script9249(int0);
    var int6 = int5;
    if ((int0 == 93 as inv)) {
        int3 = comp(107, 7);
    } else {
        int4 = enum_getreverseindex(39, 0, 1079 as cs2enum, int0, 0);
        if ((int4 != -1)) {
            int3 = enum_getvalue(0, 9, 1080 as cs2enum, int4);
        };
    };
    if ((OC_STACKABLE(int1) == 1)) {
        if ((CC_FIND[1](int3, script9250(int0, int1)) == 1)) {
            CC_SETOBJECT[1](CC_GETINVOBJECT[1](), (CC_GETINVCOUNT[1]() + int2));
        } else if (((int5 == -1) && (CC_FIND[1](int3, script9249(int0)) == 1))) {
            CC_SETOBJECT[1](int1, int2);
        } else if ((CC_FIND[1](int3, int5) == 1)) {
            CC_SETOBJECT[1](int1, int2);
        };
    } else if ((int2 == 1)) {
        if (((int5 == -1) && (CC_FIND[1](int3, script9249(int0)) == 1))) {
            CC_SETOBJECT[1](int1, int2);
        } else if ((CC_FIND[1](int3, int5) == 1)) {
            CC_SETOBJECT[1](int1, int2);
        };
    } else {
        int6 = script9249(int0);
        while (((int6 != -1) && (int2 > 0))) {
            if ((CC_FIND[1](int3, int6) == 1)) {
                CC_SETOBJECT[1](int1, 1);
            };
            int6 = script9251(int0, -1 as obj, (int6 + 1));
        };
    };
    return;
}