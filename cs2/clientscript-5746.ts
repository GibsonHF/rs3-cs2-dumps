//
function script5746(int0: number, int1: number, int2: number, int3: number): void {
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
                    CC_SETHIDE(0);
                } else {
                    CC_SETHIDE(1);
                };
            };
        };
    };
    var int7 = -1;
    var string0 = "null";
    var int8 = 0;
    var int9 = 0;
    int7 = script5750(int3);
    [int8, int9] = script5752(int3);
    if ((int8 == 1)) {
        string0 = "You have completed this challenge for this week. Check the minigames tracker in the adventures interface to see when it will reset.";
    } else {
        if ((struct_getparam(int7, 6453) == true)) {
            IF_SETHIDE(1, 122355765);
            IF_SETHIDE(0, 122355764);
            IF_SETONMOUSEREPEAT(callback(), 122355765);
            return;
        };
        string0 = "You cannot start this challenge from this portal. Please use the other portal.";
    };
    script3536(string0, 122355765, -1);
    IF_SETHIDE(0, 122355765);
    IF_SETHIDE(1, 122355764);
    return;
}