//
function script17117(): void {
    script17119();
    varclient_7113 = -1;
    IF_BUTTON_SETTOGGLED(1, comp(1044, 7));
    script3060(4);
    IF_SETONTIMER(callback(), comp(909, 0));
    script3159(-1, 68419617, 68419629, 68419628, 68419630, 68419626, 68419631, 68419627, -1, -1, 68419585, 68419592, 68419595, 68419596, 68419594, 68419636, 68419637);
    script17118();
    script3171(68419592, 68419595, 68419596);
    IF_SETONOP(callback(script11463, 68419611), comp(1044, 50));
    script7871(68419634, 0, 1, 0, 0);
    IF_SETTEXT("Name", comp(1044, 38));
    IF_SETHIDE(false, comp(1044, 27));
    if ((unk10993(0) == 1)) {
        IF_SETTEXT(ACTIVECLANCHANNEL_GETCLANNAME(), comp(1044, 23));
    };
    IF_SETHIDE(true, comp(1044, 24));
    IF_SETHIDE(true, comp(1044, 25));
    IF_SETHIDE(true, comp(1044, 15));
    IF_SETHIDE(true, comp(1044, 16));
    IF_SETHIDE(true, comp(1044, 49));
    return;
}