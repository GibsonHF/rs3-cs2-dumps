//
function script12204(): void {
    script12205();
    IF_SETTEXT(TOSTRING_LOCALISED(INV_TOTAL(93 as inv, 36734 as obj), 1), comp(1715, 21));  // trh80_corrupt:soul_count
    IF_SETTEXT(TOSTRING_LOCALISED(INV_TOTAL(93 as inv, 36735 as obj), 1), comp(1715, 22));  // trh80_corrupt:soulgem_count
    return;
}