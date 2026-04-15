//
function script12889(int0: struct): [string, string, string, string, string] {
    var int1 = (varclient_5880 / 1440);
    var int2 = (MODULO(varclient_5880, 1440) / 60);
    var int3 = MODULO(varclient_5880, 60);
    var int4 = (59 - varclient_5881);
    var string0 = inttostring(int1, 10);
    var string1 = inttostring(int2, 10);
    var string2 = inttostring(int3, 10);
    var string3 = inttostring(int4, 10);
    var string4 = `${string0}D ${string1}H ${string2}M`;
    var string5 = "<col=CDE1FF>";
    if ((varclient_5880 < 60)) {
        string5 = "<col=DD0000>";
    } else if ((varclient_5880 < 1440)) {
        string5 = "<col=DD4400>";
    };
    if (((varclient_5880 + 1) > 0)) {
        if ((STRING_LENGTH(string0) == 1)) {
            string0 = strconcat("0", string0);
        };
        if ((STRING_LENGTH(string1) == 1)) {
            string1 = strconcat("0", string1);
        };
        if ((STRING_LENGTH(string2) == 1)) {
            string2 = strconcat("0", string2);
        };
        if ((STRING_LENGTH(string3) == 1)) {
            string3 = strconcat("0", string3);
        };
    };
    var int5 = comp(1802, 64);
    var int6 = comp(1802, 66);
    var int7 = comp(1802, 101);
    var int8 = comp(1802, 0);
    var int9 = comp(1802, 74);
    var int10 = comp(1802, 77);
    var int11 = comp(1802, 80);
    var int12 = comp(1802, 83);
    var int13 = script10524(int0);
    if (((int0 == 9802 as struct) || (int0 == 40974 as struct))) {
        int5 = comp(1930, 98);
        int6 = comp(1930, 37);
        int7 = comp(1930, 92);
        int8 = comp(1930, 59);
        int9 = comp(1930, 100);
        int10 = comp(1930, 102);
        int11 = comp(1930, 104);
        int12 = comp(1930, 106);
    };
    if (((((int1 == 0) && (int2 == 0)) && (int3 == 0)) && (int4 == 0))) {
        IF_SETHIDE(true, int5);
        IF_SETHIDE(true, int6);
        if ((struct_getparam(int0, 7898) == 0)) {
            IF_SETHIDE(false, int7);
        };
        IF_SETONTIMER(callback(), int8);
        IF_SETHIDE(1, 118095939);
    };
    IF_SETTEXT(`${string5}${string0}`, int9);
    IF_SETTEXT(`${string5}${string1}`, int10);
    IF_SETTEXT(`${string5}${string2}`, int11);
    IF_SETTEXT(`${string5}${string3}`, int12);
    IF_SETTEXT(string4, int13);
    return [string5, string0, string1, string2, string3];
}