//
function script15967(): number {
    IF_SETGRAPHIC(1407 as graphic, comp(1253, 313));  // wheel_of_fortune:reward_layer_additional_prize_object
    IF_SETTEXT(`${inttostring(25, 10)}x ${OC_NAME(55698 as obj)} as a bonus reward.`, comp(1253, 314));  // wheel_of_fortune:reward_layer_additional_prize_text
    IF_SETPOSITION(0, 25, 1, 0, comp(1253, 313));  // wheel_of_fortune:reward_layer_additional_prize_object
    IF_SETSIZE(75, 75, 0, 0, comp(1253, 313));  // wheel_of_fortune:reward_layer_additional_prize_object
    IF_SETHIDE(true, comp(1253, 312));  // wheel_of_fortune:reward_layer_additional_prize_rarity_gem
    return 1;
}