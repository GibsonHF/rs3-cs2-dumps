//
function script19366(int0: int, int1: inv, int2: int, int3: int, int4: unknown_int): unknown_int {
    if ((int1 == -1 as inv)) {
        script12478("Inventory param $inv was null!");
        return 0;
    };
    var int5 = INV_SIZE(int1);
    if (((((int2 < 0) || (int2 >= int5)) || (int3 < 0)) || (int3 >= int5))) {
        script12478("Integer param $slot was out of expected bounds!");
        return 0;
    };
    if (((int0 < 0) || (int0 >= 200))) {
        script12478("Integer param $clan_slot was out of expected bounds!");
        return 0;
    };
    var int6 = script19586(int0);
    var int7 = script19587(int0);
    var int8 = script19588(int1, int3);
    var int9 = script19589(int1, int3);
    var int10 = int7;
    var int11 = OC_UNCERT(int8);
    if ((((((int6 == -1 as obj) || (int8 == -1 as obj)) || (int7 < 1)) || (int9 < 1)) || (script3994(int11) == 1))) {
        return 0;
    };
    if ((script19362(int11) == 1)) {
        return 0;
    };
    if (((script4356() == 0) && (OC_MEMBERS(int6) == 1))) {
        return 0;
    };
    var int12 = varplayer_160;
    var int13 = OC_CERT(int6);
    if ((int13 == int6)) {
        int12 = 0;
    };
    var int14 = script3802(int11);
    var int15 = script19581(int1, int11);
    var int16 = 0;
    if ((int15 != -1)) {
        int16 = INV_GETNUM(963 as inv, int15);
    };
    var int17 = -1;
    var int18 = 0;
    var int19 = 0;
    var int20 = 1;
    var int21 = 0;
    var int4 = script19356(int4, int6);
    if (((int12 == 1) || (OC_STACKABLE(int6) == 1))) {
        int17 = script19585(int1, int13, 0);
        if ((int17 != -1)) {
            int19 = script19589(int1, int17);
            int18 = (2147483647 - int19);
        };
        if (((int7 == int10) && (int4 == 0))) {
            if ((int17 == -1)) {
                int20 = 0;
            } else if ((int18 >= int10)) {
                int20 = 0;
            };
        };
    } else if (((int7 == 1) && (int4 == 0))) {
        int20 = 0;
    };
    if ((int20 == 0)) {
        if ((int17 != -1)) {
            script19602(int0, int7, int6, int7, int1, int17, script734(int12), int4);
            script19603(int1, int3, int8, int11, int9, int0);
            script19572(int8, int9);
            return 1;
        };
        if (((int9 == 1) || (int14 == false))) {
            if ((int15 == -1)) {
                script19605(int0, int6, int13, int7, int1, int2, int3, int8, int11, int9, int12);
                script19572(int8, int9);
                return 1;
            };
            if ((((2147483647 - int16) - int9) < 0)) {
                if ((int11 == int6)) {
                    script19345(int8, int11, int15, int9, int15, int1, int3, 1, 1);
                };
                return 0;
            };
            varbitplayer_45912 = 1;
            int21 = script19345(int8, int11, int15, int9, int15, int1, int3, 1, 1);
            varbitplayer_45912 = 0;
            if ((int21 == 0)) {
                return 0;
            };
            if ((script19588(int1, int3) != -1 as obj)) {
                return 0;
            };
            int7 = script19587(int0);
            script19602(int0, int7, int6, int10, int1, int2, script734(int12), int4);
            script19371(int0, int6, int4);
            return 1;
        };
        script12478(`oc_debugname x ${inttostring(int9, 10)} couldn't swap with oc_debugname x ${inttostring(int7, 10)}. An inventory object shouldn't need multiple bank slots.`);
        return 0;
    };
    if ((script19590(int8, int9) == 0)) {
        if (((int8 == int6) && (OC_STACKABLE(int8) == 1))) {
            script19345(int8, int11, int15, int9, int15, int1, int3, 1, 1);
        };
        return 0;
    };
    if (((varplayer_11958 != -1) && (script19579() >= script19359()))) {
        int15 = (int15 - script19577(0, int15));
        var int0 = (int0 - script19577(0, int0));
        script19596();
    };
    varbitplayer_45912 = 1;
    int21 = script19345(int8, int11, int15, int9, (int0 + 1), int1, int3, 1, 1);
    varbitplayer_45912 = 0;
    if ((int21 == 0)) {
        return 0;
    };
    if ((int17 != -1)) {
        if (((int18 > 0) && (int18 >= int10))) {
            return 1;
        };
        int10 = MIN(int10, int18);
        var int2 = int17;
    } else if ((script19588(int1, int3) != -1 as obj)) {
        return 0;
    };
    int7 = script19587(int0);
    if (((OC_STACKABLE(int6) == 0) && (int12 == 0))) {
        script19602(int0, int7, int6, 1, int1, int2, script734(int12), int4);
    } else {
        script19602(int0, int7, int6, int10, int1, int2, script734(int12), int4);
    };
    return 1;
}