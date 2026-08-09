//
function script17120(): void {
    varclient_7113 = -1;
    script7791(68419631, 68419626);
    script7791(68419596, 68419595);
    varclient_1122 = IF_GETHEIGHT(comp(1044, 11));
    IF_SETONTIMER(callback(), comp(1044, 0));
    IF_SETONTIMER(callback(script15593, 1), comp(1044, 2));
    IF_SETHIDE(true, comp(1044, 10));
    IF_SETSIZE(36, 20, 1, 1, comp(1044, 11));
    IF_SETSIZE(16, 0, 0, 1, comp(1044, 12));
    script3052(68419592, 68419595, 68419596);
    IF_BUTTON_SETTOGGLED(1, comp(1044, 5));
    IF_SETGRAPHIC(24760 as graphic, comp(1044, 29));
    IF_SETGRAPHIC(24779 as graphic, comp(1044, 31));
    IF_SETHIDE(false, comp(1044, 24));
    IF_SETHIDE(true, comp(1044, 27));
    IF_SETHIDE(true, comp(1044, 25));
    IF_SETHIDE(true, comp(1044, 15));
    IF_SETHIDE(true, comp(1044, 16));
    IF_SETHIDE(false, comp(1044, 49));
    return;
}