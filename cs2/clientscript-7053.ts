//
function script7053(int0: component, int1: int, int2: unknown_int, int3: unknown_int): void {
    if ((CC_FIND(int0, int1) == 1)) {
        CC_SETFILL(0);
        if ((int3 == 1)) {
            CC_SETCOLOUR(16776960);
        } else {
            CC_SETCOLOUR(16711680);
        };
        if ((int2 == 1)) {
            CC_SETTRANS(MIN((CC_GETTRANS() + 5), 255));
            if ((CC_GETTRANS() >= 255)) {
                var int2 = 0;
            };
        } else {
            CC_SETTRANS(MAX((CC_GETTRANS() - 5), 0));
            if ((CC_GETTRANS() <= 0)) {
                int2 = 1;
            };
        };
        CC_SETONTIMER(callback(script7053, int0, int1, int2, int3));
    };
    return;
}