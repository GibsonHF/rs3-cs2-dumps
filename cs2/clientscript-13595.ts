//
function script13595(): void {
    IF_SETTEXT(`${TOSTRING_LOCALISED(varplayer_7152, 1)}/${TOSTRING_LOCALISED(varplayer_7240, 1)}`, comp(1892, 11));
    IF_SETONVARTRANSMIT(callback(script13594, 7152, 7240, 2), comp(1892, 11));
    IF_SETTEXT(TOSTRING_LOCALISED(varplayer_7153, 1), 123994128);
    IF_SETONVARTRANSMIT(callback(script13594, 7153, 1), 123994128);
    return;
}