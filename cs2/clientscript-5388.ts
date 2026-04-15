//
function script5388(): void {
    if ((varbitplayer_27169 == 1)) {
        script8311(2);
    };
    if (((IF_GETHIDE(comp(1473, 12)) == false) || (script6431() == true))) {
        IF_SETHIDE(true, comp(1473, 12));
        IF_SETHIDE(true, comp(1474, 16));
    } else {
        script12409(comp(1473, 17));
        IF_SETHIDE(false, comp(1473, 12));
        IF_SETHIDE(false, comp(1474, 16));
    };
    return;
}