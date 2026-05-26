//
function script16410(): void {
    var int0 = IF_GETTRANS(62586899);
    if ((int0 == 255)) {
        IF_SETONTIMER(callback(), 62586886);
    } else {
        script16416(MIN((int0 + 10), 255));
    };
    return;
}