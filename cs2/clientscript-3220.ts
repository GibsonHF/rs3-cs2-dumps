//
function script3220(): void {
    var int0 = true;
    if ((((script3392() == 1) && (varplayer_9502 != varplayer_3079)) && (varplayer_12314 <= 0))) {
        int0 = false;
    };
    IF_SETHIDE(int0, comp(745, 10));  // statusicons:daily_rewards_icon_layer
    IF_SETHIDE(int0, comp(1920, 8));  // toplevel_v2_minimap_legacy:daily_rewards_icon_layer
    IF_SETHIDE(int0, comp(279, 19));  // mobile_ribbon_left:daily_rewards_icon_layer
    return;
}