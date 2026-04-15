//
function script4411(int0: component, int1: int, int2: unknown_int, int3: int): void {
    if ((int0 == comp(-1, 65535))) {
        return;
    };
    var int4 = 0;
    var int5 = 0;
    if ((CC_FIND(int0, int1) == 1)) {
        int4 = CC_GETTRANS();
        if ((int3 == 0)) {
            if ((int2 == 1)) {
                int5 = (int4 + 22);
            } else if ((int2 == 0)) {
                int5 = (int4 - 22);
            } else {
                CC_SETONTIMER(callback());
                return;
            };
            int5 = MAX(int5, 0);
            int5 = MIN(int5, 255);
            CC_SETTRANS(int5);
            if ((((int2 == 1) && (int5 == 255)) || ((int2 == 0) && (int5 == 0)))) {
                CC_SETONTIMER(callback());
            } else {
                CC_SETONTIMER(callback(script4411, int0, int1, int2, 0));
            };
        } else {
            IF_SETONTIMER(callback(script4411, int0, int1, int2, (int3 - 1)), int0);
        };
    };
    return;
}