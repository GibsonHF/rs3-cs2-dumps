//
function script6872(int0: number, int1: number): void {
    if ((CC_FIND(comp(1360, 0), int0) == 1)) {  // oct_event_if:text_layer
        if ((int1 == 1)) {
            CC_SETCOLOUR(16777215);
        } else {
            CC_SETCOLOUR(16711680);
        };
    };
    if ((CC_FIND(comp(1360, 0), (int0 + 1)) == 1)) {  // oct_event_if:text_layer
        if ((int1 == 1)) {
            CC_SETCOLOUR(16777215);
        } else {
            CC_SETCOLOUR(16711680);
        };
    };
    if ((CC_FIND(comp(1360, 0), (int0 + 2)) == 1)) {  // oct_event_if:text_layer
        if ((int1 == 1)) {
            CC_SETCOLOUR(16777215);
        } else {
            CC_SETCOLOUR(16711680);
        };
    };
    script41(89128962);
    return;
}