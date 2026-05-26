//
function script20281(int0: number): void {
    script20282();
    if ((++int0 > 2)) {
        IF_SETONTIMER(callback(), 89194498);
    } else {
        IF_SETONTIMER(callback(script20281, int0), 89194498);
    };
    return;
}