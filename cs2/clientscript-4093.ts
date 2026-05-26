//
function script4093(): void {
    var int0 = IF_GETTRANS(78577664);
    if ((int0 < 11)) {
        IF_SETTRANS(10, 78577664);
        IF_SETTRANS(20, 78577677);
        IF_SETONTIMER(callback(), 78577664);
        return;
    };
    IF_SETTRANS((int0 - 10), 78577664);
    IF_SETTRANS(((int0 - 10) / 2), 78577677);
    return;
}