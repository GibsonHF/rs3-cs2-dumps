//
function script4092(int0: number): void {
    var int1 = IF_GETTRANS(78774272);
    if ((int1 < (30 + (int0 - 1)))) {
        IF_SETTRANS(30, 78774272);
        IF_SETTRANS(20, 78774274);
        IF_SETONTIMER(callback(), 78774272);
        return;
    };
    IF_SETTRANS((int1 - int0), 78774272);
    IF_SETTRANS(((int1 - int0) / 2), 78774274);
    return;
}