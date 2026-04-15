//[proc,login_popup_full]
function script3232(int0: unknown_int, int1: unknown_int, int2: unknown_int, string0: string, string1: string): void {
    if ((IF_GETHIDE(comp(744, 335)) == false)) {
        return;
    };
    if ((varclient_174 != 102)) {
        varclient_1089 = varclient_174;
    };
    script15651(102);
    if ((strcmp(string1, "") == 0)) {
        IF_SETHIDE(true, comp(744, 343));
    } else {
        IF_SETHIDE(false, comp(744, 343));
        IF_SETTEXT(string1, comp(744, 343));
    };
    script15687(varclient_1089);
    IF_SETHIDE(false, comp(744, 335));
    IF_SETHIDE(false, comp(744, 339));
    IF_SETHIDE(true, comp(744, 88));
    IF_SETTEXT(string0, comp(744, 342));
    IF_CLEARSCRIPTHOOKS(comp(744, 342));
    IF_CLEAROPS(comp(744, 342));
    if (((int0 == 3) || (int0 == 16))) {
        IF_SETOP(1, "Goto", comp(744, 342));
        IF_SETOPBASE("Link", comp(744, 342));
        IF_SETONOP(callback(script15228, 22), comp(744, 342));
    };
    varclient_1092 = 0;
    IF_SETONTIMER(callback(), comp(744, 340));
    stack(int2);
    stack(48759125);
    IF_SETGRAPHIC();
    IF_SETSIZE(76, 63, 0, 0, 48759125);
    IF_SETPOSITION(0, 5, 1, 0, 48759125);
    script2952(48759127, int0);
    return;
}