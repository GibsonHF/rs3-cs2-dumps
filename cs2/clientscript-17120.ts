//
function script17120(): void {
    varclient_7113 = -1;
    script7791(comp(1044, 47), comp(1044, 42));
    script7791(comp(1044, 12), comp(1044, 11));
    varclient_1122 = IF_GETHEIGHT(comp(1044, 11));
    IF_SETONTIMER(callback(), comp(1044, 0));
    IF_SETONTIMER(callback(script15593, 1), 68419586);
    IF_SETHIDE(1, 68419594);
    IF_SETSIZE(36, 20, 1, 1, 68419595);
    IF_SETSIZE(16, 0, 0, 1, 68419596);
    script3052(68419592, 68419595, 68419596);
    IF_BUTTON_SETTOGGLED(1, 68419589);
    stack(24760);
    stack(68419613);
    IF_SETGRAPHIC();
    stack(24779);
    stack(68419615);
    IF_SETGRAPHIC();
    IF_SETHIDE(0, 68419608);
    IF_SETHIDE(1, 68419611);
    IF_SETHIDE(1, 68419609);
    IF_SETHIDE(1, 68419599);
    IF_SETHIDE(1, 68419600);
    IF_SETHIDE(0, 68419633);
    return;
}