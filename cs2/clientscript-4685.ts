//
function script4685(): void {
    var string0 = inttostring(varbitplayer_3920, 10);
    var string1 = "Waiting for next wave...";
    if ((varclient_1537 != 0)) {
        IF_SETHIDE(false, comp(447, 14));
        IF_SETSIZE(IF_GETWIDTH(comp(447, 1)), 79, 0, 0, comp(447, 1));
    } else {
        IF_SETHIDE(true, comp(447, 14));
        IF_SETSIZE(IF_GETWIDTH(comp(447, 1)), 45, 0, 0, comp(447, 1));
    };
    script4699(29294603, comp(447, 12), comp(447, 13), "Wave", string0);
    if ((varclient_1537 != 0)) {
        script4699(29294606, comp(447, 16), comp(447, 17), "Waiting?", string1);
    };
    return;
}