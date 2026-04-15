//
function script8757(): void {
    if (((varbitplayer_20723 == 1) && (CC_FIND(comp(247, 21), 0) == 1))) {
        if ((varbitplayer_20715 < 200)) {
            if ((CC_GETHEIGHT() != varbitplayer_20715)) {
                CC_SETSIZE(18, (200 - varbitplayer_20715), 0, 0);
            };
        } else {
            CC_SETPOSITION(25, (17 - 1), 0, 0);
            CC_SETSIZE(18, 1, 0, 0);
        };
        CC_SETTEXT(`${inttostring((varbitplayer_20715 / 2), 10)}%`);
    };
    return;
}