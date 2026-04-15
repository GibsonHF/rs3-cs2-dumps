//
function script15012(int0: inv): void {
    CC_DELETEALL(comp(707, 4));
    CC_DELETEALL(comp(707, 5));
    var int1 = -1;
    var int2 = INV_SIZE(int0);
    var int3 = 7;
    var int4 = 7;
    var int5 = (((742 - 8) - (4 * int3)) / 3);
    var int6 = 58;
    var int7 = IF_GETNEXTSUBID(comp(707, 5));
    var int8 = 0;
    var int9 = 0;
    var int10 = 0;
    var int11 = -1 as obj;
    var int12 = 0;
    var int13 = 0;
    var int14 = 18;
    var int15 = 18;
    var int16 = 0;
    var string0 = "";
    var int17 = (((((int5 - ((int3 + 40) + int3)) - int3) - int15) - int3) - int14);
    var int18 = 0;
    var int19 = enum_getvalue(25, 0, 8549 as cs2enum, 206 as fontmetrics);
    var string1 = "";
    while (((++int1 < int2) && (int10 == 0))) {
        int11 = INV_GETOBJ(int0, int1);
        int8 = MODULO(int1, 3);
        int9 = (int1 / 3);
        if ((int11 != -1 as obj)) {
            int12 = (int3 + (int8 * (int5 + int3)));
            int13 = (int4 + (int9 * (int6 + int4)));
            if (((PLAYERMEMBER() == false) && (int1 >= 6))) {
                int7 = script10410(comp(707, 4), comp(707, 5), 28547 as struct, int12, int13, int5, int6, int7, true, "");
                int7 = script11624(comp(707, 4), comp(707, 5), 11799 as struct, (((int12 + int5) - int3) - int15), (int13 + int4), int7, 1);
                if ((CC_FIND(comp(707, 5), (int7 - 1)) == 1)) {
                    CC_SETOP(1, "Remove favourite");
                    string1 = "Remove favourite";
                    CC_SETONMOUSEREPEAT(callback(script8799, string1, -2147483645, -2147483643));
                };
                int7 = script11624(comp(707, 4), comp(707, 5), 11763 as struct, (((((int12 + int5) - int3) - int15) - int3) - int14), (int13 + int4), int7, 1);
                if ((CC_FIND(comp(707, 4), (IF_GETNEXTSUBID(comp(707, 4)) - 1)) == 1)) {
                    CC_SETHIDE(true);
                };
            } else {
                int7 = script10410(comp(707, 4), comp(707, 5), 28547 as struct, int12, int13, int5, int6, int7, false, "");
                if ((CC_FIND(comp(707, 5), (int7 - 1)) == 1)) {
                    CC_SETONOP(callback(script15025));
                    CC_SETOP(1, "Buy favourite");
                };
                int7 = script11624(comp(707, 4), comp(707, 5), 11799 as struct, (((int12 + int5) - int3) - int15), (int13 + int4), int7, 1);
                if ((CC_FIND(comp(707, 5), (int7 - 1)) == 1)) {
                    CC_SETOP(1, "Remove favourite");
                    string1 = "Remove favourite";
                    CC_SETONMOUSEREPEAT(callback(script8799, string1, -2147483645, -2147483643));
                };
                int7 = script11624(comp(707, 4), comp(707, 5), 11763 as struct, (((((int12 + int5) - int3) - int15) - int3) - int14), (int13 + int4), int7, 1);
                if ((CC_FIND(comp(707, 5), (int7 - 1)) == 1)) {
                    CC_SETONOP(callback(script15017));
                    CC_SETOP(1, "Edit favourite");
                    string1 = "Edit favourite";
                    CC_SETONMOUSEREPEAT(callback(script8799, string1, -2147483645, -2147483643));
                };
            };
            int16 = (int13 + ((int6 - 36) / 2));
            script7924(comp(707, 4), IF_GETNEXTSUBID(comp(707, 4)), 40, 36, (int12 + int3), int16, 18266 as graphic, false, false, false, 0);
            CC_SETONMOUSEREPEAT(callback(script9564, int11, -2147483645, -2147483643));
            script6198(46333956, 36, 32, ((int12 + int3) + 2), ((int13 + ((int6 - 36) / 2)) + 2), int11, 0);
            string0 = script3930(script18300(int11), int17, 2, 206);
            int18 = (((int12 + int3) + 40) + int3);
            script10629(46333956, IF_GETNEXTSUBID(46333956), int17, ((int19 * 2) + 8), int18, (int16 - 4), string0, script10495(2), 206, 0, 0, 0, 1);
            script7924(46333956, IF_GETNEXTSUBID(46333956), 16, 14, int18, ((int16 + 36) - int19), 1158, 0, 0, 0, 0);
            string1 = "Current item Market Price";
            CC_SETONMOUSEREPEAT(callback(script8799, string1, -2147483645, -2147483643));
            script10629(46333956, IF_GETNEXTSUBID(46333956), int17, int19, ((int18 + 16) + int3), ((int16 + 36) - int19), "Loading...", script10495(2), 206, 0, 0, 0, 1);
            cc_setparam(7221, int11);
        } else {
            int10 = 1;
        };
    };
    if ((script1190() != 0)) {
        int7 = script10410(comp(707, 4), comp(707, 5), 28547 as struct, (int3 + (int8 * (int5 + int3))), (int4 + (int9 * (int6 + int4))), int5, int6, int7, false, "Add a new favourite");
        if ((CC_FIND(comp(707, 5), (int7 - 1)) == 1)) {
            CC_SETONOP(callback(script15017));
            CC_SETOP(1, "Add favourite");
        };
    };
    return;
}