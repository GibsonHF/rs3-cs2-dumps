//
function script322(int0: component, int1: int, int2: unknown_int, int3: unknown_int, int4: unknown_int, string0: string, string1: string, string2: string, string3: string, string4: string, string5: string): void {
    CC_DELETEALL(int0);
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    var int8 = 1;
    var int9 = 0;
    var int10 = 0;
    var int11 = -1;
    var int12 = -1;
    var int13 = -1 as obj;
    var string6 = "hello";
    var int14 = 0;
    var int15 = 0;
    var int16 = 0;
    while ((int8 <= 91)) {
        int13 = enum_getvalue(0, 33, 10053 as cs2enum, int8);
        if (((item_getparam(int13, 457) > 0) || (item_getparam(OC_UNCERT(int13), 599) > 0))) {
            int5 = ((16 + (MODULO(int7, int1) * 48)) + (MODULO(int7, int1) * 5));
            int6 = (((int7 / int1) * 52) + ((int7 / int1) * 5));
            CC_CREATE(int0, 5, int16);
            int16 = (int16 + 1);
            CC_SETSIZE(48, 52, 0, 0);
            CC_SETPOSITION(int5, int6, 0, 0);
            CC_SETGRAPHIC(2205 as graphic);
            CC_SETONMOUSEOVER(callback(script6114, -2147483645, int16, 0));
            CC_SETONMOUSELEAVE(callback(script6114, -2147483645, int16, 1));
            CC_CREATE(int0, 5, int16);
            int16 = (int16 + 1);
            CC_SETSIZE(48, 52, 0, 0);
            CC_SETPOSITION(int5, int6, 0, 0);
            CC_SETGRAPHIC(2206);
            CC_SETHIDE(1);
            CC_CREATE(int0, 5, int16);
            CC_SETSIZE(36, 32, 0, 0);
            CC_SETPOSITION((int5 + 6), (int6 + 4), 0, 0);
            int12 = enum_getvalue(0, 33, 1277, int8);
            int13 = enum_getvalue(0, 33, 10053, int8);
            int15 = enum_getvalue(33, 0, 1185, OC_UNCERT(int12));
            if ((int13 == 12421)) {
                script1670(int13, int13, int0, int16, string0, string1, string2, string3, string4, string5);
            } else if ((((INV_TOTAL(93 as inv, OC_UNCERT(int13)) > 0) && (INV_TOTAL(93 as inv, OC_UNCERT(int13)) >= item_getparam(OC_UNCERT(int13), 599))) && (STAT_BASE(23 as stat) >= enum_getvalue(0, 0, 1472 as cs2enum, int15)))) {
                script1670(int13, int13, int0, int16, string0, string1, string2, string3, string4, string5);
            } else {
                script1670(enum_getvalue(0, 33, 1184 as cs2enum, int8), int13, int0, int16, string0, string1, string2, string3, string4, string5);
            };
            int16 = (int16 + 1);
            CC_CREATE(int0, 5, int16);
            int16 = (int16 + 1);
            CC_SETSIZE(12, 12, 0, 0);
            CC_SETPOSITION((int5 + 2), (int6 + 38), 0, 0);
            CC_SETOBJECT_NONUM(12183 as obj, 1);
            CC_CREATE(int0, 4, int16);
            int16 = (int16 + 1);
            CC_SETSIZE(31, 12, 0, 0);
            CC_SETPOSITION((int5 + 13), (int6 + 39), 0, 0);
            CC_SETTEXTFONT(66 as fontmetrics);
            CC_SETCOLOUR(16777215);
            CC_SETTEXTALIGN(2, 1, 0);
            CC_SETTEXT(inttostring(MAX(1, item_getparam(int13, 457)), 10));
            CC_SETTEXTSHADOW(true);
            int7 = (int7 + 1);
        };
        int8 = (int8 + 1);
    };
    IF_SETSCROLLSIZE(0, ((1 + (int7 / int1)) * 57), int0);
    return;
}