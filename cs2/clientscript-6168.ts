//
function script6168(): void {
    var int0 = 0;
    var int1 = 10;
    IF_SETHIDE(0, 83427343);
    script6177(83427343);
    int1 = script6178(int1, 83427343);
    while ((int0 < 10)) {
        if ((CC_FIND(83427343, int0) == 1)) {
            CC_SENDTOFRONT();
        };
        int0 = (int0 + 1);
    };
    return;
}