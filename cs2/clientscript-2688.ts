//[clientscript,meslayer_mode15]
function script2688(): void {
    if (((CLAN_GETCHATCOUNT() > 0) && operator(">=", CLAN_GETCHATMINKICK(CLAN_GETCHATRANK())))) {
        if ((varclient_1413 == false)) {
            return;
        };
        IF_SETHIDE(0, 96272384);
        if ((varclient_11 == true)) {
            script675();
        };
        IF_SETTEXT("Enter the player to ban from the channel:", 96272387);
        varclient_5 = 15;
        script1564("");
        IF_SETONCLICK(callback(), 96272385);
        script2026();
    };
    return;
}