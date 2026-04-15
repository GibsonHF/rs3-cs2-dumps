//
function script8177(): void {
    if ((varclient_3477 == true)) {
        if ((varclient_3693 == 0)) {
            printmessage("You can't do that in Edit Mode.");
        };
        return;
    };
    if ((varbitplayer_3028 > 0)) {
        printmessage("You can't do that right now.");
        return;
    };
    if (((script6431() == true) && (script14439() == 1))) {
        return;
    };
    if ((WORLDLIST_FETCH() == 0)) {
    } else {
    };
    IF_SETHIDE(false, comp(1477, 805));
    IF_SETHIDE(true, comp(1433, 62));
    IF_SETHIDE(true, comp(274, 192));
    script6739(9);
    script8841(1, 1);
    script13831(1);
    if ((script6431() == true)) {
        script15063(true);
        script14987(0);
        script15949();
    } else {
        script17044(comp(1433, 8));
    };
    return;
}