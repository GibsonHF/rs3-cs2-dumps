//
function script4277(): void {
    var int0 = ((varbitplayer_8701 * 6) / 10);
    var string0 = inttostring((int0 / 60), 10);
    var string1 = inttostring(MODULO(int0, 60), 10);
    if ((STRING_LENGTH(string1) < 2)) {
        string1 = strconcat("0", string1);
    };
    if ((varbitplayer_8702 == 0)) {
        IF_SETTEXT("Match Starts In:", comp(1088, 13));  // clan_rcw_score:time_label
        IF_SETTEXT(`${string0}:${string1}`, comp(1088, 14));  // clan_rcw_score:time
    } else {
        IF_SETTEXT("Time Remaining:", comp(1088, 13));  // clan_rcw_score:time_label
        IF_SETTEXT(`${string0}:${string1}`, comp(1088, 14));  // clan_rcw_score:time
    };
    return;
}