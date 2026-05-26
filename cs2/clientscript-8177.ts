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
    if (((script6431() == 1) && (script14439() == 1))) {
        return;
    };
    if ((WORLDLIST_FETCH() == 0)) {
    } else {
    };
    IF_SETHIDE(0, 96797477);
    IF_SETHIDE(1, 93913150);
    IF_SETHIDE(1, 17957056);
    script6739(9);
    script8841(1, 1);
    script13831(1);
    if ((script6431() == 1)) {
        script15063(1);
        script14987(0);
        script15949();
    } else {
        script17044(93913096);
    };
    return;
}