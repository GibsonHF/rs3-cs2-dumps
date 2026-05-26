//
function script4685(): void {
    var string0 = inttostring(varbitplayer_3920, 10);
    var string1 = "Waiting for next wave...";
    if ((varclient_1537 != 0)) {
        IF_SETHIDE(0, 29294606);
        IF_SETSIZE(IF_GETWIDTH(29294593), 79, 0, 0, 29294593);
    } else {
        IF_SETHIDE(1, 29294606);
        IF_SETSIZE(IF_GETWIDTH(29294593), 45, 0, 0, 29294593);
    };
    script4699(29294603, 29294604, 29294605, "Wave", string0);
    if ((varclient_1537 != 0)) {
        script4699(29294606, 29294608, 29294609, "Waiting?", string1);
    };
    return;
}