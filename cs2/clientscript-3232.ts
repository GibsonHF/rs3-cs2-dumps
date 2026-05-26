//[proc,login_popup_full]
function script3232(int0: number, int1: number, int2: number, string0: string, string1: string): void {
    if ((IF_GETHIDE(48759120) == 0)) {
        return;
    };
    if ((varclient_174 != 102)) {
        varclient_1089 = varclient_174;
    };
    script15651(102);
    if ((strcmp(string1, "") == 0)) {
        IF_SETHIDE(1, 48759128);
    } else {
        IF_SETHIDE(0, 48759128);
        IF_SETTEXT(string1, 48759128);
    };
    script15687(varclient_1089);
    IF_SETHIDE(0, 48759120);
    IF_SETHIDE(0, 48759124);
    IF_SETHIDE(1, 48758873);
    IF_SETTEXT(string0, 48759127);
    IF_CLEARSCRIPTHOOKS(48759127);
    IF_CLEAROPS(48759127);
    if (((int0 == 3) || (int0 == 16))) {
        IF_SETOP(1, "Goto", 48759127);
        IF_SETOPBASE("Link", 48759127);
        IF_SETONOP(callback(script15228, 22), 48759127);
    };
    varclient_1092 = 0;
    IF_SETONTIMER(callback(), 48759125);
    stack(int2);
    stack(48759126);
    IF_SETGRAPHIC();
    IF_SETSIZE(76, 63, 0, 0, 48759126);
    IF_SETPOSITION(0, 5, 1, 0, 48759126);
    script2952(48759128, int0);
    return;
}