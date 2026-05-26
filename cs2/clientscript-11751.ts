//
function script11751(): void {
    var int0 = 0;
    IF_SETTEXT(`Prestige Level - ${inttostring(varbitplayer_28941, 10)}`, comp(1660, 9));
    while ((int0 <= varbitplayer_28942)) {
        script11752(int0);
        int0 = (int0 + 1);
    };
    if ((varbitplayer_28941 == 1)) {
        if ((varbitplayer_28941 == varbitplayer_28942)) {
            IF_SETHIDE(false, comp(1660, 89));
        };
        IF_SETHIDE(true, comp(1660, 94));
        IF_SETHIDE(false, comp(1660, 83));
        IF_SETHIDE(false, comp(1660, 6));
        IF_SETHIDE(false, comp(1660, 103));
    };
    if ((varbitplayer_28941 == 2)) {
        IF_SETHIDE(false, comp(1660, 89));
        IF_SETHIDE(true, comp(1660, 94));
        if ((varbitplayer_28941 == varbitplayer_28942)) {
            IF_SETHIDE(false, comp(1660, 79));
        };
        IF_SETHIDE(true, comp(1660, 83));
        IF_SETHIDE(false, comp(1660, 6));
        IF_SETHIDE(false, comp(1660, 103));
    };
    if ((varbitplayer_28941 == 3)) {
        IF_SETHIDE(false, comp(1660, 89));
        IF_SETHIDE(true, comp(1660, 94));
        IF_SETHIDE(false, comp(1660, 79));
        IF_SETHIDE(true, comp(1660, 83));
        if ((varbitplayer_28941 == varbitplayer_28942)) {
            IF_SETHIDE(false, comp(1660, 3));
        };
        IF_SETHIDE(true, comp(1660, 6));
        IF_SETHIDE(false, comp(1660, 103));
    };
    if ((varbitplayer_28941 == 4)) {
        IF_SETHIDE(false, comp(1660, 89));
        IF_SETHIDE(true, comp(1660, 94));
        IF_SETHIDE(false, comp(1660, 79));
        IF_SETHIDE(true, comp(1660, 83));
        IF_SETHIDE(false, comp(1660, 3));
        IF_SETHIDE(true, comp(1660, 6));
        if ((varbitplayer_28941 == varbitplayer_28942)) {
            IF_SETHIDE(false, comp(1660, 98));
        };
        IF_SETHIDE(true, comp(1660, 103));
    };
    if ((varbitplayer_28941 > varbitplayer_28942)) {
        IF_SETHIDE(false, comp(1660, 69));
        IF_SETHIDE(false, comp(1660, 202));
    } else {
        IF_SETHIDE(true, comp(1660, 69));
    };
    return;
}