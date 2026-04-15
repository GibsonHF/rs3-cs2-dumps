//[clientscript,conq_ranking_overlay_ontimer]
function script406(int0: component): void {
    if ((IF_GETTRANS(int0) > 0)) {
        IF_SETTRANS(MAX((IF_GETTRANS(int0) - 1), 0), int0);
    } else {
        IF_SETONTIMER(callback(), int0);
    };
    return;
}