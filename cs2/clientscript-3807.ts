//
function script3807(): void {
    if ((varplayer_3079 > 8701)) {
        IF_SETTEXT("No free keys available", comp(641, 10));
        return;
    };
    if ((varbitplayer_45587 == 1)) {
        IF_SETTEXT("Free key claimed", comp(641, 10));
    } else {
        IF_SETTEXT("Free key available", comp(641, 10));
    };
    return;
}