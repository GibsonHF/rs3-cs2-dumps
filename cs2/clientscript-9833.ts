//
function script9833(int0: component, int1: component, int2: component, int3: component, int4: component, int5: unknown_int, int6: unknown_int): void {
    if (((int0 == comp(-1, 65535)) || (varclient_2235 == comp(-1, 65535)))) {
        return;
    };
    if ((int0 != varclient_2235)) {
        script7207(int1, int2, int3, int4, IF_GETTEXT(int3), 3);
        return;
    };
    IF_SETHIDE(true, int3);
    IF_SETHIDE(false, int1);
    if ((int5 == 0)) {
        varclient_2250 = "";
    } else {
        IF_SETTEXT(ESCAPE(varclient_2250), int1);
    };
    var int7 = 0;
    if (((varclient_2236 == 7) || (varclient_2236 == 11))) {
        int7 = 1;
    };
    script1566(int7, varclient_2250, varclient_2237);
    script8841(11, 1);
    IF_SETONKEY(callback(script7211, -2147483640, -2147483639, int0, int1, int2, int3, int4, int6), int1);
    IF_SETONCLICK(callback(script7212, -2147483647, int1, int2), int1);
    script7213(int1, int2);
    if ((int6 == 1)) {
        IF_SETONDIALOGABORT(callback(script12425, int0, int1, int2, int3, int4), int1);
    } else {
        IF_SETONDIALOGABORT(callback(script7205, int0, int1, int2, int3, int4), int1);
    };
    var int8 = -1;
    var int9 = 13;
    IF_SETHIDE(false, int4);
    if ((IF_FIND(int4) == 1)) {
        int9 = cc_getparam(6305);
    };
    IF_SETONCLICK(callback(script13119, int9, int8, int0, int1, int2, int3, int4, int6), int4);
    script10520(int1);
    return;
}