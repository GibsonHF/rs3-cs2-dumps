//[proc,login_popup_full]
function script3232(int0: number, int1: number, int2: number, string0: string, string1: string): void {
    if ((IF_GETHIDE(comp(744, 347)) == false)) {
        return;
    };
    if ((varclient_174 != 102)) {
        varclient_1089 = varclient_174;
    };
    script15651(102);
    if ((strcmp(string1, "") == 0)) {
        IF_SETHIDE(true, comp(744, 355));
    } else {
        IF_SETHIDE(false, comp(744, 355));
        IF_SETTEXT(string1, comp(744, 355));
    };
    script15687(varclient_1089);
    IF_SETHIDE(false, comp(744, 347));
    IF_SETHIDE(false, comp(744, 351));
    IF_SETHIDE(true, comp(744, 93));
    IF_SETTEXT(string0, comp(744, 354));
    IF_CLEARSCRIPTHOOKS(comp(744, 354));
    IF_CLEAROPS(comp(744, 354));
    if (((int0 == 3) || (int0 == 16))) {
        IF_SETOP(1, "Goto", comp(744, 354));
        IF_SETOPBASE("Link", comp(744, 354));
        IF_SETONOP(callback(script15228, 22), comp(744, 354));
    };
    varclient_1092 = 0;
    IF_SETONTIMER(callback(), comp(744, 352));
    IF_SETGRAPHIC(int2, 48759137);
    IF_SETSIZE(76, 63, 0, 0, 48759137);
    IF_SETPOSITION(0, 5, 1, 0, 48759137);
    script2952(48759139, int0);
    return;
}