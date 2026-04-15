//
function script12837(): void {
    script17119();
    varclient_7113 = -1;
    IF_BUTTON_SETTOGGLED(1, 68419590);
    script3060(3);
    script4554(comp(-1, 65535), comp(1044, 33), comp(1044, 45), 68419628, comp(1044, 46), comp(1044, 42), comp(1044, 47), 68419627, -1, comp(-1, 65535), comp(1044, 1), comp(1044, 8), comp(1044, 11), comp(1044, 12), comp(1044, 10), 68419636, 68419637, comp(1044, 15), 68419600);
    script17118();
    script4565(68419592, 68419595, 68419596);
    IF_SETONOP(callback(script11559, 68419609), comp(1044, 50));
    script7871(68419634, 0, 1, 0, 0);
    IF_SETTEXT("Name", 68419622);
    IF_SETONOP(callback(script4557), 68419599);
    IF_SETHIDE(0, 68419599);
    IF_SETHIDE(0, 68419609);
    IF_SETHIDE(1, 68419608);
    IF_SETHIDE(1, 68419611);
    IF_SETHIDE(1, 68419633);
    return;
}