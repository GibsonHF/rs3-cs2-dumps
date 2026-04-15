//
function script4581(int0: int): void {
    var int1 = -1;
    var int2 = -1;
    if (((unk10993(0) == 1) && (unk10986(0) == 1))) {
        int1 = ACTIVECLANCHANNEL_GETUSERSLOT(REMOVETAGS(CHAT_PLAYERNAME_UNFILTERED()));
        if ((int1 >= 0)) {
            int2 = ACTIVECLANCHANNEL_GETUSERRANK(int1);
            if ((int2 >= 100)) {
                varclient_2510 = unk11019(int0);
            };
        };
    };
    return;
}