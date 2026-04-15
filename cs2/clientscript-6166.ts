//
function script6166(): void {
    var int0 = 0;
    var int1 = ENUM_GETOUTPUTCOUNT(5838 as cs2enum);
    IF_SETHIDE(false, comp(1273, 14));
    while ((int0 < ENUM_GETOUTPUTCOUNT(5838 as cs2enum))) {
        CC_CREATE(comp(1273, 14), 5, int0);
        int0 = (int0 + 1);
    };
    int1 = script6173(int1, comp(1273, 14));
    int0 = 0;
    while ((int0 < (ENUM_GETOUTPUTCOUNT(5838 as cs2enum) / 2))) {
        if ((CC_FIND(comp(1273, 14), int0) == 1)) {
            CC_SENDTOFRONT();
            int1 = script6172(int0, int1);
        };
        int0 = (int0 + 1);
    };
    IF_SETONTIMER(callback(script6167, 0, int1), comp(1273, 14));
    return;
}