//
function script6563(int0: component, int1: component, int2: component): void {
    var int3 = -1;
    var int4 = 0;
    var int5 = IF_GETWIDTH(int0);
    var int6 = int5;
    var int7 = 30;
    var int8 = 0;
    var int9 = 0;
    var int10 = 0;
    var int11 = ENUM_GETOUTPUTCOUNT(15225 as cs2enum);
    var int12 = 0;
    var int13 = 0;
    var int14 = -1 as obj;
    var string0 = "";
    var string1 = "";
    var int15 = 0;
    var int16 = false;
    CC_DELETEALL(int0);
    CC_DELETEALL(int1);
    IF_SETHIDE(true, comp(175, 3));
    while ((++int3 < int11)) {
        int14 = enum_getvalue(0, 33, 15225 as cs2enum, int3);
        if ((int14 != -1 as obj)) {
            int12 = script6561(int14);
            int15 = enum_hasoutput(33, 15226 as cs2enum, int14);
            int13 = item_getparam(int14, 4668);
            if (((int15 == 1) || (varbitplayer_44082 == 1))) {
                if (((varbitplayer_44082 == 1) && (int12 > 0))) {
                    int12 = script6562(int14);
                };
                stack((int5 - 75));
                stack(`Current available: ${TOSTRING_LOCALISED(int12, 1)}`);
                [int6, string1] = stack();
            } else {
                stack((int5 - 18));
                stack(`Current charges: ${TOSTRING_LOCALISED(int12, 1)}`);
                [int6, string1] = stack();
            };
            string0 = OC_NAME(int14);
            int8 = script7593(string0, int6, 26 as fontmetrics, 0);
            int9 = script7593(string1, int6, 26 as fontmetrics, 0);
            int7 = MAX(30, (((10 + int8) + 5) + int9));
            int10 = (int4 + 5);
            script2682(int0, int5, int7, 0, int4, 1, int3);
            script6204(int0, int5, int7, 0, int4, 0, 2438 as struct);
            script10629(int0, IF_GETNEXTSUBID(int0), (int6 - 10), int8, 5, int10, string0, 0, 26 as fontmetrics, 0, 0, 0, false);
            script2731(int0, CC_GETID(), 2);
            int10 = (int10 + (int8 + 5));
            script10629(int0, IF_GETNEXTSUBID(int0), (int6 - 10), int9, 5, int10, string1, 0, 26 as fontmetrics, 0, 0, 0, false);
            script2731(int0, CC_GETID(), 3);
            if ((varbitplayer_44082 != 1)) {
                if ((int15 == 1)) {
                    int16 = script6428(0, int12);
                    script10410(int0, int1, 28556 as struct, (int6 - 5), (int4 + ((int7 / 2) - ((int7 - 10) / 2))), 75, (int7 - 10), IF_GETNEXTSUBID(int1), int16, "Activate");
                    if (((int16 == false) && (CC_FIND(int1, int3) == 1))) {
                        CC_SETOPBASE(`${script4033(int14)}${OC_NAME(int14)}`);
                        CC_SETOP(1, "Convert");
                        if (((int14 == 32719 as obj) && (int12 > 0))) {
                            if ((int12 >= 5)) {
                                CC_SETOP(2, "Convert-5");
                            };
                            if ((int12 >= 10)) {
                                CC_SETOP(3, "Convert-10");
                            };
                            CC_SETOP(4, "Convert-All");
                        };
                    };
                } else {
                    script10417(int0, int1, (int6 - 5), (int4 + ((int7 / 2) - (18 / 2))), IF_GETNEXTSUBID(int1), script6560(int14));
                    if ((CC_FIND(int1, int3) == 1)) {
                        CC_SETPOSITION(0, int4, 0, 0);
                        CC_SETSIZE(int5, int7, 0, 0);
                    };
                };
            } else {
                int16 = script6428(0, int12);
                script12501(int0, int1, 28556 as struct, (int6 - 5), (int4 + ((int7 / 2) - ((int7 - 10) / 2))), 75, (int7 - 10), IF_GETNEXTSUBID(int1), int16, "Exchange");
                string1 = `1 convert requires ${TOSTRING_LOCALISED(int13, 1)} ${script4583(int13, "charge", "charges")}.`;
                if ((CC_FIND(int1, int3) == 1)) {
                    CC_SETONMOUSEREPEAT(callback(script8799, string1, -2147483645, -2147483643));
                };
            };
            int4 = (int4 + (int7 + 5));
        };
    };
    IF_SETSCROLLPOS(0, 0, comp(175, 4));
    IF_SETSCROLLSIZE(0, MAX(IF_GETHEIGHT(int0), int4), comp(175, 4));
    script7791(int2, comp(175, 4));
    return;
}