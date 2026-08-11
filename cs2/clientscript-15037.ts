//
function script15037(): void {
    switch (varplayer_139) {
        case 0: {
            IF_SETTEXT(script9465(2), comp(105, 140));  // stockmarket:abort_holder5 ?
            break;
        }
        case 1: {
            IF_SETTEXT("Select an item in your inventory to sell.", comp(105, 140));  // stockmarket:abort_holder5 ?
            break;
        }
        default: {
            IF_SETTEXT("Loading...", comp(105, 140));  // stockmarket:abort_holder5 ?
            break;
        }
    };
    IF_SETTEXT("0", comp(105, 215));  // stockmarket:offeritem_desc ?
    IF_SETTEXT("Loading...", comp(105, 147));  // stockmarket:choosebuy6_button_on_layer ?
    IF_SETTEXT("Loading...", comp(105, 150));  // stockmarket:choosebuy6 ?
    IF_SETTEXT("0", comp(105, 170));  // stockmarket:choosebuy7_button_layer ?
    IF_SETTEXT("1", comp(105, 185));  // stockmarket:label_layer_7 ?
    IF_SETONTIMER(callback(), comp(105, 141));  // stockmarket:abort5 ?
    IF_SETTEXT("", comp(105, 141));  // stockmarket:abort5 ?
    return;
}