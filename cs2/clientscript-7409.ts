//
function script7409(): void {
    if ((CC_FIND(comp(1384, 19), varbitplayer_17644) == 1)) {
        IF_SETPOSITION((IF_GETX(comp(1384, 19)) + CC_GETX()), ((CC_GETY() + IF_GETY(comp(1384, 19))) - 2), 0, 0, comp(1384, 24));
        IF_SETHIDE(false, comp(1384, 24));
    };
    return;
}