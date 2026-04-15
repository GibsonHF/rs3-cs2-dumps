//
function script6168(): void {
    var int0 = 0;
    var int1 = 10;
    IF_SETHIDE(false, comp(1273, 15));
    script6177(comp(1273, 15));
    int1 = script6178(int1, comp(1273, 15));
    while ((int0 < 10)) {
        if ((CC_FIND(comp(1273, 15), int0) == 1)) {
            CC_SENDTOFRONT();
        };
        int0 = (int0 + 1);
    };
    return;
}