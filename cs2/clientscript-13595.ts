//
function script13595(): void {
    IF_SETTEXT(`${TOSTRING_LOCALISED(varplayer_7152, 1)}/${TOSTRING_LOCALISED(varplayer_7240, 1)}`, comp(1892, 11));  // achievements_player_inspect:no_cheev_completed
    IF_SETONVARTRANSMIT(callback(script13594, 7152, 7240, 2), comp(1892, 11));  // achievements_player_inspect:no_cheev_completed
    IF_SETTEXT(TOSTRING_LOCALISED(varplayer_7153, 1), comp(1892, 16));  // achievements_player_inspect:runescore
    IF_SETONVARTRANSMIT(callback(script13594, 7153, 1), comp(1892, 16));  // achievements_player_inspect:runescore
    return;
}