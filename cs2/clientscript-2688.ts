//[clientscript,meslayer_mode15]
function script2688(): void {
    if (((CLAN_GETCHATCOUNT() > 0) && operator(">=", CLAN_GETCHATMINKICK(CLAN_GETCHATRANK())))) {
        if ((varclient_1413 == false)) {
            return;
        };
        IF_SETHIDE(false, comp(1469, 0));
        if ((varclient_11 == true)) {
            script675();
        };
        IF_SETTEXT("Enter the player to ban from the channel:", comp(1469, 3));
        varclient_5 = 15;
        script1564("");
        IF_SETONCLICK(callback(), comp(1469, 1));
        script2026();
    };
    return;
}