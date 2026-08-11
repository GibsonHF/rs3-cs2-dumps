//
function script12712(): void {
    var int0 = 0;
    var int1 = 0;
    [int0, int1] = script12711();
    IF_SETONVARTRANSMIT(callback(script12713, -2147483645, 6507, 1), comp(1620, 26));  // trh54_guaranteed_quality:purple_gem_active_layer
    IF_SETONTIMER(callback(script12631, -2147483645, -1), comp(1620, 27));  // trh54_guaranteed_quality:purple_gem_charge_layer
    IF_SETPARAM_INT(5835, 3, comp(1620, 27));  // trh54_guaranteed_quality:purple_gem_charge_layer
    IF_SETPARAM_INT(5930, 2, comp(1620, 27));  // trh54_guaranteed_quality:purple_gem_charge_layer
    IF_SETTEXT(`${inttostring(int0, 10)}%`, comp(1620, 29));  // trh54_guaranteed_quality:purple_gem_percentage
    IF_SETPARAM_INT(5932, int1, comp(1620, 27));  // trh54_guaranteed_quality:purple_gem_charge_layer
    IF_SETSIZE(IF_GETWIDTH(comp(1620, 27)), int1, 0, 0, comp(1620, 27));  // trh54_guaranteed_quality:purple_gem_charge_layer
    if ((varbitplayer_33689 == 500)) {
        IF_SETTRANS(0, comp(1620, 0));  // trh54_guaranteed_quality:purple_gem_charge_glow
    } else {
        IF_SETTRANS(255, comp(1620, 0));  // trh54_guaranteed_quality:purple_gem_charge_glow
    };
    if ((IF_FIND(comp(1620, 19)) == 1)) {  // trh54_guaranteed_quality:purple_gem_charge
        CC_SETONTIMER(callback(script12631, -2147483645, -2147483643));
        cc_setparam(5942, (1000 * 5));
        cc_setparam(5936, 0);
    };
    if ((IF_FIND(comp(1620, 30)) == 1)) {  // trh54_guaranteed_quality:purple_gem
        CC_SETONTIMER(callback(script12631, -2147483645, -2147483643));
        cc_setparam(5942, (1000 * 5));
        cc_setparam(5936, 0);
    };
    if ((IF_FIND(comp(1620, 0)) == 1)) {  // trh54_guaranteed_quality:purple_gem_charge_glow
        CC_SETONTIMER(callback(script12631, -2147483645, -2147483643));
        cc_setparam(5942, (1000 * 5));
        cc_setparam(5936, 0);
        cc_setparam(5940, 1000);
    };
    return;
}