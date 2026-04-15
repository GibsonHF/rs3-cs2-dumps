//
function script3649(int0: int, int1: component, int2: component, int3: component, int4: component, int5: unknown_int): void {
    if ((int5 != 1)) {
        return;
    };
    if ((varclient_6743 != varplayer_9078)) {
        return;
    };
    if ((varclient_6742 == int0)) {
        varclient_6742 = -1;
        IF_SETHIDE(true, int1);
        IF_SETHIDE(false, int2);
        script9033();
        script3664();
    } else {
        if ((varclient_6742 == -1)) {
            script3664();
        };
        varclient_6742 = int0;
        IF_SETHIDE(false, int1);
        IF_SETHIDE(true, int2);
        IF_SETHIDE(true, int3);
        IF_SETHIDE(false, int4);
        script9034();
    };
    script3650(comp(634, 59), comp(634, 58), int0);
    return;
}