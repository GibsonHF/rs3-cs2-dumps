//
function script4468(): unknown_int {
    var int0 = -1;
    var int1 = -1;
    int1 = ACTIVECLANCHANNEL_GETUSERSLOT(REMOVETAGS(CHAT_PLAYERNAME_UNFILTERED()));
    if ((int1 >= 0)) {
        int0 = ACTIVECLANCHANNEL_GETUSERRANK(int1);
        if ((int0 >= ACTIVECLANCHANNEL_GETRANKKICK())) {
            return 1;
        };
    };
    return 0;
}