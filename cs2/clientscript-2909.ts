//[clientscript,ii_timer_update]
function script2909(int0: component, int1: component): void {
    if ((varbitplayer_4213 == 0)) {
        IF_SETHIDE(true, int0);
    } else if ((varbitplayer_4213 < 5)) {
        IF_SETTEXT("<lt>1 min", int1);
    } else {
        IF_SETTEXT(`${inttostring(((varbitplayer_4213 + 4) / 5), 10)} min`, int1);
    };
    return;
}