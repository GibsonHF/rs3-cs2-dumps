//
function script12213(int0: int): void {
    if ((int0 > INV_TOTAL(93 as inv, 36775 as obj))) {
        var int0 = INV_TOTAL(93 as inv, 36775 as obj);
    };
    if ((int0 > 2500)) {
        int0 = 2500;
    };
    if (((int0 + varbitplayer_30383) > 2500)) {
        int0 = (2500 - varbitplayer_30383);
    };
    IF_SETTEXT(TOSTRING_LOCALISED(int0, 1), comp(1717, 156));
    if ((int0 > 0)) {
        IF_SETHIDE(true, comp(1717, 137));
    } else {
        IF_SETHIDE(false, comp(1717, 137));
    };
    return;
}