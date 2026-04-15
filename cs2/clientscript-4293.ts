//
function script4293(): int {
    var int0 = -1;
    if ((unk10993(0) == 1)) {
        int0 = ACTIVECLANCHANNEL_GETUSERSLOT(REMOVETAGS(CHAT_PLAYERNAME_UNFILTERED()));
        if ((int0 != -1)) {
            return ACTIVECLANCHANNEL_GETUSERRANK(int0);
        };
    };
    return -1;
}