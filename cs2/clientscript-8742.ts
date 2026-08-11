//
function script8742(): void {
    var int0 = 0;
    var int1 = ENUM_GETOUTPUTCOUNT(10812 as cs2enum);
    while ((int0 < int1)) {
        script12552(int0, script12551(int0));
        int0 = (int0 + 1);
    };
    if ((varbitplayer_32411 == 1)) {
        IF_SETHIDE(false, comp(1766, 9));  // trh99_rainbow_chests_overlay:prize_rarity_freeze_gem_1
    };
    if ((varbitplayer_32412 == 1)) {
        IF_SETHIDE(false, comp(1766, 12));  // trh99_rainbow_chests_overlay:prize_rarity_freeze_gem_2
    };
    if ((varbitplayer_32413 == 1)) {
        IF_SETHIDE(false, comp(1766, 15));  // trh99_rainbow_chests_overlay:prize_rarity_freeze_gem_3
    };
    if ((varbitplayer_32414 == 1)) {
        IF_SETHIDE(false, comp(1766, 18));  // trh99_rainbow_chests_overlay:prize_rarity_freeze_gem_4
    };
    if ((varbitplayer_32415 == 1)) {
        IF_SETHIDE(false, comp(1766, 21));  // trh99_rainbow_chests_overlay:prize_rarity_freeze_gem_5
    };
    script12548();
    if ((varbitplayer_22875 == 1)) {
        IF_SETCOLOUR(16777215, comp(1766, 32));  // trh99_rainbow_chests_overlay:claim_button_text
    };
    return;
}