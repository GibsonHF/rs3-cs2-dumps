//
function script12213(int0: number): void {
    if ((int0 > INV_TOTAL(93, 36775))) {
        var int0 = INV_TOTAL(93, 36775);
    };
    if ((int0 > 2500)) {
        int0 = 2500;
    };
    if (((int0 + varbitplayer_30383) > 2500)) {
        int0 = (2500 - varbitplayer_30383);
    };
    IF_SETTEXT(TOSTRING_LOCALISED(int0, 1), 112525468);
    if ((int0 > 0)) {
        IF_SETHIDE(1, 112525449);
    } else {
        IF_SETHIDE(0, 112525449);
    };
    return;
}