//
function script8993(): void {
    if ((varbitplayer_18708 == 0)) {
        IF_SETHIDE(false, comp(1497, 157));  // 6awe1_vote:no_votes
        printmessage("You have no votes to spend.");
        return;
    };
    IF_SETHIDE(false, comp(1497, 76));  // 6awe1_vote:confirm_layer
    IF_SETHIDE(true, comp(1497, 5));  // 6awe1_vote:choice_1
    IF_SETHIDE(true, comp(1497, 69));  // 6awe1_vote:choice_2
    IF_SETTEXT(inttostring(varclient_2790, 10), comp(1497, 81));  // 6awe1_vote:votes_to_spend
    return;
}