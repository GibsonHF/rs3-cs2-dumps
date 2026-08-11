//
function script11380(): void {
    var int0 = -1;
    CC_DELETEALL(comp(1253, 556));  // wheel_of_fortune:fake_op
    int0 = (int0 + 1);
    while ((int0 <= 3)) {
        CC_CREATE(comp(1253, 556), 5, int0);  // wheel_of_fortune:fake_op
    };
    var int1 = (IF_GETWIDTH(comp(1620, 23)) - 4);  // trh54_guaranteed_quality:progress_bar_background
    var int2 = (int1 / 24);
    var int3 = (int2 * 5);
    var int4 = (int2 * 8);
    if ((varbitplayer_27908 >= 5)) {
        IF_SETGRAPHIC(2290 as graphic, comp(1620, 8));  // trh54_guaranteed_quality:gem_container_yellow
        IF_SETGRAPHIC(379 as graphic, comp(1620, 9));  // trh54_guaranteed_quality:gem_indicator_yellow
        IF_SETGRAPHIC(33109 as graphic, comp(1620, 10));  // trh54_guaranteed_quality:gem_icon_yellow
    };
    if ((varbitplayer_27908 >= (5 + 8))) {
        IF_SETGRAPHIC(2290 as graphic, comp(1620, 31));  // trh54_guaranteed_quality:gem_container_orange
        IF_SETGRAPHIC(379 as graphic, comp(1620, 32));  // trh54_guaranteed_quality:gem_indicator_orange
        IF_SETGRAPHIC(33105 as graphic, comp(1620, 33));  // trh54_guaranteed_quality:gem_icon_orange
    };
    if ((varbitplayer_27908 == 24)) {
        IF_SETGRAPHIC(2290 as graphic, comp(1620, 34));  // trh54_guaranteed_quality:gem_container_red
        IF_SETGRAPHIC(379 as graphic, comp(1620, 35));  // trh54_guaranteed_quality:gem_indicator_red
        IF_SETGRAPHIC(33107 as graphic, comp(1620, 36));  // trh54_guaranteed_quality:gem_icon_red
        IF_SETHIDE(false, comp(1620, 12));  // trh54_guaranteed_quality:red_particles
    };
    var string0 = "";
    string0 = "Pressing activate at this point guarantees you a prize of yellow rarity or above";
    IF_SETONMOUSEREPEAT(callback(script3876, string0, 106168330, -1), comp(1620, 10));  // trh54_guaranteed_quality:gem_icon_yellow
    string0 = "Pressing activate at this point guarantees you a prize of orange rarity or above";
    IF_SETONMOUSEREPEAT(callback(script3876, string0, 106168353, -1), comp(1620, 33));  // trh54_guaranteed_quality:gem_icon_orange
    string0 = "Pressing activate at this point guarantees you a prize of red rarity or above";
    IF_SETONMOUSEREPEAT(callback(script3876, string0, 106168356, -1), comp(1620, 36));  // trh54_guaranteed_quality:gem_icon_red
    string0 = "Activating this gem when fully charged guarantees you a prize of purple rarity";
    IF_SETONMOUSEREPEAT(callback(script3876, string0, 106168350, -1), comp(1620, 30));  // trh54_guaranteed_quality:purple_gem
    IF_SETONMOUSEOVER(callback(script16429, 22644, 106168335), comp(1620, 39));  // trh54_guaranteed_quality:chest_1_click
    IF_SETONMOUSELEAVE(callback(script16429, 22645, 106168335), comp(1620, 39));  // trh54_guaranteed_quality:chest_1_click
    IF_SETONMOUSEOVER(callback(script16429, 22644, 106168360), comp(1620, 41));  // trh54_guaranteed_quality:chest_2_click
    IF_SETONMOUSELEAVE(callback(script16429, 22645, 106168360), comp(1620, 41));  // trh54_guaranteed_quality:chest_2_click
    IF_SETONMOUSEOVER(callback(script16429, 22644, 106168362), comp(1620, 43));  // trh54_guaranteed_quality:chest_3_click
    IF_SETONMOUSELEAVE(callback(script16429, 22645, 106168362), comp(1620, 43));  // trh54_guaranteed_quality:chest_3_click
    if ((varbitplayer_27907 > 0)) {
        if ((varbitplayer_27908 > 0)) {
            IF_SETSIZE((int2 * varbitplayer_27908), 18, 0, 0, comp(1620, 24));  // trh54_guaranteed_quality:progress_bar_fill
            if ((varbitplayer_27907 == 1)) {
                IF_SETHIDE(false, comp(1620, 5));  // trh54_guaranteed_quality:yellow_particles
            } else if ((varbitplayer_27907 == 2)) {
                IF_SETHIDE(false, comp(1620, 7));  // trh54_guaranteed_quality:orange_particles
            } else if ((varbitplayer_27907 == 3)) {
                IF_SETHIDE(false, comp(1620, 12));  // trh54_guaranteed_quality:red_particles
            };
            IF_SETONTIMER(callback(script11385), comp(1620, 20));  // trh54_guaranteed_quality:content_layer
        } else if ((varbitplayer_27908 == 0)) {
            IF_SETSIZE(1, 18, 0, 0, comp(1620, 24));  // trh54_guaranteed_quality:progress_bar_fill
        } else {
            IF_SETSIZE((int2 * varbitplayer_27908), 18, 0, 0, comp(1620, 24));  // trh54_guaranteed_quality:progress_bar_fill
        };
    } else if ((varbitplayer_27908 == 0)) {
        IF_SETSIZE(1, 18, 0, 0, comp(1620, 24));  // trh54_guaranteed_quality:progress_bar_fill
    } else {
        IF_SETSIZE((int2 * varbitplayer_27908), 18, 0, 0, comp(1620, 24));  // trh54_guaranteed_quality:progress_bar_fill
    };
    script12710();
    if (((varbitplayer_27910 == 0) && (varbitplayer_27906 == 0))) {
        varbitplayer_27908 = (8 + 5);
        IF_SETGRAPHIC(2290 as graphic, comp(1620, 8));  // trh54_guaranteed_quality:gem_container_yellow
        IF_SETGRAPHIC(379 as graphic, comp(1620, 9));  // trh54_guaranteed_quality:gem_indicator_yellow
        IF_SETGRAPHIC(33109 as graphic, comp(1620, 10));  // trh54_guaranteed_quality:gem_icon_yellow
        IF_SETGRAPHIC(2290 as graphic, comp(1620, 31));  // trh54_guaranteed_quality:gem_container_orange
        IF_SETGRAPHIC(379 as graphic, comp(1620, 32));  // trh54_guaranteed_quality:gem_indicator_orange
        IF_SETGRAPHIC(33105 as graphic, comp(1620, 33));  // trh54_guaranteed_quality:gem_icon_orange
        IF_SETHIDE(true, comp(1620, 3));  // trh54_guaranteed_quality:activate_button_disabled_layer
    };
    script12712();
    return;
}