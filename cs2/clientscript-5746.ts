//
function script5746(int0: component, int1: int, int2: int, int3: int): void {
    var int4 = -1;
    if ((CC_FIND(int0, int1) == 1)) {
        int4 = cc_getparam(6805);
    };
    var int5 = -1;
    var int6 = -1;
    while ((int5++ < int2)) {
        if ((CC_FIND(int0, int5) == 1)) {
            int6 = cc_getparam(6805);
            if (((int6 != -1) && (CC_FIND(int0, int6) == 1))) {
                if ((int5 == int1)) {
                    CC_SETHIDE(false);
                } else {
                    CC_SETHIDE(true);
                };
            };
        };
    };
    var int7 = -1 as struct;
    var string0 = "null";
    var int8 = 0;
    var int9 = 0;
    int7 = script5750(int3);
    [int8, int9] = script5752(int3);
    if ((int8 == 1)) {
        string0 = "You have completed this challenge for this week. Check the minigames tracker in the adventures interface to see when it will reset.";
    } else {
        if ((struct_getparam(int7, 6453) == true)) {
            IF_SETHIDE(true, comp(1867, 53));
            IF_SETHIDE(false, comp(1867, 52));
            IF_SETONMOUSEREPEAT(callback(), comp(1867, 53));
            return;
        };
        string0 = "You cannot start this challenge from this portal. Please use the other portal.";
    };
    script3536(string0, comp(1867, 53), -1);
    IF_SETHIDE(false, comp(1867, 53));
    IF_SETHIDE(true, comp(1867, 52));
    return;
}