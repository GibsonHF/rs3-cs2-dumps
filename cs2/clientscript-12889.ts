//
function script12889(int0: number): [string, string, string, string, string] {
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
    var int5 = 118095936;
    var int6 = 118095938;
    var int7 = 118095973;
    var int8 = 118095872;
    var int9 = 118095946;
    var int10 = 118095949;
    var int11 = 118095952;
    var int12 = 118095955;
    var int13 = script10524(int0);
    if (((int0 == 9802) || (int0 == 40974))) {
        int5 = 126484578;
        int6 = 126484517;
        int7 = 126484572;
        int8 = 126484539;
        int9 = 126484580;
        int10 = 126484582;
        int11 = 126484584;
        int12 = 126484586;
    };
    if (((((int1 == 0) && (int2 == 0)) && (int3 == 0)) && (int4 == 0))) {
        IF_SETHIDE(1, int5);
        IF_SETHIDE(1, int6);
        if ((struct_getparam(int0, 7898) == 0)) {
            IF_SETHIDE(0, int7);
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