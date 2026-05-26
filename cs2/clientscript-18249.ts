//
function script18249(): number {
    var int0 = 5;
    var int1 = -1;
    var int2 = 0;
    var int3 = 0;
    while ((int0 > 0)) {
        int1 = script16319(int0);
        if ((int1 != -1)) {
            if ((script16442(int0) >= struct_getparam(int1, 2235))) {
                int2 = 1;
                int0 = 1;
            };
            int3 = 1;
        };
        int0 = (int0 - 1);
    };
    script7853(88014864, 0, 0, 0, 0, 0, 0, 0, 1, 1, 17062, "Claim Rewards", int2, 1, 0, 0);
    CC_SETONOP(callback());
    if ((int2 == 0)) {
        CC_CLEAROPS();
        script3537("You do not currently have any daily challenges ready to hand in for a reward.");
    } else {
        CC_SETOP(1, "Claim Rewards");
        if ((script6431() == 0)) {
            script3537("Hand in all completed daily challenges for their reward.");
        };
    };
    return int3;
}