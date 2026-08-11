//
function script15015(): void {
    CC_DELETEALL(comp(707, 18));  // stock_favourites:com_18 ?
    CC_DELETEALL(comp(707, 19));  // stock_favourites:com_19 ?
    IF_SETTEXT("", comp(707, 15));  // stock_favourites:search_input_display ?
    unk10992(script9465(7), -1701144064, 255, 46333967);
    script15019();
    return;
}