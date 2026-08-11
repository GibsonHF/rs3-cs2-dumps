//
function script20878(int0: number, int1: number): void {
    var string0 = "";
    var string1 = script20879(int0, int1);
    if ((varplayer_135 == -1 as obj)) {
        string0 = "";
    } else if ((varplayer_9464 <= 0)) {
        string0 = "Loading...";
    } else if ((STRING_LENGTH(string1) > 0)) {
        string0 = `Buy limit per 4 hours: ${inttostring(varplayer_13484, 10)} / ${TOSTRING_LOCALISED(varplayer_9464, 1)} (${string1})`;
    } else {
        string0 = `Buy limit per 4 hours: ${TOSTRING_LOCALISED(varplayer_9464, 1)}`;
    };
    IF_SETTEXT(string0, comp(105, 141));  // stockmarket:abort5 ?
    return;
}