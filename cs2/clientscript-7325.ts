//
function script7325(): void {
    if ((varbitplayer_17495 < 11)) {
        IF_SETHIDE(true, comp(905, 49));  // pop_hud:voyages_button
    } else {
        IF_SETHIDE(false, comp(905, 49));  // pop_hud:voyages_button
    };
    if ((varbitplayer_17495 < 13)) {
        IF_SETHIDE(true, comp(905, 51));  // pop_hud:shipyard_button
    } else {
        IF_SETHIDE(false, comp(905, 51));  // pop_hud:shipyard_button
    };
    if ((varbitplayer_17495 < 38)) {
        IF_SETHIDE(true, comp(905, 50));  // pop_hud:crew_button
    } else {
        IF_SETHIDE(false, comp(905, 50));  // pop_hud:crew_button
    };
    if ((varbitplayer_17495 < 31)) {
        IF_SETHIDE(true, comp(905, 53));  // pop_hud:build_button
    } else {
        IF_SETHIDE(false, comp(905, 53));  // pop_hud:build_button
    };
    if ((varbitplayer_17495 < 63)) {
        IF_SETHIDE(true, comp(905, 52));  // pop_hud:workshop_button
        IF_SETHIDE(true, comp(905, 71));  // pop_hud:map_button
    } else {
        IF_SETHIDE(false, comp(905, 52));  // pop_hud:workshop_button
        IF_SETHIDE(false, comp(905, 71));  // pop_hud:map_button
    };
    return;
}