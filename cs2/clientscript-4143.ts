//
function script4143(): void {
    if (((script13749() == 0) && (varbitplayer_42255 == 1))) {
        script8182();
        return;
    };
    if ((script6431() == 1)) {
        IF_SETHIDE(true, comp(1433, 90));  // escape_menu:checkbox_container
        IF_SETSIZE(385, 76, 0, 0, comp(1433, 81));  // escape_menu:escape_logout_popup
    } else {
        script10416(93913179, 93913180, "Don't show me this again.", "", "", varbitplayer_42255);
    };
    IF_SETHIDE(false, comp(1433, 62));  // escape_menu:logout_popup
    return;
}