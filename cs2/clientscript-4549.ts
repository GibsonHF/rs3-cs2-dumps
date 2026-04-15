//[clientscript,meslayer_mode16]
function script4549(): void {
    var int0 = -1;
    var int1 = -1;
    var int2 = -1;
    if ((unk10993(0) == 1)) {
        int0 = ACTIVECLANCHANNEL_GETUSERSLOT(CHAT_PLAYERNAME());
        if ((int0 == -1)) {
            return;
        };
        int1 = ACTIVECLANCHANNEL_GETUSERRANK(int0);
        int2 = ACTIVECLANCHANNEL_GETRANKKICK();
    } else {
        printmessage("You must be in a clan to do that.");
    };
    if ((int1 >= 0)) {
        if ((int1 < int2)) {
            return;
        };
        if ((varclient_1413 == false)) {
            return;
        };
        IF_SETHIDE(false, comp(1469, 0));
        if ((varclient_11 == true)) {
            script675();
        };
        IF_SETTEXT("Enter the player to ban from the channel:", comp(1469, 3));
        varclient_5 = 16;
        script1564("");
        IF_SETONCLICK(callback(), comp(1469, 1));
        script2026();
    };
    return;
}