//
function script15975(int0: number): void {
    var int1 = comp(743, 9);  // toplevel_v2_extra_action_button:button_graphic_cooldown
    IF_SETHIDE(false, int1);
    var int2 = dbrow_getfield(int0, 483424, 0);
    if ((int2 == 0)) {
        return;
    };
    var int3 = (CLIENTCLOCK() + (int2 * 30));
    IF_SETONTIMER(callback(script15976, int1, CLIENTCLOCK(), int3), int1);
    return;
}