//
function script5394(): unknown_int {
    if ((strcmp(varclient_2353, REMOVETAGS(CHAT_PLAYERNAME_UNFILTERED())) == 0)) {
        return 1;
    };
    var int0 = ACTIVECLANCHANNEL_GETUSERSLOT(REMOVETAGS(CHAT_PLAYERNAME_UNFILTERED()));
    if ((int0 < 0)) {
        return 0;
    };
    var int1 = ACTIVECLANCHANNEL_GETUSERRANK(int0);
    if ((script5963(int1) == 1)) {
        return 1;
    };
    return 0;
}