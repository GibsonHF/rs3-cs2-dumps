//
function script15036(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number): void {
    if ((int2 == 1)) {
        IF_SETTEXT("Loading...", comp(105, 215));  // stockmarket:offeritem_desc ?
    };
    if ((int4 == 1)) {
        IF_SETTEXT("Loading...", comp(105, 147));  // stockmarket:choosebuy6_button_on_layer ?
        IF_SETTEXT("Loading...", comp(105, 150));  // stockmarket:choosebuy6 ?
        script20874();
    };
    if ((int3 == 1)) {
        IF_SETTEXT("Loading...", comp(105, 140));  // stockmarket:abort_holder5 ?
    };
    if ((int0 == 1)) {
        IF_SETTEXT("Loading...", comp(105, 170));  // stockmarket:choosebuy7_button_layer ?
    };
    if ((int1 == 1)) {
        IF_SETTEXT("Loading...", comp(105, 185));  // stockmarket:label_layer_7 ?
    };
    if ((int5 == 1)) {
        IF_SETONTIMER(callback(), comp(105, 141));  // stockmarket:abort5 ?
        if ((varplayer_135 == -1 as obj)) {
            IF_SETTEXT("", comp(105, 141));  // stockmarket:abort5 ?
        } else {
            IF_SETTEXT("Loading...", comp(105, 141));  // stockmarket:abort5 ?
        };
    };
    return;
}