//
function script6897(): void {
    var string0 = "Press 'Confirm' when you're happy.";
    if ((varbitplayer_4987 == 1)) {
        script13972(comp(1366, 27), comp(-1, 65535), 28553 as struct, "Wait...", 1);
        string0 = "Waiting for opponent...";
    } else {
        script13972(comp(1366, 27), comp(-1, 65535), 28553 as struct, "Confirm", 0);
        if ((varclient_9 == true)) {
            string0 = strconcat(string0, "<br>(Your opponent has confirmed.)");
        };
    };
    if ((REBOOTTIMER() > 0)) {
        string0 = "<col=ff0000>You will forfeit if the server reboots during your duel.</col>";
    };
    IF_SETTEXT(string0, comp(1366, 25));
    return;
}