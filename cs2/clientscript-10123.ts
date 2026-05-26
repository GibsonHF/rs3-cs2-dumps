//
function script10123(): void {
    if ((MODULO(CLIENTCLOCK(), 50) == 0)) {
        if ((TTV_STREAM_GETSTATE() == 0)) {
            IF_SETONTIMER(callback(), 15138829);
            IF_SETTEXT("0", 15138829);
            return;
        };
        IF_SETTEXT(inttostring(TTV_STREAM_GETVIEWERS(), 10), 15138829);
        if (((varbitplayer_27169 == 1) && (GETWINDOWMODE() > 1))) {
            IF_SETHIDE(1, 15138828);
        } else {
            IF_SETHIDE(0, 15138828);
        };
    };
    return;
}