//
function script4996(int0: unknown_int): void {
    var int1 = -1;
    var int2 = -1;
    var int3 = 0;
    var int4 = -1;
    var int5 = -1;
    var int6 = -1;
    IF_SETHIDE(false, comp(1261, 241));
    if ((CLANPROFILE_FIND() == 1)) {
        script4899(1);
        int2 = script4963(int0);
        varbitplayer_6677 = int2;
        if ((int2 <= 0)) {
            printmessage("You must first select a building.");
            return;
        };
        int1 = script4948(int2);
        int4 = script4954(int2);
        if ((int4 == -1)) {
            return;
        };
        int5 = script4955(int2);
        if ((int5 == -1)) {
            return;
        };
        if ((int1 > 0)) {
            int3 = script4959(int1);
        };
        script4988(varbitplayer_6677);
        script4937();
    };
    return;
}