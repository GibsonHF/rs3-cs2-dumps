//
function script19820(): void {
    if ((varplayer_12086 == varbitplayer_57205)) {
        script13971(45285569, 45285570, 28554, "Active Loadout", 1);
        IF_SETHIDE(true, comp(691, 21));  // arch_relic_management:relic_loadout_currency_content_layer
    } else {
        script13969(45285569, 45285570, 28554, "Activate Loadout");
        IF_SETHIDE(false, comp(691, 21));  // arch_relic_management:relic_loadout_currency_content_layer
        IF_SETTEXT(`${TOSTRING_LOCALISED(script19774(), 1)} chronote activation cost`, comp(691, 196));  // arch_relic_management:relic_loadout_currency_text
    };
    return;
}