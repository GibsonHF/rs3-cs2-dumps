//
function script13005(int0: unknown_int): void {
    var int1 = comp(-1, 65535);
    var int2 = comp(-1, 65535);
    var int3 = -1 as cs2enum;
    var int4 = -1 as cs2enum;
    var string0 = "";
    var int5 = 0;
    var int6 = 0;
    var int7 = -1;
    var int8 = 0;
    var int9 = 0;
    var int10 = 0;
    var int11 = 0;
    switch (int0) {
        case 71958546: {
            int1 = comp(1098, 15);
            int2 = comp(1098, 19);
            int3 = 3700 as cs2enum;
            string0 = "Select the world number the event is to take place.";
            int6 = script13010(varplayer_2047);
            break;
        }
        case 71958549: {
            int1 = comp(1098, 22);
            int2 = comp(1098, 23);
            int3 = 3695 as cs2enum;
            string0 = "Select the time the event is to take place.";
            int7 = 233;
            int6 = script13011(varplayer_2047);
            break;
        }
        case 71958554: {
            int1 = comp(1098, 27);
            int2 = comp(1098, 28);
            int3 = 3697 as cs2enum;
            string0 = "Select the day of the month the event is to take place.";
            [int6, int9, int10] = script13013(varplayer_2047);
            if (((((int6 + int9) + int10) == 0) && (varplayer_2048 > 0))) {
                int6 = varplayer_2048;
            };
            break;
        }
        case 71958558: {
            int1 = comp(1098, 31);
            int2 = comp(1098, 32);
            int3 = 3698 as cs2enum;
            string0 = "Select the month the event is to take place.";
            [int8, int6, int10] = script13013(varplayer_2047);
            if (((((int8 + int6) + int10) == 0) && (varplayer_2049 > 0))) {
                int6 = varplayer_2049;
            };
            break;
        }
        case 71958562: {
            int1 = comp(1098, 35);
            int2 = comp(1098, 36);
            int3 = 3699 as cs2enum;
            string0 = "Select the year the event is to take place.";
            int7 = 30;
            [int8, int9, int6] = script13013(varplayer_2047);
            if (((((int8 + int9) + int6) == 0) && (varplayer_2050 > 0))) {
                int6 = varplayer_2050;
            };
            int6 = (int6 - 2000);
            break;
        }
        case 71958539: {
            int1 = comp(1098, 126);
            int2 = comp(1098, 127);
            int3 = 3725 as cs2enum;
            string0 = "Select which rank (and above) this event is for.";
            int7 = 126;
            int6 = script13008(varplayer_2047);
            break;
        }
        case 71958541: {
            int1 = comp(1098, 128);
            int2 = comp(1098, 129);
            int3 = 3696 as cs2enum;
            string0 = "Select the location the event is to take place.";
            int5 = 1;
            int6 = script13012(varplayer_2047);
            if ((int6 == 0)) {
                int6 = (int6 + 1);
            };
            break;
        }
        case 71958577: {
            int1 = comp(1098, 130);
            int2 = comp(1098, 131);
            int3 = 3687 as cs2enum;
            string0 = "Select the type of event.";
            int5 = 1;
            int6 = script13009(varplayer_2047);
            int4 = enum_getvalue(0, 26, 3689 as cs2enum, int6);
            CC_DELETEALL(comp(1098, 132));
            IF_CLEAROPS(comp(1098, 133));
            IF_SETONOP(callback(), comp(1098, 133));
            if ((int4 == -1)) {
                script13971(comp(1098, 132), comp(-1, 65535), 28619 as struct, "No subcategories.", true);
            } else if ((script13007(varplayer_2047) == 0)) {
                script3376(comp(1098, 132), comp(1098, 133), 0, 0, IF_GETWIDTH(comp(1098, 133)), -1, int4, -1, ENUM_GETOUTPUTCOUNT(int4), "Select the sub type of event.", script13007(varplayer_2047), 0, 0, "Select", false);
            } else {
                script10428(comp(1098, 132), comp(1098, 133), int4, ENUM_GETOUTPUTCOUNT(int4), "Select the sub type of event.", script13007(varplayer_2047), int5);
            };
            break;
        }
        default: {
            return;
        }
    };
    if ((int7 == -1)) {
        int7 = (ENUM_GETOUTPUTCOUNT(int3) + 1);
    };
    if ((int6 <= 0)) {
        script3376(int1, int2, 0, 0, IF_GETWIDTH(int2), -1, int3, -1, int7, string0, int6, 0, 0, "Select", false);
    } else {
        script10428(int1, int2, int3, int7, string0, int6, int5);
    };
    return;
}