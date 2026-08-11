//
function script7610(string0: string): void {
    CC_DELETEALL(comp(1555, 7));  // elfcity_meilyr_recipe_shop:use_bonus
    CC_CREATE(comp(1555, 7), 4, 0);  // elfcity_meilyr_recipe_shop:use_bonus
    CC_SETPOSITION(0, 0, 1, 1);
    CC_SETSIZE(0, 0, 1, 1);
    CC_SETTEXT(string0);
    CC_SETCOLOUR(script10495(3));
    CC_SETTEXTFONT(26 as fontmetrics);
    IF_SETTEXT("-", comp(1555, 15));  // elfcity_meilyr_recipe_shop:unlock_text
    IF_SETTEXT("Recipe details", comp(1555, 16));  // elfcity_meilyr_recipe_shop:name_text
    IF_SETHIDE(false, comp(1555, 24));  // elfcity_meilyr_recipe_shop:buy_button_disabled_layer
    return;
}