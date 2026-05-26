//
function script9478(): void {
    if ((varplayer_3981 == 0)) {
        printmessage("You have no votes to spend.");
        return;
    };
    IF_SETHIDE(false, comp(748, 51));
    IF_SETHIDE(true, comp(748, 30));
    IF_SETHIDE(true, comp(748, 40));
    IF_SETTEXT(TOSTRING_LOCALISED(varclient_3879, 1), comp(748, 62));
    return;
}