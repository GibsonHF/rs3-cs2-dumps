//
function script16534(): void {
    if ((varbitplayer_51238 == 1)) {
        IF_SETMODELANIM(34767 as seq, comp(970, 15));
        IF_SETONTIMER(callback(script16535, 75), comp(970, 15));
    } else {
        IF_SETHIDE(true, comp(970, 32));
    };
    return;
}