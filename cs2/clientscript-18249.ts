//
function script18249(): unknown_int {
    var int0 = 5;
    var int1 = -1 as struct;
    var int2 = false;
    var int3 = 0;
    while ((int0 > 0)) {
        int1 = script16319(int0);
        if ((int1 != -1 as struct)) {
            if ((script16442(int0) >= struct_getparam(int1, 2235))) {
                int2 = true;
                int0 = 1;
            };
            int3 = 1;
        };
        int0 = (int0 - 1);
    };
    script7853(comp(1343, 16), 0, 0, 0, 0, 0, 0, 0, 1, 1, 17062 as dbrow, "Claim Rewards", int2, 1, false, false);
    CC_SETONOP(callback());
    if ((int2 == 0)) {
        CC_CLEAROPS();
        script3537("You do not currently have any daily challenges ready to hand in for a reward.");
    } else {
        CC_SETOP(1, "Claim Rewards");
        if ((script6431() == false)) {
            script3537("Hand in all completed daily challenges for their reward.");
        };
    };
    return int3;
}