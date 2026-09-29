//
function script9265(): void {
    IF_SETTEXT("Loading...", comp(105, 215));  // stockmarket:totalvalue ?
    IF_SETTEXT("Loading...", comp(105, 147));  // stockmarket:offeritem_marketprice ?
    IF_SETTEXT("Loading...", comp(105, 150));  // stockmarket:offeritem_recentprice ?
    IF_SETTEXT("Loading...", comp(105, 140));  // stockmarket:offeritem_desc ?
    IF_SETTEXT("Loading...", comp(105, 170));  // stockmarket:quantity_input_display ?
    IF_SETTEXT("Loading...", comp(105, 185));  // stockmarket:price_input_display ?
    IF_SETONTIMER(callback(), comp(105, 141));  // stockmarket:offeritem_buylimit ?
    if ((varplayer_135 == -1 as obj)) {
        IF_SETTEXT("", comp(105, 141));  // stockmarket:offeritem_buylimit ?
    } else {
        IF_SETTEXT("Loading...", comp(105, 141));  // stockmarket:offeritem_buylimit ?
    };
    script20874();
    return;
}