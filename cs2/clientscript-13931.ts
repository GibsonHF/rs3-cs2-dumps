//
function script13931(int0: component, int1: int, int2: int, int3: int): void {
    if ((MODULO(CLIENTCLOCK(), 5) != 0)) {
        return;
    };
    var int4 = 0;
    var int5 = 0;
    if ((CC_FIND(int0, int1) == 1)) {
        int4 = CC_GETTRANS();
        if (((int4 == 0) && (int2 < 0))) {
            CC_SETONTIMER(callback(script13931, int0, int1, (int2 * -1), int3));
        };
        if ((int4 == 255)) {
            if ((int3 == -1)) {
                CC_SETONTIMER(callback());
                return;
            };
            var int3 = (int3 - 1);
            if ((int2 > 0)) {
                CC_SETONTIMER(callback(script13931, int0, int1, (int2 * -1), int3));
            };
        };
        int5 = MAX(MIN((int4 + int2), 255), 0);
        CC_SETTRANS(int5);
    };
    return;
}