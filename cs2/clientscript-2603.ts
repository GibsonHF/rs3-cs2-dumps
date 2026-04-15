//
function script2603(int0: cs2enum, int1: int, int2: component, int3: unknown_int): int {
    var int4 = 0;
    var int5 = ENUM_GETOUTPUTCOUNT(int0);
    var int6 = 0;
    var int7 = 0;
    var int8 = 0;
    var int9 = 0;
    var int10 = 0;
    var int11 = -1 as obj;
    var int12 = 1;
    if ((((((int2 == comp(37, 103)) || (int2 == comp(37, 114))) || (int2 == comp(37, 125))) || (int2 == comp(37, 136))) || (int2 == comp(37, 147)))) {
        int12 = 0;
    };
    var int13 = 1;
    var int14 = 1;
    var int15 = 0;
    var int16 = 0;
    var int17 = 0;
    define_array[23](3);
    pop_array(0, 13987);
    pop_array(1, 13988);
    pop_array(2, 13989);
    define_array[65559](3);
    pop_array[1](0, 15199);
    pop_array[1](1, 15200);
    pop_array[1](2, 15201);
    CC_DELETEALL(int2);
    while ((int6 < int5)) {
        int11 = enum_getvalue(0, 33, int0, int6);
        int14 = 1;
        int15 = 0;
        int17 = 0;
        if ((int11 != -1 as obj)) {
            int9 = MODULO(int6, 4);
            int10 = (int6 / 4);
            int7 = (((46 + 5) * int9) + 5);
            int8 = (((46 + 5) * int10) + 5);
            if ((enum_hasoutput(33, 15093 as cs2enum, int11) == 1)) {
                int17 = 1;
                int16 = script2549(int11);
                if (((int16 <= 0) && (int12 == 1))) {
                    int14 = 0;
                };
            };
            switch (int3) {
                case 3: {
                    if ((int17 == 0)) {
                        var int3 = 0;
                    };
                    break;
                }
                case 4: {
                    if ((item_getparam(int11, 7805) > 0)) {
                        int11 = script2542(int11, varbitplayer_43239);
                    };
                    if (((script7105(int11) == 0) || (script7108(int11) <= 0))) {
                        int14 = 0;
                    } else {
                        int14 = 1;
                    };
                    break;
                }
            };
            CC_CREATE(int2, 5, int1);
            CC_SETPOSITION(int7, int8, 0, 0);
            if (((((int3 == 3) && (varplayer_8332 != -1 as dbrow)) && (enum_getvalue(33, 74, 2531 as cs2enum, int11) == varplayer_8332)) || ((int3 == 4) && ((int11 == varplayer_8333) || (item_getparam(int11, 7806) == varplayer_8333))))) {
                int15 = 1;
            };
            if ((int14 == 1)) {
                if ((int15 == 1)) {
                    CC_SETGRAPHIC(push_array[1](2));
                } else {
                    CC_SETONMOUSEOVER(callback(script5336, int2, int1, push_array[1](1)));
                    CC_SETONMOUSELEAVE(callback(script5336, int2, int1, push_array[1](0)));
                    CC_SETGRAPHIC(push_array[1](0));
                };
            } else if ((int15 == 1)) {
                CC_SETGRAPHIC(push_array(2));
            } else {
                CC_SETONMOUSEOVER(callback(script5336, int2, int1, push_array(1)));
                CC_SETONMOUSELEAVE(callback(script5336, int2, int1, push_array(0)));
                CC_SETGRAPHIC(push_array(0));
            };
            var int1 = (int1 + 1);
            CC_SETSIZE(46, 46, 0, 0);
            CC_CREATE(int2, 5, int1);
            int1 = (int1 + 1);
            if ((int3 == 3)) {
                CC_SETOP(2, `Deposit all ${OC_NAME(int11)}`);
                CC_SETOP(3, `Deposit-X ${OC_NAME(int11)}`);
                CC_SETOP(4, `Withdraw all ${OC_NAME(int11)}`);
                CC_SETOP(5, `Withdraw-X ${OC_NAME(int11)}`);
            };
            if ((int17 == 1)) {
                CC_SETOBJECT_ALWAYSNUM(int11, int16);
            } else if (((int12 == 0) && (item_getparam(int11, 2653) > 1))) {
                CC_SETOBJECT(int11, script18374(int11));
            } else {
                CC_SETOBJECT_NONUM(int11, 1);
            };
            cc_setparam(7811, int11);
            if ((int3 != 5)) {
                CC_SETOP(1, `Select ${OC_NAME(int11)}`);
                CC_SETONOP(callback(script2585, -2147483645, -2147483643, -2147483644, int3));
            };
            CC_SETPOSITION(((int7 + ((46 - 36) / 2)) + 2), (int8 + ((46 - 32) / 2)), 0, 0);
            CC_SETSIZE(36, 32, 0, 0);
            CC_SETONMOUSEREPEAT(callback(script9564, int11, -2147483645, -2147483643));
        };
        int6 = (int6 + 1);
    };
    int4 = ((int8 + 46) + 5);
    return int4;
}