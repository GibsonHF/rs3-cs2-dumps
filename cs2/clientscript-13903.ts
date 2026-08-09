//
function script13903(): void {
    if ((varbitplayer_45140 != 0)) {
        IF_TRIGGEROP(comp(517, 259), -1, 1);
        script14032(0);
    };
    script10444();
    IF_SETHIDE(true, comp(517, 197));
    script10239();
    script9511(1);
    script9325(varclient_6711, 1);
    varclient_6684 = 1;
    varclient_2235 = 33882346;
    varclient_2236 = 8;
    varclient_2237 = 12;
    var string0 = "";
    IF_SETONTIMER(callback(script13905, string0, CLIENTCLOCK()), comp(517, 231));
    IF_SETONTIMER(callback(script9830, string0, CLIENTCLOCK(), 33882345, 33882314, 1), comp(517, 233));
    script9833(33882346, 33882347, 33882348, 33882349, 33882351, 0, 0);
    IF_SETHIDE(false, comp(517, 257));
    IF_SETPOSITION(0, 0, 2, 2, comp(517, 257));
    script13993(33882369, -1, 28228, "Cancel Search");
    IF_SETONOP(callback(script13898), comp(517, 259));
    return;
}