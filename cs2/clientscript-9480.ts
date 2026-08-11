//
function script9480(): void {
    IF_SETHIDE(true, comp(748, 51));  // 6awe2_vote:confirm_layer
    IF_SETHIDE(false, comp(748, 30));  // 6awe2_vote:choice_1
    IF_SETHIDE(false, comp(748, 40));  // 6awe2_vote:choice_2
    IF_SETTEXT(TOSTRING_LOCALISED(varplayer_3981, 1), comp(748, 7));  // 6awe2_vote:votes_amount
    return;
}