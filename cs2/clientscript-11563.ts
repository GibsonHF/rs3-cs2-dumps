//
function script11563(): void {
    if ((varbitplayer_28194 < 60)) {
        varbitplayer_28194 = (varbitplayer_28194 + 1);
    } else {
        IF_SETHIDE(true, comp(1631, 63));
        IF_SETHIDE(true, comp(1631, 64));
        IF_SETHIDE(true, comp(1631, 65));
        IF_SETHIDE(true, comp(1631, 66));
        IF_SETONTIMER(callback(), comp(1631, 66));
    };
    return;
}