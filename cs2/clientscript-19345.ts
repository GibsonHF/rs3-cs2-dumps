//
function script19345(int0: obj, int1: obj, int2: int, int3: int, int4: int, int5: inv, int6: int, int7: unknown_int, int8: unknown_int): unknown_int {
    if ((script19362(int1) == 1)) {
        if (((OC_MEMBERS(int1) == 1) && (script4356() == 0))) {
            script14152("You need to be on a members' world to store that item.");
        } else {
            switch (int1) {
                case 50805: {
                    if ((((((varbitplayer_48172 + varbitplayer_48173) + varbitplayer_48174) + varbitplayer_48175) + varbitplayer_48176) != 0)) {
                        script14152(`${OC_NAME(int0)} can not be stored in group storage whilst it has gems stored in it.`);
                    };
                    break;
                }
                default: {
                    script14152(`${OC_NAME(int0)} can not be stored in group storage.`);
                    break;
                }
            };
        };
        return 0;
    };
    var int9 = script19579();
    var int10 = script19355(int1);
    if ((int10 == 0)) {
        return 0;
    };
    var int11 = script19592(int1, int3, int10);
    if ((int11 >= int3)) {
        if ((int7 == 1)) {
            if ((((int2 != -1) && (OC_STACKABLE(int1) == 1)) && (script19587(int2) > 0))) {
                script19570(int10, true, int1);
            } else {
                script19570(int10, false, int1);
            };
        };
        return 0;
    };
    var int12 = script3802(int0);
    var int13 = (int3 - int11);
    var int14 = 0;
    script19572(int0, int13);
    if (((int12 == false) || (int13 == 1))) {
        if ((int2 != -1)) {
            var int4 = int2;
        } else {
            int4 = script19347(int4, int10, 1);
        };
        if ((int8 == 1)) {
            script19603(int5, int6, int0, int1, int13, int4);
        } else {
            script19603(int5, -1, int0, int1, int13, int4);
        };
    } else {
        int13 = script19346(int5, int2, int0, int13);
        if ((int13 > 0)) {
            int4 = script19347(int4, int10, int13);
            while ((int13 > 0)) {
                script19603(int5, -1, int0, int1, 1, int4);
                int4 = (int4 + 1);
                int13 = (int13 - 1);
            };
        };
    };
    if ((varplayer_11958 != -1)) {
        varplayer_11958 = script19595(varplayer_11958, int10);
        if (((varplayer_11958 > int10) || (varplayer_11958 >= script19579()))) {
            varplayer_11958 = -1;
        };
    } else if ((int4 > int9)) {
        varplayer_11958 = script19595(int9, int10);
        if (((varplayer_11958 > int10) || (varplayer_11958 >= script19579()))) {
            varplayer_11958 = -1;
        };
    };
    if ((int11 > 0)) {
        if ((int7 == 1)) {
            script19570(int10, script12585(int12), int1);
        };
    } else {
        script14189(int0, int1);
    };
    if ((int0 == 44210 as obj)) {
        script374();
    };
    varbitplayer_56599 = 1;
    return 1;
}