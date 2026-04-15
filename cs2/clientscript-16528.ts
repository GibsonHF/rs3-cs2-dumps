//
function script16528(int0: component, int1: int, int2: boolean): void {
    if ((int1 <= 0)) {
        if ((int2 == true)) {
            IF_SETMODELANIM(34768 as seq, int0);
            var int1 = (2 * SEQLENGTH(34768 as seq));
        } else {
            IF_SETMODELANIM(-1 as seq, int0);
            int1 = (200 + RANDOM(200));
        };
        var int2 = script12585(int2);
        IF_SETONTIMER(callback(script16528, int0, int1, int2), int0);
    } else {
        IF_SETONTIMER(callback(script16528, int0, --int1, int2), int0);
    };
    return;
}