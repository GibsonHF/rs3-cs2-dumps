//
function script2095(): void {
    if ((varclient_654 < 100)) {
        varclient_654 = (varclient_654 + 1);
    };
    if ((varclient_654 == 50)) {
        IF_SETHIDE(true, comp(834, 29));  // snp_tutorial_game_overlay:east_grave_flash_layer
        IF_SETHIDE(true, comp(834, 48));  // snp_tutorial_game_overlay:west_grave_flash_layer
        IF_SETHIDE(true, comp(834, 52));  // snp_tutorial_game_overlay:obelisk_flash_layer
    };
    if ((varclient_654 == 100)) {
        IF_SETHIDE(false, comp(834, 29));  // snp_tutorial_game_overlay:east_grave_flash_layer
        IF_SETHIDE(false, comp(834, 48));  // snp_tutorial_game_overlay:west_grave_flash_layer
        IF_SETHIDE(false, comp(834, 52));  // snp_tutorial_game_overlay:obelisk_flash_layer
        varclient_654 = 0;
    };
    return;
}