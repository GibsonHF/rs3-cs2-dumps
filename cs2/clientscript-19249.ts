//
function script19249(): void {
    var int0 = script10495(2);
    var int1 = script10495(21);
    IF_BUTTON_SETTOGGLED(0, comp(1289, 20));  // halloween24:rewards_button_graphic_1
    IF_BUTTON_SETTOGGLED(0, comp(1289, 22));  // halloween24:rewards_button_graphic_2
    IF_BUTTON_SETTOGGLED(1, comp(1289, 24));  // halloween24:rewards_button_graphic_3
    IF_BUTTON_SETTOGGLED(0, comp(1289, 26));  // halloween24:rewards_button_graphic_4
    IF_SETTEXT("Rewards", comp(1289, 10));  // halloween24:rewards_subheader_text
    IF_SETHIDE(false, comp(1289, 12));  // halloween24:rewards_model_background
    IF_SETHIDE(true, comp(1289, 14));  // halloween24:rewards_model_2
    IF_SETHIDE(true, comp(1289, 16));  // halloween24:rewards_text_background
    IF_SETHIDE(true, comp(1289, 15));  // halloween24:rewards_model_1
    IF_SETHIDE(true, comp(1289, 13));  // halloween24:rewards_model
    IF_SETTEXT(`${inttostring(PUSH_CONSTANT_INT[16]("<col=", int1))}>Boss Pet Skins`, comp(1289, 11));  // halloween24:rewards_image
    IF_SETTEXT(`${inttostring(PUSH_CONSTANT_INT[16]("<col=", int0))}>These rewards can rarely be obtained from the Maize Maze.`, comp(1289, 18));  // halloween24:com_18
    var int2 = 34380 as graphic;
    switch (script19236(1)) {
        case 1: {
            int2 = 34380 as graphic;
            break;
        }
        case 2: {
            int2 = 34381 as graphic;
            break;
        }
        case 3: {
            int2 = 34382 as graphic;
            break;
        }
    };
    IF_SETGRAPHIC(int2, comp(1289, 12));  // halloween24:rewards_model_background
    return;
}