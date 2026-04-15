//
function script5786(int0: int, int1: inv, int2: int, int3: int, int4: unknown_int): unknown_int {
    if ((int1 == -1 as inv)) {
        script12478("Inventory param $inv was null!");
        return 0;
    };
    var int5 = INV_SIZE(int1);
    if (((((int2 < 0) || (int2 >= int5)) || (int3 < 0)) || (int3 >= int5))) {
        script12478("Integer param $slot was out of expected bounds!");
        return 0;
    };
    if (((int0 < 0) || (int0 >= 1820))) {
        script12478("Integer param $bank_slot was out of expected bounds!");
        return 0;
    };
    var int6 = script14344(int0);
    var int7 = script14345(int0);
    var int8 = script14346(int1, int3);
    var int9 = script14347(int1, int3);
    var int10 = int7;
    var int11 = OC_UNCERT(int8);
    if ((((((int6 == -1 as obj) || (int8 == -1 as obj)) || (int7 < 1)) || (int9 < 1)) || (script3994(int11) == 1))) {
        return 0;
    };
    var int12 = varplayer_160;
    var int13 = OC_CERT(int6);
    var int14 = -1 as obj;
    var int15 = -1 as obj;
    if ((int1 == 94 as inv)) {
        int12 = 0;
        int14 = script8156(int11);
        switch (script14218(int14, int3, int8, int11, 1)) {
            case 0: {
                break;
            }
            case 3: {
                int15 = int8;
                int8 = int14;
                int11 = int14;
                break;
            }
            case 2: {
                if ((OC_STACKABLE(int6) == 1)) {
                    return script6794(int6, int7, int0, int1, int2, int7, 0);
                };
                return script6794(int6, 1, int0, int1, int2, int7, 0);
            }
            default: {
                return 0;
            }
        };
    } else if ((int1 == 530 as inv)) {
        if ((varplayer_1831 != -1 as obj)) {
            int10 = (int7 - script3970(95 as inv, int6, int7, int8, script734(int12)));
            if ((int10 == 0)) {
                script2347(int8, int11, script14339(int1, int11), int9, int0, -1, 530 as inv, int3, 1, 1);
                script14187();
                return 0;
            };
        } else {
            return 0;
        };
    } else if ((int13 == int6)) {
        int12 = 0;
    };
    var int16 = script5798(int0);
    if (((((PLAYERMEMBER() == false) && (OC_MEMBERS(int8) == 0)) && (OC_MEMBERS(int6) == 1)) && ((script5778() - script14294()) <= 0))) {
        script14152("You need to subscribe if you wish to store any more items in the bank.");
        return 0;
    };
    var int17 = script3802(int11);
    var int18 = script14339(int1, int11);
    var int19 = 0;
    if ((int18 != -1)) {
        int19 = INV_GETNUM(95 as inv, int18);
    };
    var int20 = -1;
    var int21 = 0;
    var int22 = 0;
    var int23 = 1;
    var int24 = 0;
    var int4 = script5175(int4, int6);
    if (((int12 == 1) || (OC_STACKABLE(int6) == 1))) {
        int20 = script14343(int1, int13, 0);
        if ((int20 != -1)) {
            int22 = script14347(int1, int20);
            int21 = (2147483647 - int22);
        };
        if (((int7 == int10) && (int4 == 0))) {
            if ((int20 == -1)) {
                int23 = 0;
            } else if ((int21 >= int10)) {
                int23 = 0;
            };
        };
    } else if (((int7 == 1) && (int4 == 0))) {
        int23 = 0;
    };
    if ((int23 == 0)) {
        if ((int20 != -1)) {
            script14362(int0, int7, int6, int7, int1, int20, script734(int12), int4);
            script14363(int1, int3, int8, int11, int9, int0);
            script13016(int1, int15, int8);
            script14248(int1, int8, int6);
            return 1;
        };
        if (((int9 == 1) || (int17 == false))) {
            if ((int18 == -1)) {
                script14365(int0, int6, int13, int7, int1, int2, int3, int8, int11, int9, int12);
                script13016(int1, int15, int8);
                script14248(int1, int8, int6);
                return 1;
            };
            if ((((2147483647 - int19) - int9) < 0)) {
                if ((int11 == int6)) {
                    script2347(int8, int11, int18, int9, int18, -1, int1, int3, 1, 1);
                };
                return 0;
            };
            varbitplayer_45912 = 1;
            int24 = script2347(int8, int11, int18, int9, int18, -1, int1, int3, 1, 1);
            varbitplayer_45912 = 0;
            if ((int24 == 0)) {
                return 0;
            };
            if ((script14346(int1, int3) != -1 as obj)) {
                return 0;
            };
            int7 = script14345(int0);
            script14362(int0, int7, int6, int10, int1, int2, script734(int12), int4);
            script6961(int0, int6, int4);
            script13016(int1, int15, int8);
            script14248(int1, int8, int6);
            return 1;
        };
        script12478(`oc_debugname x ${inttostring(int9, 10)} couldn't swap with oc_debugname x ${inttostring(int7, 10)}. An inventory object shouldn't need multiple bank slots.`);
        return 0;
    };
    if ((script14348(int8, int9) == 0)) {
        if (((int8 == int6) && (OC_STACKABLE(int8) == 1))) {
            script2347(int8, int11, int18, int9, int18, -1, int1, int3, 1, 1);
        };
        return 0;
    };
    if (((varplayer_8970 != -1) && (script14337() >= script5775()))) {
        int18 = (int18 - script14293(0, int18));
        var int0 = (int0 - script14293(0, int0));
        script14354();
    };
    varbitplayer_45912 = 1;
    int24 = script2347(int8, int11, int18, int9, (int0 + 1), script5798(int0), int1, int3, 1, 1);
    varbitplayer_45912 = 0;
    if ((int24 == 0)) {
        return 0;
    };
    if ((int20 != -1)) {
        if (((int21 > 0) && (int21 >= int10))) {
            return 1;
        };
        int10 = MIN(int10, int21);
        var int2 = int20;
    } else if ((script14346(int1, int3) != -1 as obj)) {
        return 0;
    };
    int7 = script14345(int0);
    if (((OC_STACKABLE(int6) == 0) && (int12 == 0))) {
        script14362(int0, int7, int6, 1, int1, int2, script734(int12), int4);
    } else {
        script14362(int0, int7, int6, int10, int1, int2, script734(int12), int4);
    };
    script13016(int1, int15, int8);
    script14248(int1, int8, int6);
    return 1;
}