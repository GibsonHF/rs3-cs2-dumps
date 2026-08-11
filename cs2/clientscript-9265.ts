//
function script9265(): void {
    IF_SETTEXT("Loading...", comp(105, 215));  // stockmarket:offeritem_desc ?
    IF_SETTEXT("Loading...", comp(105, 147));  // stockmarket:choosebuy6_button_on_layer ?
    IF_SETTEXT("Loading...", comp(105, 150));  // stockmarket:choosebuy6 ?
    IF_SETTEXT("Loading...", comp(105, 140));  // stockmarket:abort_holder5 ?
    IF_SETTEXT("Loading...", comp(105, 170));  // stockmarket:choosebuy7_button_layer ?
    IF_SETTEXT("Loading...", comp(105, 185));  // stockmarket:label_layer_7 ?
    IF_SETONTIMER(callback(), comp(105, 141));  // stockmarket:abort5 ?
    if ((varplayer_135 == -1 as obj)) {
        IF_SETTEXT("", comp(105, 141));  // stockmarket:abort5 ?
    } else {
        IF_SETTEXT("Loading...", comp(105, 141));  // stockmarket:abort5 ?
    };
    script20874();
    return;
}