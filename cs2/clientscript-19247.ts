//
function script19247(): void {
    var int0 = script10495(2);
    var int1 = script10495(21);
    IF_BUTTON_SETTOGGLED(1, comp(1289, 19));  // halloween24:rewards_button_1
    IF_BUTTON_SETTOGGLED(0, comp(1289, 21));  // halloween24:rewards_button_2
    IF_BUTTON_SETTOGGLED(0, comp(1289, 23));  // halloween24:rewards_button_3
    IF_BUTTON_SETTOGGLED(0, comp(1289, 25));  // halloween24:rewards_button_4
    IF_SETTEXT("New rewards", comp(1289, 9));  // halloween24:rewards_header_text
    IF_SETHIDE(true, comp(1289, 11));  // halloween24:rewards_image
    IF_SETHIDE(false, comp(1289, 13));  // halloween24:rewards_model
    IF_SETHIDE(false, comp(1289, 15));  // halloween24:rewards_model_1
    IF_SETHIDE(false, comp(1289, 14));  // halloween24:rewards_model_2
    IF_SETHIDE(false, comp(1289, 12));  // halloween24:rewards_model_background
    IF_SETTEXT(`${inttostring(PUSH_CONSTANT_INT[16]("<col=", int1))}>Wendle, the wicker boy pet`, comp(1289, 10));  // halloween24:rewards_subheader_text
    var string0 = `${inttostring(PUSH_CONSTANT_INT[16]("<col=", int0))}>Other new rewards - the sparkler and reaping scythe - are awarded from the clan ceremonies.`;
    if ((script18522(523) == 0)) {
        string0 = `${inttostring(PUSH_CONSTANT_INT[16]("<col=", int0))}>Complete 'Guys and Dolls' to unlock Wendle then hand in 75 clan confections for its burning skin.`;
    };
    IF_SETTEXT(string0, comp(1289, 17));  // halloween24:rewards_text
    return;
}