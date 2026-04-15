//
function script11265(int0: component, int1: unknown_int): void {
    var string0 = "Link this button to any scenario in the Scenario tool by selecting it as a favourite.";
    if ((varplayer_5210 == 0)) {
        IF_SETTEXT("Fave Scenario", int0);
        IF_SETHIDE(true, comp(1610, 1));
    } else {
        IF_SETTEXT(script11233(varplayer_5210), int0);
        string0 = `Click to run scenario : ${script11233(varplayer_5210)}.`;
        IF_SETHIDE(false, comp(1610, 1));
    };
    IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -1), int0);
    return;
}