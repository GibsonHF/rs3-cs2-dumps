//
function script6519(): number {
    var int0 = -1;
    if ((unk10993(0) == 1)) {
        int0 = ACTIVECLANCHANNEL_GETUSERSLOT(REMOVETAGS(CHAT_PLAYERNAME_UNFILTERED()));
        if ((ACTIVECLANCHANNEL_GETUSERRANK(int0) >= 103)) {
            return 1;
        };
    };
    return 0;
}