//
function script16528(int0: number, int1: number, int2: number): void {
    if ((int1 <= 0)) {
        if ((int2 == 1)) {
            IF_SETMODELANIM(34768, int0);
            var int1 = (2 * SEQLENGTH(34768));
        } else {
            IF_SETMODELANIM(-1, int0);
            int1 = (200 + RANDOM(200));
        };
        var int2 = script12585(int2);
        IF_SETONTIMER(callback(script16528, int0, int1, int2), int0);
    } else {
        IF_SETONTIMER(callback(script16528, int0, --int1, int2), int0);
    };
    return;
}