//[proc,login_popup_full]
function script3232(int0: number, int1: number, int2: number, string0: string, string1: string): void {
    if ((IF_GETHIDE(comp(744, 336)) == false)) {  // loginscreen:popup
        return;
    };
    if ((varclient_174 != 102)) {
        varclient_1089 = varclient_174;
    };
    script15651(102);
    if ((strcmp(string1, "") == 0)) {
        IF_SETHIDE(true, comp(744, 344));  // loginscreen:popup_big_button
    } else {
        IF_SETHIDE(false, comp(744, 344));  // loginscreen:popup_big_button
        IF_SETTEXT(string1, comp(744, 344));  // loginscreen:popup_big_button
    };
    script15687(varclient_1089);
    IF_SETHIDE(false, comp(744, 336));  // loginscreen:popup
    IF_SETHIDE(false, comp(744, 340));  // loginscreen:popup_content
    IF_SETHIDE(true, comp(744, 89));  // loginscreen:login
    IF_SETTEXT(string0, comp(744, 343));  // loginscreen:popup_text
    IF_CLEARSCRIPTHOOKS(comp(744, 343));  // loginscreen:popup_text
    IF_CLEAROPS(comp(744, 343));  // loginscreen:popup_text
    if (((int0 == 3) || (int0 == 16))) {
        IF_SETOP(1, "Goto", comp(744, 343));  // loginscreen:popup_text
        IF_SETOPBASE("Link", comp(744, 343));  // loginscreen:popup_text
        IF_SETONOP(callback(script15228, 22), comp(744, 343));  // loginscreen:popup_text
    };
    varclient_1092 = 0;
    IF_SETONTIMER(callback(), comp(744, 341));  // loginscreen:popup_throbber_layer
    IF_SETGRAPHIC(int2, comp(744, 342));  // loginscreen:popup_throbber
    IF_SETSIZE(76, 63, 0, 0, comp(744, 342));  // loginscreen:popup_throbber
    IF_SETPOSITION(0, 5, 1, 0, comp(744, 342));  // loginscreen:popup_throbber
    script2952(48759128, int0);
    return;
}