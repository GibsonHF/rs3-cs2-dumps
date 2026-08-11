//
function script18818(): void {
    var int0 = script11882(varplayer_10448, 40);
    var string0 = TOSTRING_LOCALISED(int0, 1);
    if ((int0 >= 500)) {
        string0 = `<col=FF00>${TOSTRING_LOCALISED(int0, 1)}</col>`;
    };
    IF_SETGRAPHIC(19536 as graphic, comp(1253, 313));  // wheel_of_fortune:reward_layer_additional_prize_object
    IF_SETPOSITION(0, 15, 1, 2, comp(1253, 314));  // wheel_of_fortune:reward_layer_additional_prize_text
    IF_SETTEXT(`${inttostring(40, 10)}x ${OC_NAME(53206 as obj)}<br><br><br>Total: ${string0}`, comp(1253, 314));  // wheel_of_fortune:reward_layer_additional_prize_text
    IF_SETPOSITION(0, 25, 1, 0, comp(1253, 313));  // wheel_of_fortune:reward_layer_additional_prize_object
    IF_SETSIZE(75, 75, 0, 0, comp(1253, 313));  // wheel_of_fortune:reward_layer_additional_prize_object
    IF_SETHIDE(true, comp(1253, 312));  // wheel_of_fortune:reward_layer_additional_prize_rarity_gem
    return;
}