//
function script20281(int0: int): void {
    script20282();
    if ((++int0 > 2)) {
        IF_SETONTIMER(callback(), comp(1361, 2));
    } else {
        IF_SETONTIMER(callback(script20281, int0), comp(1361, 2));
    };
    return;
}