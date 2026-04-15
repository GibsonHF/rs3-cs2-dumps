//
function script14099(int0: struct, int1: obj, int2: unknown_int, int3: unknown_int, int4: int, int5: unknown_int): void {
    if ((int5 != 1)) {
        return;
    };
    if ((int2 == 0)) {
        IF_SETTEXT(`${OC_NAME(int1)} - Not stored`, comp(1944, 26));
    } else {
        IF_SETTEXT(OC_NAME(int1), comp(1944, 26));
    };
    IF_SETTEXT("Loading...", comp(1944, 27));
    if ((IF_FIND(comp(1944, 30)) == 1)) {
        CC_SETOBJECT_NONUM(int1, -1);
        if (((int2 == 0) || ((MAP_MEMBERS() == 0) && (OC_MEMBERS(int1) == 1)))) {
            CC_SETCOLOUR(5526612);
        } else {
            CC_SETCOLOUR(16777215);
        };
        if ((cc_getparam(6980) == int1)) {
            cc_setparam(6980, -1);
            cc_setparam(6978, 0);
            script14101(comp(1944, 22), 127402016, 0, int5);
        } else {
            cc_setparam(6980, int1);
            cc_setparam(6978, int3);
            script14101(comp(1944, 22), 127402016, 1, int5);
        };
        if ((((int2 == 1) && (strcmp(struct_getparam(int0, 6986), "") != 0)) && ((MAP_MEMBERS() == 1) || ((MAP_MEMBERS() == 0) && (OC_MEMBERS(int1) == 0))))) {
            IF_SETONOP(callback(), comp(1944, 29));
            IF_SETOP(1, struct_getparam(int0, 6986), 127402013);
            IF_SETONMOUSEOVER(callback(script7793, -2147483645, 29006), 127402013);
            IF_SETONMOUSELEAVE(callback(script7793, -2147483645, 21363), 127402013);
        } else {
            script7794(comp(1944, 29), 21363 as struct);
            IF_SETONOP(callback(), comp(1944, 29));
            IF_CLEAROPS(127402013);
            IF_SETONMOUSEOVER(callback(), 127402013);
            IF_SETONMOUSELEAVE(callback(), 127402013);
        };
        if (((int2 == 0) || ((MAP_MEMBERS() == 0) && (OC_MEMBERS(int1) == 1)))) {
            script7794(comp(1944, 23), 21362 as struct);
        } else {
            script7794(comp(1944, 23), 21361 as struct);
        };
    };
    script37(comp(1944, 3), comp(1944, 5), int4, 1);
    return;
}