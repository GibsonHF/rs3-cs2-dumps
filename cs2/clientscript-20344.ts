//
function script20344(): void {
    var int0 = 0;
    var int1 = ENUM_GETOUTPUTCOUNT(13319 as cs2enum);
    var int2 = script6431();
    while ((int0 < int1)) {
        script13842(int0);
        int0 = (int0 + 1);
    };
    script8144();
    if ((int2 == 1)) {
        IF_SETHIDE(true, comp(1431, 6));  // toplevel_v2_ribbon:extra_button
        IF_SETHIDE(true, comp(1431, 7));  // toplevel_v2_ribbon:mode_button
        IF_SETHIDE(true, comp(1431, 8));  // toplevel_v2_ribbon:league_button
    };
    return;
}