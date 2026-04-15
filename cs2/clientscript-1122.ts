//
function script1122(int0: component, int1: component, int2: component, int3: component, int4: component, int5: component, int6: int, int7: component, int8: component, int9: component, int10: component, int11: component, int12: component, int13: component, int14: component, int15: component, int16: component, int17: component, int18: component, int19: unknown_int, int20: unknown_int, string0: string, string1: string, string2: string, string3: string, string4: string): void {
    IF_SETHIDE(false, int0);
    script8421(int1, int2, int3, int4, string0, 21255 as struct, -1, 1, -1 as graphic, -1 as struct);
    if ((int4 != comp(-1, 65535))) {
        IF_SETOP(1, "Close", int4);
        IF_SETONOP(callback(script1175, int6), int4);
    };
    var int21 = IF_GETLAYER(int7);
    if ((strcmp("", string2) != 0)) {
        IF_SETHIDE(false, int21);
        if ((strcmp("", string3) != 0)) {
            IF_SETPOSITION(1, 5, 2, 2, int21);
        } else {
            IF_SETPOSITION(0, 0, 1, 1, int21);
        };
        script1141(int7, int8, int9, int10, int11, string2, 28553 as struct);
        IF_SETONOP(callback(script1176, int6), int10);
    } else {
        IF_SETHIDE(true, int21);
    };
    int21 = IF_GETLAYER(int12);
    if ((strcmp("", string3) != 0)) {
        IF_SETHIDE(false, int21);
        if ((strcmp("", string2) != 0)) {
            IF_SETPOSITION(1, 5, 0, 2, int21);
        } else {
            IF_SETPOSITION(0, 0, 1, 1, int21);
        };
        script1141(int12, int13, int14, int15, int16, string3, 28554 as struct);
        IF_SETONOP(callback(script1175, int6), int15);
    } else {
        IF_SETHIDE(true, int21);
    };
    var int22 = 21255;
    var int23 = (struct_getparam(int22, 3547) + struct_getparam(int22, 3549));
    if ((strcmp("", string4) != 0)) {
        IF_SETTEXT(string4, int17);
        IF_SETHIDE(false, int17);
        IF_SETHIDE(false, int18);
        IF_SETONVARTRANSMIT(callback(script10192, int6, int19, int20, 3680, 1), int18);
    } else {
        IF_SETHIDE(true, int17);
        IF_SETHIDE(true, int18);
    };
    script7134(int3, string1, 26, 16777215, 5, 5, (IF_GETWIDTH(int3) - 10), 0);
    if ((CC_FIND(int3, 0) == 1)) {
        int23 = (int23 + ((2 * CC_GETY()) + CC_GETHEIGHT()));
    };
    if ((IF_GETHIDE(int17) == false)) {
        int23 = (int23 + IF_GETHEIGHT(int5));
    } else {
        int23 = (int23 + (IF_GETHEIGHT(int5) - IF_GETHEIGHT(int17)));
    };
    var string1 = `<br>${string1}<br>`;
    IF_SETSIZE(IF_GETWIDTH(int0), int23, 0, 0, int0);
    return;
}