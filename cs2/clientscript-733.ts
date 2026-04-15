//[clientscript,fade_in_darkness]
function script733(int0: component): void {
    if ((varbitplayer_16230 == 0)) {
        IF_SETMODELANIM(1378 as seq, int0);
    } else if ((varbitplayer_16230 == 1)) {
        IF_SETMODELANIM(2115 as seq, int0);
    } else {
        IF_SETMODELANIM(2117 as seq, int0);
    };
    return;
}