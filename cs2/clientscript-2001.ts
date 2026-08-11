//
function script2001(int0: number): void {
    var int1 = script2119();
    var int2 = 0;
    CC_DELETEALL(comp(267, 76));  // qps:claim_layer_build
    IF_SETSIZE((20 + (110 * int1)), 0, 0, 1, comp(267, 76));  // qps:claim_layer_build
    IF_SETSCROLLSIZE((20 + (110 * int1)), 0, comp(267, 75));  // qps:claim_layer
    IF_SETHIDE(false, comp(267, 77));  // qps:claim_scrollbar
    script1706(17498189, 17498187, IF_GETSCROLLX(comp(267, 75)));  // qps:claim_layer
    if (((int1 == 0) || (int0 == 0))) {
        IF_SETTEXT("You have no more rewards to claim at the minute. Gain more quest points to unlock further rewards.", comp(267, 78));  // qps:claim_text
        IF_SETHIDE(true, comp(267, 77));  // qps:claim_scrollbar
        script13971(17498193, 17498194, 28553, "Claim now", 1);
    } else {
        int2 = script2116();
        script2118(int2);
        if ((int1 < 3)) {
            IF_SETHIDE(true, comp(267, 77));  // qps:claim_scrollbar
        };
        if ((int0 == -1)) {
            IF_SETTEXT("Not enough inventory space", comp(267, 79));  // qps:claim_warning
        };
    };
    return;
}