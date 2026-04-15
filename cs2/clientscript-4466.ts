//[proc,clan_chat_kick]
function script4466(string0: string): void {
    var int0 = ACTIVECLANCHANNEL_GETUSERSLOT(string0);
    if ((int0 < 0)) {
        MES_TYPED(43, 0, "Could not find that guest to kick from your Clan Chat.");
        return;
    };
    var int1 = ACTIVECLANCHANNEL_GETUSERRANK(int0);
    var int2 = ACTIVECLANCHANNEL_GETUSERSLOT(REMOVETAGS(CHAT_PLAYERNAME_UNFILTERED()));
    if ((int2 == int0)) {
        MES_TYPED(43, 0, "You cannot temporarily ban yourself.");
        return;
    };
    if ((int2 == -1)) {
        return;
    };
    var int3 = ACTIVECLANCHANNEL_GETUSERRANK(int2);
    if ((int3 < ACTIVECLANCHANNEL_GETRANKKICK())) {
        MES_TYPED(43, 0, "You do not have sufficient rank to kick.");
        return;
    };
    if ((int1 > -1)) {
        MES_TYPED(43, 0, "You can only temporarily ban guests.");
        if ((int3 < 100)) {
            MES_TYPED(43, 0, "A clan admin can remove your clanmate.");
        };
    } else if ((int3 > int1)) {
        unk11057(ACTIVECLANCHANNEL_GETUSERSLOT(string0));
        unk11056(821);
        stack(0);
        CHAT_SETMODE();
        unk11055();
    } else {
        MES_TYPED(43, 0, "You can only kick people with a lower rank than yourself.");
    };
    return;
}