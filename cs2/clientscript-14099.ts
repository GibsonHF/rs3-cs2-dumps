//
function script14099(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number): void {
    if ((int5 != 1)) {
        return;
    };
    if ((int2 == 0)) {
        IF_SETTEXT(`${OC_NAME(int1)} - Not stored`, 127402010);
    } else {
        IF_SETTEXT(OC_NAME(int1), 127402010);
    };
    IF_SETTEXT("Loading...", 127402011);
    if ((IF_FIND(127402014) == 1)) {
        CC_SETOBJECT_NONUM(int1, -1);
        if (((int2 == 0) || ((MAP_MEMBERS() == 0) && (OC_MEMBERS(int1) == 1)))) {
            CC_SETCOLOUR(5526612);
        } else {
            CC_SETCOLOUR(16777215);
        };
        if ((cc_getparam(6980) == int1)) {
            cc_setparam(6980, -1);
            cc_setparam(6978, 0);
            script14101(127402006, 127402016, 0, int5);
        } else {
            cc_setparam(6980, int1);
            cc_setparam(6978, int3);
            script14101(127402006, 127402016, 1, int5);
        };
        if ((((int2 == 1) && (strcmp(struct_getparam(int0, 6986), "") != 0)) && ((MAP_MEMBERS() == 1) || ((MAP_MEMBERS() == 0) && (OC_MEMBERS(int1) == 0))))) {
            IF_SETONOP(callback(), 127402013);
            IF_SETOP(1, struct_getparam(int0, 6986), 127402013);
            IF_SETONMOUSEOVER(callback(script7793, -2147483645, 29006), 127402013);
            IF_SETONMOUSELEAVE(callback(script7793, -2147483645, 21363), 127402013);
        } else {
            script7794(127402013, 21363);
            IF_SETONOP(callback(), 127402013);
            IF_CLEAROPS(127402013);
            IF_SETONMOUSEOVER(callback(), 127402013);
            IF_SETONMOUSELEAVE(callback(), 127402013);
        };
        if (((int2 == 0) || ((MAP_MEMBERS() == 0) && (OC_MEMBERS(int1) == 1)))) {
            script7794(127402007, 21362);
        } else {
            script7794(127402007, 21361);
        };
    };
    script37(127401987, 127401989, int4, 1);
    return;
}