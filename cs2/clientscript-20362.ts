//
function script20362(): void {
    if ((varbitplayer_59964 > 0)) {
        IF_SETHIDE(false, comp(1481, 4));  // halloween_hub_farming_information:pumpkin_1_layer
        IF_SETTEXT(inttostring(varbitplayer_59964, 10), comp(1481, 8));  // halloween_hub_farming_information:pumpkin_1_amount
    } else {
        IF_SETHIDE(true, comp(1481, 4));  // halloween_hub_farming_information:pumpkin_1_layer
    };
    if ((varbitplayer_59965 > 0)) {
        IF_SETHIDE(false, comp(1481, 9));  // halloween_hub_farming_information:pumpkin_2_layer
        IF_SETTEXT(inttostring(varbitplayer_59965, 10), comp(1481, 13));  // halloween_hub_farming_information:pumpkin_2_amount
    } else {
        IF_SETHIDE(true, comp(1481, 9));  // halloween_hub_farming_information:pumpkin_2_layer
    };
    if ((varbitplayer_59966 > 0)) {
        IF_SETHIDE(false, comp(1481, 14));  // halloween_hub_farming_information:pumpkin_3_layer
        IF_SETTEXT(inttostring(varbitplayer_59966, 10), comp(1481, 18));  // halloween_hub_farming_information:pumpkin_3_amount
    } else {
        IF_SETHIDE(true, comp(1481, 14));  // halloween_hub_farming_information:pumpkin_3_layer
    };
    if ((varbitplayer_59967 > 0)) {
        IF_SETHIDE(false, comp(1481, 19));  // halloween_hub_farming_information:pumpkin_4_layer
        IF_SETTEXT(inttostring(varbitplayer_59967, 10), comp(1481, 23));  // halloween_hub_farming_information:pumpkin_4_amount
    } else {
        IF_SETHIDE(true, comp(1481, 19));  // halloween_hub_farming_information:pumpkin_4_layer
    };
    return;
}