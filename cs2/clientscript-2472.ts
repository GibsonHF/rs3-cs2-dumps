//
function script2472(int0: component, int1: component, int2: component, int3: component, int4: component, int5: component, int6: obj, int7: obj, int8: cs2enum): void {
    if ((int7 == -1 as obj)) {
        if ((int6 == -1 as obj)) {
            IF_SETHIDE(true, int0);
            IF_SETHIDE(true, int2);
            IF_SETHIDE(true, int5);
            IF_SETPOSITION((IF_GETX(enum_getvalue(0, 9, int8, 0)) - 10), (IF_GETY(enum_getvalue(0, 9, int8, 0)) - 10), 0, 0, int4);
            return;
        };
        var int7 = 20210 as obj;
    } else if ((int6 == -1 as obj)) {
        var int6 = 20210 as obj;
    };
    IF_SETHIDE(false, int0);
    IF_SETHIDE(false, int2);
    IF_SETHIDE(false, int5);
    var int9 = IF_GETX(enum_getvalue(0, 9, int8, item_getparam(int6, 359)));
    var int10 = IF_GETX(enum_getvalue(0, 9, int8, item_getparam(int7, 359)));
    var int11 = 0;
    var int12 = -1 as obj;
    if ((int9 > int10)) {
        int12 = int7;
        int7 = int6;
        int6 = int12;
        int11 = int10;
        int10 = int9;
        int9 = int11;
    };
    var int13 = IF_GETY(enum_getvalue(0, 9, int8, item_getparam(int6, 359)));
    var int14 = IF_GETY(enum_getvalue(0, 9, int8, item_getparam(int7, 359)));
    var int15 = (int10 - int9);
    var int16 = 0;
    IF_SETPOSITION((int9 - 10), (int13 - 10), 0, 0, int0);
    IF_SETPOSITION((int10 - 10), (int14 - 10), 0, 0, int2);
    if ((IF_FIND(int1) == 1)) {
        CC_SETPARAM_STRING(718, script4126(script718(item_getparam(int6, 359))));
        CC_SETCOLOUR(script718(item_getparam(int6, 359)));
    };
    if ((IF_FIND(int3) == 1)) {
        CC_SETPARAM_STRING(718, script4126(script718(item_getparam(int7, 359))));
        CC_SETCOLOUR(script718(item_getparam(int7, 359)));
    };
    var int17 = 0;
    var int18 = 0;
    var int19 = (item_getparam(int6, 358) + item_getparam(int7, 358));
    if ((int13 < int14)) {
        int16 = (int14 - int13);
        IF_SETPOSITION(int9, int13, 0, 0, int5);
        IF_SETLINEDIRECTION(0, int5);
        int11 = 1;
    } else {
        int16 = (int13 - int14);
        IF_SETPOSITION(int9, int14, 0, 0, int5);
        IF_SETLINEDIRECTION(1, int5);
        int11 = -1;
    };
    IF_SETSIZE(int15, int16, 0, 0, int5);
    if ((int6 == 20210 as obj)) {
        int17 = ((int9 + ((int15 * item_getparam(int7, 358)) / (2 * int19))) - 10);
        int18 = ((int13 + (int11 * ((int16 * item_getparam(int7, 358)) / (2 * int19)))) - 10);
    } else if ((int7 == 20210 as obj)) {
        int17 = ((int9 + ((int15 * ((2 * item_getparam(int7, 358)) + item_getparam(int6, 358))) / (2 * int19))) - 10);
        int18 = ((int13 + (int11 * ((int16 * ((2 * item_getparam(int7, 358)) + item_getparam(int6, 358))) / (2 * int19)))) - 10);
    } else {
        int17 = ((int9 + ((int15 * item_getparam(int7, 358)) / int19)) - 10);
        int18 = ((int13 + (int11 * ((int16 * item_getparam(int7, 358)) / int19))) - 10);
    };
    IF_SETPOSITION(int17, int18, 0, 0, int4);
    return;
}