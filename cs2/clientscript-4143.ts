//
function script4143(): void {
    if (((script13749() == false) && (varbitplayer_42255 == 1))) {
        script8182();
        return;
    };
    if ((script6431() == true)) {
        IF_SETHIDE(true, comp(1433, 90));
        IF_SETSIZE(385, 76, 0, 0, comp(1433, 81));
    } else {
        script10416(comp(1433, 91), comp(1433, 92), "Don't show me this again.", "", "", varbitplayer_42255);
    };
    IF_SETHIDE(false, comp(1433, 62));
    return;
}