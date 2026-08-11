//
function script5376(): void {
    var int0 = 0;
    while ((int0 < 8)) {
        if ((CC_FIND(comp(951, 24), ((int0 * 6) + 3)) == 1)) {  // agidad_overlay:foreground
            CC_SETONTIMER(callback());
        };
        if ((CC_FIND(comp(951, 24), ((int0 * 6) + 4)) == 1)) {  // agidad_overlay:foreground
            CC_SETONTIMER(callback());
        };
        if ((CC_FIND(comp(951, 24), ((int0 * 6) + 5)) == 1)) {  // agidad_overlay:foreground
            CC_SETONTIMER(callback());
        };
        int0 = (int0 + 1);
    };
    return;
}