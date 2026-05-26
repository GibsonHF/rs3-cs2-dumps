//
function script6935(): void {
    var int0 = 0;
    if ((varclient_545 == true)) {
        int0 = 69;
    };
    if ((STRING_LENGTH(varclient_2441) > 0)) {
        IF_SETHIDE(1, 89587787);
        IF_SETHIDE(1, 89587789);
        IF_SETSIZE(int0, 0, 1, 1, 89587784);
        IF_SETTEXT(varclient_2441, 89587784);
        return;
    };
    IF_SETHIDE(0, 89587787);
    IF_SETHIDE(0, 89587789);
    IF_SETSIZE(int0, IF_GETHEIGHT(89587787), 1, 1, 89587784);
    var string0 = "";
    var string1 = "<col=ff0000>You will forfeit if the server reboots during your duel.</col>";
    if ((varclient_1332 == true)) {
        script13973(89587787, -1, 28553, "---", 1, 0);
        IF_SETHIDE(0, 89587788);
        string0 = "<col=ff0000>Check the options carefully.</col>";
    } else if ((varbitplayer_4986 == 1)) {
        script13973(89587787, -1, 28553, "Wait...", 0, 1);
        IF_SETHIDE(0, 89587788);
        if ((REBOOTTIMER() > 0)) {
            string0 = string1;
        } else {
            string0 = "Waiting for opponent...";
        };
    } else {
        script13973(89587787, -1, 28553, "Accept", 0, 0);
        IF_SETHIDE(1, 89587788);
        if ((REBOOTTIMER() > 0)) {
            string0 = string1;
        } else {
            string0 = "Press 'Accept' when you're happy.";
            if ((varclient_9 == true)) {
                string0 = strconcat(string0, "<br>(Your opponent has accepted.)");
            };
        };
    };
    IF_SETTEXT(string0, 89587784);
    return;
}