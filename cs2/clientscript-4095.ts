//
function script4095(): void {
    var int0 = IF_GETTRANS(78774272);
    if ((int0 > 75)) {
        IF_SETTRANS(80, 78774272);
        IF_SETTRANS(40, 78774274);
        IF_SETONTIMER(callback(), 78774272);
        return;
    };
    IF_SETTRANS((int0 + 4), 78774272);
    IF_SETTRANS(((int0 + 4) / 2), 78774274);
    return;
}