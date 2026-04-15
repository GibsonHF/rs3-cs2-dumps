//[clientscript,fade_out_darkness]
function script732(int0: component): void {
    if ((varbitplayer_16230 == 0)) {
        IF_SETMODELANIM(1377 as seq, int0);
    } else if ((varbitplayer_16230 == 1)) {
        IF_SETMODELANIM(2114 as seq, int0);
    } else {
        IF_SETMODELANIM(2116 as seq, int0);
    };
    return;
}