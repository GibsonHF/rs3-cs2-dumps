//
function script7470(int0: component): void {
    CC_DELETEALL(int0);
    var int1 = IF_GETWIDTH(int0);
    var int2 = ENUM_GETOUTPUTCOUNT(6245 as cs2enum);
    var int3 = (int2 + ENUM_GETOUTPUTCOUNT(8842 as cs2enum));
    var int4 = 6245 as cs2enum;
    if ((varplayer_9167 == 1)) {
        int4 = 14535 as cs2enum;
        int3 = ENUM_GETOUTPUTCOUNT(14535 as cs2enum);
        int2 = int3;
    };
    var int5 = 0;
    var int6 = 8;
    var int7 = 5;
    var int8 = -1 as obj;
    var int9 = 1;
    var int10 = 0;
    var int11 = 36;
    var int12 = 32;
    var int13 = 44;
    if ((script6431() == true)) {
        int11 = 44;
        int12 = 39;
        int13 = 64;
    };
    while ((int5 < int3)) {
        if ((int5 < int2)) {
            int8 = enum_getvalue(0, 33, int4, int5);
        } else {
            int10 = 1;
            int8 = enum_getvalue(0, 33, 8842 as cs2enum, (int5 - int2));
        };
        CC_CREATE(int0, 5, int5);
        if ((script14437(int8, int10) == 1)) {
            CC_SETSIZE(int11, int12, 0, 0);
            CC_SETPOSITION(int6, int7, 0, 0);
            int8 = script13794(int8);
            int9 = script16585(int8);
            CC_SETOBJECT(int8, int9);
            CC_SETOP(1, "Retrieve");
            switch (OC_CATEGORY(int8)) {
                case 2739:
                case 3226:
                case 3227:
                case 3228:
                case 3229:
                case 3311:
                case 3312:
                case 3313:
                case 3314:
                case 3497:
                case 3498:
                case 3499:
                case 3500:
                case 3698:
                case 3699:
                case 3700:
                case 3701:
                case 3858:
                case 3856:
                case 3857:
                case 3859:
                case 3992:
                case 3993:
                case 3994:
                case 3995:
                case 3996:
                case 4097:
                case 4098:
                case 4099:
                case 4100:
                case 4158:
                case 4159:
                case 4155:
                case 4156:
                case 4157:
                case 4174:
                case 4175:
                case 4176:
                case 4177:
                case 4361:
                case 4362:
                case 4363:
                case 4364:
                case 4475:
                case 4610:
                case 4611:
                case 4917:
                case 5468: {
                    CC_SETOP(2, "Retrieve all outfit pieces");
                    break;
                }
            };
            CC_SETOP(10, "Examine");
            CC_SETONOP(callback(script1620, -2147483645, -2147483643, 75, 0, 10));
            CC_SETOUTLINE(1);
            CC_SETONMOUSEREPEAT(callback(script5495, int8));
            CC_SETONMOUSELEAVE(callback(script5495, -1));
            cc_setparam(7540, 0);
            cc_setparam(7541, int8);
            script14420(int8);
            int6 = (int6 + int13);
            if (((int6 + int11) >= int1)) {
                int6 = 8;
                int7 = (int7 + int13);
            };
        };
        int5 = (int5 + 1);
    };
    if (((int6 == 0) && (int7 == 0))) {
        CC_CREATE(int0, 4, IF_GETNEXTSUBID(int0));
        CC_SETSIZE(0, 0, 1, 1);
        CC_SETPOSITION(0, 0, 1, 0);
        CC_SETTEXTFONT(26 as fontmetrics);
        CC_SETTEXTALIGN(1, 1, 0);
        CC_SETCOLOUR(16777215);
        CC_SETTEXTSHADOW(true);
        CC_SETTEXT("Nothing to retrieve.");
    };
    if ((int0 == comp(1387, 38))) {
        if ((int6 > 8)) {
            int7 = (int7 + int13);
        };
        if ((int7 > IF_GETHEIGHT(comp(1387, 38)))) {
            IF_SETSCROLLSIZE(0, int7, comp(1387, 38));
            script72(comp(1387, 39), comp(1387, 38), IF_GETSCROLLY(comp(1387, 38)));
        } else {
            IF_SETSCROLLSIZE(0, 0, comp(1387, 38));
            script72(comp(1387, 39), comp(1387, 38), 0);
        };
    };
    return;
}