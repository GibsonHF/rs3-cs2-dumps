//
function script2655(int0: number, int1: number): void {
    if ((int0 <= 11)) {
        IF_SETSCROLLSIZE(404, 215, 56885253);
        script72(56885254, 56885253, 0);
    } else {
        IF_SETSCROLLSIZE(404, (int0 * 20), 56885253);
        if ((int1 == 1)) {
            script72(56885254, 56885253, 0);
        } else {
            script72(56885254, 56885253, ((int0 * 20) - 180));
        };
    };
    return;
}