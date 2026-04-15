//
function script15165(int0: dbrow, int1: component, int2: component, int3: dbrow, int4: int, int5: int, int6: unknown_int): int {
    if ((int3 == -1 as dbrow)) {
        return int4;
    };
    if ((DB_GETROWTABLE(int3) != 106)) {
        return int4;
    };
    var int7 = dbrow_getfield(int3, 434256, 0);
    var int8 = 0;
    var int9 = false;
    var string0 = "";
    [int8, string0] = script15139(int3, int0);
    if ((int8 != 1)) {
        int9 = true;
    };
    if ((int6 == 1)) {
        var int4 = script15192(int1, int2, 28556 as struct, 5, int5, 250, 50, IF_GETNEXTSUBID(int2), int9, script15122(int3), 1, 35);
    } else {
        int4 = script15191(int1, int2, 28556 as struct, 5, int5, 250, 50, IF_GETNEXTSUBID(int2), int9, script15122(int3), 35);
    };
    var int10 = -1 as obj;
    var int11 = -1 as graphic;
    [int10, int11] = script15126(int3);
    CC_CREATE(int1, 5, IF_GETNEXTSUBID(int1));
    var int12 = ((50 / 2) - (32 / 2));
    if (((int10 != -1 as obj) || (int11 != -1 as graphic))) {
        if ((int10 != -1 as obj)) {
            CC_SETOBJECT_NONUM(int10, 0);
        } else {
            CC_SETGRAPHIC(int11);
        };
        CC_SETSIZE(36, 32, 0, 0);
        CC_SETPOSITION(10, (int5 + int12), 0, 0);
    } else {
        CC_SETHIDE(true);
    };
    CC_CREATE(int1, 5, IF_GETNEXTSUBID(int1));
    var string1 = "This can be crafted multiple times.";
    var int13 = 32;
    if (((int9 == true) || (int7 == true))) {
        CC_SETSIZE(int13, int13, 0, 0);
        CC_SETPOSITION((250 - int13), (int5 + int12), 0, 0);
        if ((int9 == true)) {
            switch (int8) {
                case 3: {
                    CC_SETGRAPHIC(9870 as graphic);
                    break;
                }
                default: {
                    CC_SETGRAPHIC(11556 as graphic);
                    break;
                }
            };
            if (((CC_FIND(int1, (IF_GETNEXTSUBID(int1) - 3)) == 1) && (STRING_LENGTH(string0) > 0))) {
                CC_SETONMOUSEREPEAT(callback(script8799, string0, int1, (IF_GETNEXTSUBID(int1) - 3)));
                if ((script13749() == 1)) {
                    CC_SETOP(1, "Select");
                    CC_SETONOP(callback(script15194, string0, -2147483645));
                };
            };
        } else if ((int7 == true)) {
            CC_SETGRAPHIC(11557 as graphic);
            CC_SETONMOUSEREPEAT(callback(script8799, string1, int1, (IF_GETNEXTSUBID(int1) - 1)));
            if ((script13749() == 1)) {
                CC_SETOP(1, "Select");
                CC_SETONOP(callback(script7774, string1, -2147483645, -2147483643, 0));
            };
        };
    } else {
        CC_SETHIDE(true);
    };
    return int4;
}