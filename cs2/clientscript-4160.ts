//
function script4160(int0: component, int1: unknown_int, int2: int): void {
    if ((int2 > 0)) {
        IF_SETONTIMER(callback(script4159, -2147483645, int1, (int2 - 1)), int0);
        return;
    };
    var int3 = 0;
    var int4 = 0;
    if ((CC_FIND(int0, 0) == 1)) {
        int3 = CC_GETTRANS();
        if ((int1 == 0)) {
            int4 = (int3 - 22);
        } else {
            int4 = (int3 + 22);
        };
        int4 = MAX(int4, 0);
        int4 = MIN(int4, 255);
    };
    if ((((int4 == 0) && (int1 == 0)) || ((int4 == 255) && (int1 == 1)))) {
        IF_SETONTIMER(callback(), int0);
    } else {
        IF_SETONTIMER(callback(script4159, -2147483645, int1, 0), int0);
    };
    script4161(int0, int4);
    return;
}