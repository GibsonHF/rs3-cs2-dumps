//
function script9271(int0: component, int1: inv, int2: int, int3: component, int4: int, int5: unknown_int): unknown_int {
    var int6 = INV_GETOBJ(int1, int2);
    if ((int6 == -1 as obj)) {
        return 0;
    };
    var int7 = INV_GETNUM(int1, int2);
    var int8 = script7781(int6, int7, int1, 0, int5);
    if ((int8 == 1)) {
        return 1;
    };
    if ((int8 == 2)) {
        return 0;
    };
    if (((CC_FIND(int3, int4) == 1) && (CC_GETINVOBJECT() != -1 as obj))) {
        var int4 = -1;
    };
    var int9 = int6;
    var int10 = 300;
    var int11 = 0;
    if ((int5 == 1)) {
        int9 = OC_CERT(int6);
        if ((int9 == int6)) {
            var int5 = 0;
        };
    };
    var int12 = 0;
    var long0 = 0n;
    var long1 = 0n;
    if ((int6 == 995 as obj)) {
        int5 = 0;
        long1 = script17402(int1, -1 as inv);
        long0 = SUB_LONG(long1, script14426(long1));
        if (branch_eq_long[90](long1, long0)) {
            return 0;
        };
    } else {
        if ((OC_STACKABLE(int9) == 1)) {
            if ((INV_TOTAL(93 as inv, int9) > 0)) {
                int12 = MAX(0, (int7 - (2147483647 - INV_TOTAL(93 as inv, int9))));
            } else if ((INV_FREESPACE(93 as inv) == 0)) {
                int12 = int7;
            };
        } else {
            int12 = MAX(0, (int7 - INV_FREESPACE(93 as inv)));
        };
        int7 = (int7 - int12);
        if ((int7 <= 0)) {
            return 0;
        };
    };
    var int13 = 0;
    if ((IF_FIND(int0) == 1)) {
        if ((script17378(int6) == 1)) {
            if (branch_lteq_long[156](long0, 0n)) {
                CC_SETOBJECT(-1 as obj, 0);
            } else {
                CC_SETOBJECT_LONG(CC_GETINVOBJECT(), long0);
            };
        } else if (((CC_GETINVCOUNT() - int7) > 0)) {
            CC_SETOBJECT(CC_GETINVOBJECT(), (CC_GETINVCOUNT() - int7));
        } else {
            CC_SETOBJECT(-1 as obj, 0);
        };
    };
    if ((int5 == 1)) {
        if ((CC_FIND[1](int3, script9250(93 as inv, int9)) == 1)) {
            CC_SETOBJECT[1](CC_GETINVOBJECT[1](), (CC_GETINVCOUNT[1]() + int7));
        } else if (((int4 == -1) && (CC_FIND[1](int3, script9249(93 as inv)) == 1))) {
            CC_SETOBJECT[1](int9, int7);
        } else if ((CC_FIND[1](int3, int4) == 1)) {
            CC_SETOBJECT[1](int9, int7);
        };
    } else {
        switch (int6) {
            case 995:
            case 54830: {
                script5560(ADD_LONG(script5567(), script17402(int1, -1 as inv)));
                break;
            }
            default: {
                if ((OC_STACKABLE(int6) == 1)) {
                    if ((CC_FIND[1](int3, script9250(93 as inv, int9)) == 1)) {
                        CC_SETOBJECT[1](CC_GETINVOBJECT[1](), (CC_GETINVCOUNT[1]() + int7));
                    } else if (((int4 == -1) && (CC_FIND[1](int3, script9249(93 as inv)) == 1))) {
                        CC_SETOBJECT[1](int9, int7);
                    } else if ((CC_FIND[1](int3, int4) == 1)) {
                        CC_SETOBJECT[1](int9, int7);
                    };
                } else if ((int7 == 1)) {
                    if (((int4 == -1) && (CC_FIND[1](int3, script9249(93 as inv)) == 1))) {
                        CC_SETOBJECT[1](int9, int7);
                    } else if ((CC_FIND[1](int3, int4) == 1)) {
                        CC_SETOBJECT[1](int9, int7);
                    };
                } else {
                    int13 = script9249(93 as inv);
                    while (((int13 != -1) && (int7 > 0))) {
                        if ((CC_FIND[1](int3, int13) == 1)) {
                            CC_SETOBJECT[1](int9, 1);
                        };
                        int13 = script9251(93 as inv, -1 as obj, (int13 + 1));
                    };
                };
                break;
            }
        };
    };
    return 1;
}