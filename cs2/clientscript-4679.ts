//
function script4679(): void {
    if ((enum_getvalue(0, 0, 3839 as cs2enum, varclient_1535) < 1)) {
        IF_SETHIDE(true, comp(302, 19));
        IF_SETTEXT(`Difficulty: ${inttostring(varclient_1535, 10)}/10`, comp(302, 5));
    } else {
        IF_SETHIDE(false, comp(302, 19));
        IF_SETTEXT(`Difficulty: ${inttostring(varclient_1535, 10)}/10`, comp(302, 5));
    };
    return;
}