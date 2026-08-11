//
function script352(): void {
    script353();
    IF_SETHIDE(true, comp(1675, 2));  // trh69_starfury:darkness
    IF_SETHIDE(true, comp(1675, 45));  // trh69_starfury:confirm_purchase
    IF_SETTEXT(TOSTRING_LOCALISED(INV_TOTAL(93 as inv, 28090 as obj), 1), comp(1675, 14));  // trh69_starfury:ore_count
    IF_SETTEXT(TOSTRING_LOCALISED(INV_TOTAL(93 as inv, 28091 as obj), 1), comp(1675, 15));  // trh69_starfury:diamond_count
    return;
}