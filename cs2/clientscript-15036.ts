//
function script15036(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number): void {
    if ((int2 == 1)) {
        IF_SETTEXT("Loading...", comp(105, 215));  // stockmarket:totalvalue ?
    };
    if ((int4 == 1)) {
        IF_SETTEXT("Loading...", comp(105, 147));  // stockmarket:offeritem_marketprice ?
        IF_SETTEXT("Loading...", comp(105, 150));  // stockmarket:offeritem_recentprice ?
        script20874();
    };
    if ((int3 == 1)) {
        IF_SETTEXT("Loading...", comp(105, 140));  // stockmarket:offeritem_desc ?
    };
    if ((int0 == 1)) {
        IF_SETTEXT("Loading...", comp(105, 170));  // stockmarket:quantity_input_display ?
    };
    if ((int1 == 1)) {
        IF_SETTEXT("Loading...", comp(105, 185));  // stockmarket:price_input_display ?
    };
    if ((int5 == 1)) {
        IF_SETONTIMER(callback(), comp(105, 141));  // stockmarket:offeritem_buylimit ?
        if ((varplayer_135 == -1 as obj)) {
            IF_SETTEXT("", comp(105, 141));  // stockmarket:offeritem_buylimit ?
        } else {
            IF_SETTEXT("Loading...", comp(105, 141));  // stockmarket:offeritem_buylimit ?
        };
    };
    return;
}