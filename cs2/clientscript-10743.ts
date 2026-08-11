//
function script10743(string0: string): void {
    CC_DELETEALL(comp(1554, 14));  // elfcity_meilyr_maw_swap:use_bonus
    CC_CREATE(comp(1554, 14), 4, 0);  // elfcity_meilyr_maw_swap:use_bonus
    CC_SETPOSITION(0, 0, 1, 1);
    CC_SETSIZE(0, 0, 1, 1);
    CC_SETTEXT(string0);
    CC_SETCOLOUR(script10495(3));
    CC_SETTEXTFONT(26 as fontmetrics);
    IF_SETTEXT("-", comp(1554, 15));  // elfcity_meilyr_maw_swap:unlock_text
    IF_SETTEXT("Enhancer details", comp(1554, 16));  // elfcity_meilyr_maw_swap:name_text
    IF_SETHIDE(false, comp(1554, 11));  // elfcity_meilyr_maw_swap:buy_button_disabled_layer
    return;
}