//
function script5218(int0: component, int1: component, int2: unknown_int, int3: int, int4: component): void {
    var int5 = 0;
    var int6 = 0;
    IF_SETHIDE(false, IF_GETPARENTLAYER(int0));
    if ((int3 > 0)) {
        IF_SETONTIMER(callback(script5218, int0, int1, int2, (int3 - 1), int4), int4);
        return;
    };
    if ((CC_FIND(int0, 0) == 1)) {
        int5 = CC_GETTRANS();
        if ((int2 == 0)) {
            int6 = (int5 - 22);
        } else {
            int6 = (int5 + 22);
        };
        int6 = MAX(int6, 0);
        int6 = MIN(int6, 255);
    };
    script4161(int0, int6);
    script4161(int1, int6);
    if (((int6 == 0) && (int2 == 0))) {
        IF_SETONTIMER(callback(), int4);
    } else if (((int6 == 255) && (int2 == 1))) {
        IF_SETONTIMER(callback(), int4);
        IF_SETHIDE(1, IF_GETPARENTLAYER(int0));
    } else {
        IF_SETONTIMER(callback(script5218, int0, int1, int2, 0, int4), int4);
    };
    return;
}