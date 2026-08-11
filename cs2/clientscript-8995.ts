//
function script8995(): void {
    IF_SETHIDE(true, comp(1497, 76));  // 6awe1_vote:confirm_layer
    IF_SETHIDE(false, comp(1497, 5));  // 6awe1_vote:choice_1
    IF_SETHIDE(false, comp(1497, 69));  // 6awe1_vote:choice_2
    IF_SETTEXT(inttostring(varbitplayer_18708, 10), comp(1497, 55));  // 6awe1_vote:votes_amount
    return;
}