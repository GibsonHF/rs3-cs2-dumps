//
function script3649(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number): void {
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
    script3650(41549883, 41549882, int0);
    return;
}