//
function script2655(int0: int, int1: unknown_int): void {
    if ((int0 <= 11)) {
        IF_SETSCROLLSIZE(404, 215, comp(868, 5));
        script72(comp(868, 6), comp(868, 5), 0);
    } else {
        IF_SETSCROLLSIZE(404, (int0 * 20), comp(868, 5));
        if ((int1 == 1)) {
            script72(comp(868, 6), comp(868, 5), 0);
        } else {
            script72(comp(868, 6), comp(868, 5), ((int0 * 20) - 180));
        };
    };
    return;
}