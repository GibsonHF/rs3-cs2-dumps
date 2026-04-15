//
function script16903(): void {
    script16904();
    var int0 = 1;
    if (((script16823() == true) && (script16906(2) == 1))) {
        int0 = 2;
    } else if ((RANDOM(100) < 50)) {
        int0 = 0;
    };
    IF_SETONTIMER(callback(script16909, int0, 0), comp(907, 2));
    script16911(50, -1, int0, 1);
    script419(59441156);
    return;
}