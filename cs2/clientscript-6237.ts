//
function script6237(): void {
    var int0 = IF_GETTRANS(84213795);
    if ((int0 >= 243)) {
        IF_SETHIDE(1, 84213795);
        IF_SETONTIMER(callback(), 84213794);
    } else {
        IF_SETTRANS((int0 + 2), 84213795);
    };
    return;
}