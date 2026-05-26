//
function script6166(): void {
    var int0 = 0;
    var int1 = ENUM_GETOUTPUTCOUNT(5838);
    IF_SETHIDE(0, 83427342);
    while ((int0 < ENUM_GETOUTPUTCOUNT(5838))) {
        CC_CREATE(83427342, 5, int0);
        int0 = (int0 + 1);
    };
    int1 = script6173(int1, 83427342);
    int0 = 0;
    while ((int0 < (ENUM_GETOUTPUTCOUNT(5838) / 2))) {
        if ((CC_FIND(83427342, int0) == 1)) {
            CC_SENDTOFRONT();
            int1 = script6172(int0, int1);
        };
        int0 = (int0 + 1);
    };
    IF_SETONTIMER(callback(script6167, 0, int1), 83427342);
    return;
}