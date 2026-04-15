//
function script11443(): void {
    var int0 = comp(779, 42);
    var int1 = comp(779, 0);
    var int2 = comp(779, 1);
    CC_DELETEALL(int1);
    script11440();
    IF_SETHIDE(true, comp(779, 44));
    IF_SETTEXT("", comp(779, 47));
    IF_SETSCROLLSIZE(0, 0, comp(779, 43));
    IF_SETSCROLLPOS(0, 0, comp(779, 43));
    switch (varplayer_5428) {
        case 379: {
            IF_SETHIDE(false, comp(779, 10));
            break;
        }
        case 380: {
            IF_SETHIDE(false, comp(779, 19));
            break;
        }
        case 10014: {
            IF_SETHIDE(false, comp(779, 28));
            break;
        }
        case 10015: {
            IF_SETHIDE(false, comp(779, 37));
            break;
        }
    };
    var int3 = ENUM_GETOUTPUTCOUNT(varplayer_5428);
    var int4 = (int3 / 2);
    if ((MODULO(int3, 2) != 0)) {
        int4 = (int4 + 1);
    };
    var int5 = (int4 * (43 + 5));
    var int6 = IF_GETWIDTH(int0);
    if ((int5 >= IF_GETHEIGHT(int0))) {
        int6 = (int6 - 16);
        IF_SETSCROLLSIZE(0, int5, comp(779, 43));
        script7791(comp(779, 44), comp(779, 43));
        IF_SETHIDE(false, comp(779, 44));
    };
    var int7 = (int6 / 2);
    var int8 = 5;
    var int9 = 5;
    var int10 = (int7 - (5 * 2));
    var int11 = 43;
    var int12 = -1 as obj;
    var int13 = 0;
    var int14 = 0;
    var int15 = 0;
    var int16 = 0;
    var int17 = false;
    var int18 = varplayer_6534;
    while ((int13 < int3)) {
        int12 = enum_getvalue(0, 33, varplayer_5428, int13);
        if ((int12 == -1 as obj)) {
            return;
        };
        script10764(int1, 21361 as struct, int8, int9, int10, int11, -1);
        CC_CREATE(int1, 5, IF_GETNEXTSUBID(int1));
        CC_SETPOSITION((int8 + 5), (int9 + ((int11 - 32) / 2)), 0, 0);
        CC_SETSIZE(36, 32, 0, 0);
        CC_SETOBJECT_NONUM(int12, 5);
        int14 = ((CC_GETX() + CC_GETWIDTH()) + 5);
        int15 = CC_GETWIDTH();
        CC_CREATE(int1, 4, IF_GETNEXTSUBID(int1));
        CC_SETPOSITION(int14, (int9 + 2), 0, 0);
        CC_SETSIZE((((int10 - int15) - 5) - 50), 20, 0, 0);
        CC_SETTEXTFONT(27 as fontmetrics);
        CC_SETCOLOUR(script693(255, 203, 5));
        CC_SETTEXT(OC_NAME(int12));
        CC_CREATE(int1, 4, IF_GETNEXTSUBID(int1));
        CC_SETPOSITION(int14, (int9 + ((int11 - 10) - 5)), 0, 0);
        CC_SETSIZE((((int10 - int15) - 5) - 50), 10, 0, 0);
        CC_SETTEXTFONT(26 as fontmetrics);
        CC_SETCOLOUR(script693(255, 255, 255));
        CC_SETTEXT(strconcat(inttostring(enum_getvalue(33, 0, 1680 as cs2enum, int12), 10), " tokens"));
        if (((enum_getvalue(33, 0, 1680 as cs2enum, int12) > int18) || (((OC_MEMBERS(int12) == 1) && (MAP_MEMBERS() == 0)) || ((script4148() == true) && (script10907(int12) == 0))))) {
            int17 = true;
        } else {
            int17 = false;
        };
        int16 = script10410(int1, int2, 28556 as struct, (int8 + ((int10 - 80) - (5 * 2))), (int9 + ((int11 - 20) - 5)), 80, 20, int16, int17, "Buy");
        if ((CC_FIND(int2, (int16 - 1)) == 1)) {
            CC_SETOP(1, "Buy 1");
            CC_SETOP(2, "Buy X");
        };
        if ((MODULO(++int13, 2) == 0)) {
            int9 = ((int9 + int11) + 5);
            int8 = 5;
        } else {
            int8 = (int7 + 5);
        };
    };
    return;
}