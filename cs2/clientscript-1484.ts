//
function script1484(int0: component): void {
    if ((IF_GETHIDE(int0) == false)) {
        IF_SETHIDE(true, int0);
        varbitplayer_27447 = 0;
    } else {
        varbitplayer_27447 = 1;
        IF_SETHIDE(false, int0);
    };
    return;
}