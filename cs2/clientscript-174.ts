//
function script174(int0: int, int1: boolean, int2: int, string0: string): unknown_int {
    if ((script6431() == true)) {
        printmessage("Quick Chat is currently disabled on mobile.");
        return 0;
    };
    var int3 = -1;
    var int4 = -1;
    var int5 = -1;
    var int6 = -1;
    var int7 = -1;
    var int8 = -1;
    var int9 = -1;
    if ((varclient_1413 == false)) {
        return 0;
    };
    if (((int0 == 2) && (strcmp("", CLAN_GETCHATDISPLAYNAME()) == 0))) {
        MES_TYPED(11, 0, "You need to be in a Friends Chat channel to use Friends Channel Quick Chat.");
        return 0;
    };
    if ((int0 == 8)) {
        [int3, int4, int5, int6, int7, int8, int9] = script4590();
        if ((int3 < 0)) {
            MES_TYPED(43, 0, "You need to be in a Clan to use Clan Channel Quick Chat.");
            return 0;
        };
        if ((int4 < int5)) {
            MES_TYPED(43, 0, "Your rank is not high enough to talk in your Clan Chat.");
            return 0;
        };
        if ((int6 == 1)) {
            MES_TYPED(43, 0, "You've been muted by your Clan and can't talk in your Clan Chat.");
            return 0;
        };
    };
    if (((int0 == 10) && (ACTIVECLANCHANNEL_FIND_LISTENED() == 0))) {
        MES_TYPED(46, 0, "You need to be a guest in a Clan Channel to use Guest Clan Quick Chat.");
        return 0;
    };
    if ((((int0 == 13) || (int0 == 15)) && (PLAYER_GROUP_FIND() == 0))) {
        MES_TYPED(128, 0, "You need to be in a group to use Group Quick Chat.");
        return 0;
    };
    if (((int0 == 17) && ((script19316() == false) || (unk10993(1) == 0)))) {
        MES_TYPED(144, 0, "Group Ironman chat is currently unavailable.");
        return 0;
    };
    IF_SETHIDE(true, script8585(int2));
    IF_SETHIDE(false, script8586(int2));
    IF_SETHIDE(true, script8588(int2));
    IF_SETHIDE(true, script8590(int2));
    IF_SETHIDE(true, script8594(int2));
    IF_SETHIDE(false, script8598(int2));
    IF_SETHIDE(false, script8599(int2));
    IF_SETHIDE(true, script8600(int2));
    IF_SETSCROLLPOS(0, 0, script8598(int2));
    script8614(int2, int0);
    script8606(int2, string0);
    script8616(int2, int1);
    script8543(int2);
    IF_SETONCLICK(callback(script8545, int2), script8586(int2));
    return 1;
}