//[proc,login_popup_full]
function script3232(int0: number, int1: number, int2: number, string0: string, string1: string): void {
    if ((IF_GETHIDE(comp(744, 349)) == false)) {  // loginscreen:options_firstrun
        return;
    };
    if ((varclient_174 != 102)) {
        varclient_1089 = varclient_174;
    };
    script15651(102);
    if ((strcmp(string1, "") == 0)) {
        IF_SETHIDE(true, comp(744, 357));  // loginscreen:dropdown_build
    } else {
        IF_SETHIDE(false, comp(744, 357));  // loginscreen:dropdown_build
        IF_SETTEXT(string1, comp(744, 357));  // loginscreen:dropdown_build
    };
    script15687(varclient_1089);
    IF_SETHIDE(false, comp(744, 349));  // loginscreen:options_firstrun
    IF_SETHIDE(false, comp(744, 353));  // loginscreen:dropdown_border
    IF_SETHIDE(true, comp(744, 93));  // loginscreen:username_input_group_graphic
    IF_SETTEXT(string0, comp(744, 356));  // loginscreen:dropdown_list
    IF_CLEARSCRIPTHOOKS(comp(744, 356));  // loginscreen:dropdown_list
    IF_CLEAROPS(comp(744, 356));  // loginscreen:dropdown_list
    if ((int0 == 16)) {
        IF_SETOP(1, "Goto", comp(744, 356));  // loginscreen:dropdown_list
        IF_SETOPBASE("Link", comp(744, 356));  // loginscreen:dropdown_list
        IF_SETONOP(callback(script15228, 22), comp(744, 356));  // loginscreen:dropdown_list
    };
    varclient_1092 = 0;
    IF_SETONTIMER(callback(), comp(744, 354));  // loginscreen:dropdown_scroller
    IF_SETGRAPHIC(int2, comp(744, 355));  // loginscreen:dropdown_highlight
    IF_SETSIZE(76, 63, 0, 0, comp(744, 355));  // loginscreen:dropdown_highlight
    IF_SETPOSITION(0, 5, 1, 0, comp(744, 355));  // loginscreen:dropdown_highlight
    script2952(48759141, int0);
    return;
}