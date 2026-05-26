//
function script11751(): void {
    var int0 = 0;
    IF_SETTEXT(`Prestige Level - ${inttostring(varbitplayer_28941, 10)}`, 108789769);
    while ((int0 <= varbitplayer_28942)) {
        script11752(int0);
        int0 = (int0 + 1);
    };
    if ((varbitplayer_28941 == 1)) {
        if ((varbitplayer_28941 == varbitplayer_28942)) {
            IF_SETHIDE(0, 108789849);
        };
        IF_SETHIDE(1, 108789854);
        IF_SETHIDE(0, 108789843);
        IF_SETHIDE(0, 108789766);
        IF_SETHIDE(0, 108789863);
    };
    if ((varbitplayer_28941 == 2)) {
        IF_SETHIDE(0, 108789849);
        IF_SETHIDE(1, 108789854);
        if ((varbitplayer_28941 == varbitplayer_28942)) {
            IF_SETHIDE(0, 108789839);
        };
        IF_SETHIDE(1, 108789843);
        IF_SETHIDE(0, 108789766);
        IF_SETHIDE(0, 108789863);
    };
    if ((varbitplayer_28941 == 3)) {
        IF_SETHIDE(0, 108789849);
        IF_SETHIDE(1, 108789854);
        IF_SETHIDE(0, 108789839);
        IF_SETHIDE(1, 108789843);
        if ((varbitplayer_28941 == varbitplayer_28942)) {
            IF_SETHIDE(0, 108789763);
        };
        IF_SETHIDE(1, 108789766);
        IF_SETHIDE(0, 108789863);
    };
    if ((varbitplayer_28941 == 4)) {
        IF_SETHIDE(0, 108789849);
        IF_SETHIDE(1, 108789854);
        IF_SETHIDE(0, 108789839);
        IF_SETHIDE(1, 108789843);
        IF_SETHIDE(0, 108789763);
        IF_SETHIDE(1, 108789766);
        if ((varbitplayer_28941 == varbitplayer_28942)) {
            IF_SETHIDE(0, 108789858);
        };
        IF_SETHIDE(1, 108789863);
    };
    if ((varbitplayer_28941 > varbitplayer_28942)) {
        IF_SETHIDE(0, 108789829);
        IF_SETHIDE(0, 108789962);
    } else {
        IF_SETHIDE(1, 108789829);
    };
    return;
}