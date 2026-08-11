//
function script19248(): void {
    var int0 = script10495(2);
    var int1 = script10495(21);
    IF_BUTTON_SETTOGGLED(0, comp(1289, 19));  // halloween24:rewards_button_1
    IF_BUTTON_SETTOGGLED(1, comp(1289, 21));  // halloween24:rewards_button_2
    IF_BUTTON_SETTOGGLED(0, comp(1289, 23));  // halloween24:rewards_button_3
    IF_BUTTON_SETTOGGLED(0, comp(1289, 25));  // halloween24:rewards_button_4
    IF_SETTEXT("Rewards", comp(1289, 9));  // halloween24:rewards_header_text
    IF_SETHIDE(false, comp(1289, 11));  // halloween24:rewards_image
    IF_SETHIDE(true, comp(1289, 13));  // halloween24:rewards_model
    IF_SETHIDE(true, comp(1289, 15));  // halloween24:rewards_model_1
    IF_SETHIDE(true, comp(1289, 14));  // halloween24:rewards_model_2
    IF_SETHIDE(true, comp(1289, 12));  // halloween24:rewards_model_background
    IF_SETTEXT(`${inttostring(PUSH_CONSTANT_INT[16]("<col=", int1))}>The Spirit of Harvest`, comp(1289, 10));  // halloween24:rewards_subheader_text
    IF_SETTEXT(`${inttostring(PUSH_CONSTANT_INT[16]("<col=", int0))}>A rare reward from clan ceremonies on members' worlds. Hand in confections (up to 100) to improve your odds!`, comp(1289, 17));  // halloween24:rewards_text
    IF_SETGRAPHIC(34383 as graphic, comp(1289, 11));  // halloween24:rewards_image
    return;
}