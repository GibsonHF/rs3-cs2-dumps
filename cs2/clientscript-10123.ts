//
function script10123(): void {
    if ((MODULO(CLIENTCLOCK(), 50) == 0)) {
        if ((TTV_STREAM_GETSTATE() == 0)) {
            IF_SETONTIMER(callback(), comp(231, 13));
            IF_SETTEXT("0", 15138829);
            return;
        };
        IF_SETTEXT(inttostring(TTV_STREAM_GETVIEWERS(), 10), comp(231, 13));
        if (((varbitplayer_27169 == 1) && (GETWINDOWMODE() > 1))) {
            IF_SETHIDE(true, comp(231, 12));
        } else {
            IF_SETHIDE(false, comp(231, 12));
        };
    };
    return;
}