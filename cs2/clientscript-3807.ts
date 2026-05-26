//
function script3807(): void {
    if ((varplayer_3079 > 8701)) {
        IF_SETTEXT("No free keys available", 42008586);
        return;
    };
    if ((varbitplayer_45587 == 1)) {
        IF_SETTEXT("Free key claimed", 42008586);
    } else {
        IF_SETTEXT("Free key available", 42008586);
    };
    return;
}