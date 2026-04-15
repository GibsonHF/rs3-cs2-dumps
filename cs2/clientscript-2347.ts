//
function script2347(int0: obj, int1: obj, int2: int, int3: int, int4: int, int5: int, int6: inv, int7: int, int8: unknown_int, int9: unknown_int): unknown_int {
    var int10 = int1;
    var int11 = -1 as obj;
    if ((int6 == 94 as inv)) {
        int10 = script8156(int1);
    };
    if ((script3994(int10) == 1)) {
        return 0;
    };
    var int12 = script14337();
    var int13 = script3999(int10);
    var int14 = script14350(int10, int3, int13);
    if ((int14 >= int3)) {
        if ((int8 == 1)) {
            if ((((int2 != -1) && (OC_STACKABLE(int1) == 1)) && (script14345(int2) > 0))) {
                script14190(int13, true, int1);
            } else {
                script14190(int13, false, int1);
            };
        };
        return 0;
    };
    var int15 = 0;
    var int16 = 0;
    var int17 = script3802(int0);
    if ((int6 == 94 as inv)) {
        switch (script14218(int10, int7, int0, int1, int8)) {
            case 0: {
                break;
            }
            case 3: {
                int11 = int0;
                var int0 = int10;
                var int1 = int10;
                break;
            }
            default: {
                script14187();
                return 0;
            }
        };
    };
    var int18 = (int3 - int14);
    var int19 = 0;
    if (((int17 == false) || (int18 == 1))) {
        if ((int2 != -1)) {
            var int4 = int2;
            var int5 = script5798(int2);
            if ((script6058() == 1)) {
                varbitplayer_45141 = int5;
            };
        } else {
            [int4, int5] = script2592(int4, int5, int13, 1);
        };
        if ((int9 == 1)) {
            script14363(int6, int7, int0, int1, int18, int4);
        } else {
            script14363(int6, -1, int0, int1, int18, int4);
        };
    } else {
        int18 = script2483(int6, int2, int0, int18);
        if ((int18 > 0)) {
            [int4, int5] = script2592(int4, int5, int13, int18);
            while ((int18 > 0)) {
                script14363(int6, -1, int0, int1, 1, int4);
                int4 = (int4 + 1);
                int18 = (int18 - 1);
            };
        };
    };
    if (((((int8 == 1) && (varbitplayer_45141 != 1)) && (int5 > 1)) && (script6058() == 1))) {
        varbitplayer_45141 = int5;
    };
    if ((varplayer_8970 != -1)) {
        varplayer_8970 = script14353(varplayer_8970, int13);
        if (((varplayer_8970 > int13) || (varplayer_8970 >= script14337()))) {
            varplayer_8970 = -1;
        };
    } else if ((int4 > int12)) {
        varplayer_8970 = script14353(int12, int13);
        if (((varplayer_8970 > int13) || (varplayer_8970 >= script14337()))) {
            varplayer_8970 = -1;
        };
    };
    if ((int14 > 0)) {
        if ((int8 == 1)) {
            script14190(int13, script12585(int17), int1);
        };
    } else {
        script14189(int0, int1);
    };
    if ((int6 == 94 as inv)) {
        script13016(int6, int11, int0);
        if ((int8 == 1)) {
            script14192(int0, int7, 1);
        } else {
            script14192(int0, int7, 0);
        };
    };
    if ((OC_CATEGORY(int0) == 4448 as category)) {
        script14203();
    } else if ((OC_CATEGORY(int0) == 5297 as category)) {
        script590(int0);
    } else if ((int0 == 44210 as obj)) {
        script374();
    };
    return 1;
}