//
function script9628(int0: component, int1: int, int2: int): void {
    var int3 = -1;
    var int4 = -1 as struct;
    var int5 = -1;
    var int6 = -1;
    if ((CC_FIND(int0, int1) == 1)) {
        int3 = cc_getparam(3430);
        int4 = enum_getvalue(0, 73, 1805 as cs2enum, int3);
        if (((int4 != -1 as struct) && (enum_getreversecount(73, 8586 as cs2enum, int4) == 1))) {
            int5 = enum_getreverseindex(73, 41, 8586 as cs2enum, int4, 0);
        };
        int6 = script9635(int3);
        if (((int2 != -1) && (int2 != (1 - int6)))) {
            return;
        };
        if ((int6 == 0)) {
            CC_SETGRAPHIC(20326 as graphic);
            if ((int5 != -1)) {
                WORLDMAP_DISABLEELEMENTCATEGORY(int5, 0);
                WORLDMAP_FLASHELEMENTCATEGORY(int5);
            };
            if (((CC_FIND(int0, (int1 + 3)) == 1) && (CC_FIND[1](int0, (int1 + 2)) == 1))) {
                if ((int2 != -1)) {
                    CC_SETCOLOUR[1](script10495(4));
                };
                CC_SETONMOUSELEAVE(callback(script9624, int0, CC_GETID[1](), script10495(4)));
            };
        } else if ((int6 == 1)) {
            CC_SETGRAPHIC(20268 as graphic);
            if ((int5 != -1)) {
                WORLDMAP_DISABLEELEMENTCATEGORY(int5, 1);
            };
            if (((CC_FIND(int0, (int1 + 3)) == 1) && (CC_FIND[1](int0, (int1 + 2)) == 1))) {
                if ((int2 != -1)) {
                    CC_SETCOLOUR[1](script10495(5));
                };
                CC_SETONMOUSELEAVE(callback(script9624, int0, CC_GETID[1](), script10495(5)));
            };
        };
        script9636(int3);
    };
    return;
}