//
function script7711(int0: component, int1: component, int2: component, int3: int, int4: unknown_int): void {
    if (((int0 == comp(-1, 65535)) || (varclient_2235 == comp(-1, 65535)))) {
        return;
    };
    if ((CC_FIND(comp(1411, 0), int3) == 1)) {
        if ((int0 != varclient_2235)) {
            script7716(int1, int2, int3, int4, CC_GETTEXT());
            return;
        };
        varclient_2250 = "";
        CC_SETHIDE(true);
        IF_SETHIDE(false, int1);
        IF_SETHIDE(false, comp(1411, 57));
        IF_SETPOSITION(CC_GETX(), CC_GETY(), 0, 0, comp(1411, 57));
        IF_SETONKEY(callback(script7717, -2147483640, -2147483639, int0, int1, int2, int3, int4), int1);
        IF_SETONCLICK(callback(script7212, -2147483647, int1, int2), int1);
        script7213(int1, int2);
        IF_SETONDIALOGABORT(callback(script7714, int0, int1, int2, int3, int4), int1);
        IF_SETHIDE(0, int4);
        IF_SETONCLICK(callback(script7714, int0, int1, int2, int3, int4), int4);
    };
    return;
}