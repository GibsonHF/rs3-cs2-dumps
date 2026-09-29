//
function script15037(): void {
    switch (varplayer_139) {
        case 0: {
            IF_SETTEXT(script9465(2), comp(105, 140));  // stockmarket:offeritem_desc ?
            break;
        }
        case 1: {
            IF_SETTEXT("Select an item in your inventory to sell.", comp(105, 140));  // stockmarket:offeritem_desc ?
            break;
        }
        default: {
            IF_SETTEXT("Loading...", comp(105, 140));  // stockmarket:offeritem_desc ?
            break;
        }
    };
    IF_SETTEXT("0", comp(105, 215));  // stockmarket:totalvalue ?
    IF_SETTEXT("Loading...", comp(105, 147));  // stockmarket:offeritem_marketprice ?
    IF_SETTEXT("Loading...", comp(105, 150));  // stockmarket:offeritem_recentprice ?
    IF_SETTEXT("0", comp(105, 170));  // stockmarket:quantity_input_display ?
    IF_SETTEXT("1", comp(105, 185));  // stockmarket:price_input_display ?
    IF_SETONTIMER(callback(), comp(105, 141));  // stockmarket:offeritem_buylimit ?
    IF_SETTEXT("", comp(105, 141));  // stockmarket:offeritem_buylimit ?
    return;
}