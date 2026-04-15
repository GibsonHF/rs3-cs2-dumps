//
function script13347(int0: int, int1: int, string0: string): unknown_int {
    var int2 = -1;
    var int3 = -1;
    var int4 = -1;
    var int5 = -1;
    var int6 = -1;
    var int7 = -1;
    var int8 = -1;
    if ((varclient_1413 == false)) {
        return 0;
    };
    if (((int0 == 2) && (strcmp("", CLAN_GETCHATDISPLAYNAME()) == 0))) {
        MES_TYPED(11, 0, "You need to be in a Friends Chat channel to use Friends Channel Quick Chat.");
        return 0;
    };
    if ((int0 == 8)) {
        [int2, int3, int4, int5, int6, int7, int8] = script4590();
        if ((int2 < 0)) {
            MES_TYPED(43, 0, "You need to be in a Clan to use Clan Channel Quick Chat.");
            return 0;
        };
        if ((int3 < int4)) {
            MES_TYPED(43, 0, "Your rank is not high enough to talk in your Clan Chat.");
            return 0;
        };
        if ((int5 == 1)) {
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
    script8614(int1, int0);
    script8606(int1, string0);
    return 1;
}