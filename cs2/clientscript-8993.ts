//
function script8993(): void {
    if ((varbitplayer_18708 == 0)) {
        IF_SETHIDE(false, comp(1497, 157));
        printmessage("You have no votes to spend.");
        return;
    };
    IF_SETHIDE(false, comp(1497, 76));
    IF_SETHIDE(true, comp(1497, 5));
    IF_SETHIDE(true, comp(1497, 69));
    IF_SETTEXT(inttostring(varclient_2790, 10), comp(1497, 81));
    return;
}