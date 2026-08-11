//
function script5832(): void {
    IF_SETHIDE(true, comp(1043, 27));  // 6awe3_rewards:confirm_layer
    script5835(MAX(0, varclient_4148));
    script5847();
    script5849(-1);
    script5852();
    IF_SETOBJECT_NONUM(31188 as obj, 1, comp(1043, 94));  // 6awe3_rewards:item_graphic_1
    IF_SETOBJECT_NONUM(31187 as obj, 1, comp(1043, 107));  // 6awe3_rewards:item_graphic_2
    IF_SETOBJECT_NONUM(31186 as obj, 1, comp(1043, 120));  // 6awe3_rewards:item_graphic_3
    IF_SETOBJECT_NONUM(31346 as obj, 1, comp(1043, 178));  // 6awe3_rewards:item_graphic_4
    var string0 = "You can only purchase this reward on a member's world.";
    if ((MAP_MEMBERS() == 0)) {
        IF_SETHIDE(true, comp(1043, 186));  // 6awe3_rewards:positive_button_disabled_layer_14
        IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), comp(1043, 189));  // 6awe3_rewards:tooltip_8
    };
    return;
}