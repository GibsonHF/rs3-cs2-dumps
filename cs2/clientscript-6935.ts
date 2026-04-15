//
function script6935(): void {
    var int0 = 0;
    if ((varclient_545 == true)) {
        int0 = 69;
    };
    if ((STRING_LENGTH(varclient_2441) > 0)) {
        IF_SETHIDE(true, comp(1367, 75));
        IF_SETHIDE(true, comp(1367, 77));
        IF_SETSIZE(int0, 0, 1, 1, comp(1367, 72));
        IF_SETTEXT(varclient_2441, comp(1367, 72));
        return;
    };
    IF_SETHIDE(false, comp(1367, 75));
    IF_SETHIDE(false, comp(1367, 77));
    IF_SETSIZE(int0, IF_GETHEIGHT(comp(1367, 75)), 1, 1, comp(1367, 72));
    var string0 = "";
    var string1 = "<col=ff0000>You will forfeit if the server reboots during your duel.</col>";
    if ((varclient_1332 == true)) {
        script13973(comp(1367, 75), comp(-1, 65535), 28553 as struct, "---", true, 0);
        IF_SETHIDE(false, comp(1367, 76));
        string0 = "<col=ff0000>Check the options carefully.</col>";
    } else if ((varbitplayer_4986 == 1)) {
        script13973(comp(1367, 75), comp(-1, 65535), 28553 as struct, "Wait...", false, 1);
        IF_SETHIDE(false, comp(1367, 76));
        if ((REBOOTTIMER() > 0)) {
            string0 = string1;
        } else {
            string0 = "Waiting for opponent...";
        };
    } else {
        script13973(comp(1367, 75), comp(-1, 65535), 28553 as struct, "Accept", false, 0);
        IF_SETHIDE(true, comp(1367, 76));
        if ((REBOOTTIMER() > 0)) {
            string0 = string1;
        } else {
            string0 = "Press 'Accept' when you're happy.";
            if ((varclient_9 == true)) {
                string0 = strconcat(string0, "<br>(Your opponent has accepted.)");
            };
        };
    };
    IF_SETTEXT(string0, comp(1367, 72));
    return;
}