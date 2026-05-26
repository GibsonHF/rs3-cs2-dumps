//
function script12380(): void {
    var string0 = "";
    var string1 = "";
    if ((varbitplayer_30930 == 0)) {
        string0 = "No bounty active.";
        string1 = "Bounty: <col=FF0000>None</col>";
        IF_SETCOLOUR(16777215, 114425924);
    } else if ((varbitplayer_30926 == 1000)) {
        string0 = "Bounty complete.";
        string1 = "Bounty: <col=00FF00>Complete</col>";
        IF_SETCOLOUR(65280, 114425924);
    } else {
        string0 = `Bounty progress: ${inttostring((varbitplayer_30926 / 10), 10)}/100`;
        string1 = `Bounty: ${inttostring((varbitplayer_30926 / 10), 10)}/100`;
        IF_SETCOLOUR(16777215, 114425924);
    };
    IF_SETTEXT(string0, 114425924);
    IF_SETTEXT(string1, 114425887);
    return;
}