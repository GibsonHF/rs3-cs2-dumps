//
function script12130(int0: dbrow, int1: unknown_int, int2: unknown_int, int3: unknown_int, string0: string): void {
    if ((int0 == -1 as dbrow)) {
        IF_SETTEXT("No Project", comp(1708, 59));
        IF_SETTEXT("Select a project from the list on the left to begin.", comp(1708, 60));
        stack(24225);
        stack(111935549);
        IF_SETGRAPHIC();
        varbitplayer_30250 = 0;
        return;
    };
    IF_SETTEXT(dbrow_getfield(int0, 20496, 0), comp(1708, 59));
    IF_SETTEXT(string0, comp(1708, 60));
    stack(dbrow_getfield(int0, 20560, 0));
    stack(111935549);
    IF_SETGRAPHIC();
    varplayer_5992 = int0;
    varbitplayer_30250 = 1;
    varclient_5118 = int2;
    varclient_5119 = int3;
    varplayer_5994 = int2;
    varplayer_5995 = int3;
    varclient_5116 = int1;
    IF_SETONTIMER(callback(), 111935525);
    IF_SETHIDE(0, 111935507);
    IF_SETHIDE(0, 111935546);
    IF_SETHIDE(0, 111935508);
    IF_SETHIDE(1, 111935545);
    IF_SETHIDE(1, 111935509);
    IF_SETHIDE(0, 111935525);
    IF_SETTEXT("Select five modules to build the prototype.", 111935529);
    IF_SETPOSITION(0, 35, 1, 1, 111935507);
    IF_SETONTIMER(callback(), 111935507);
    script12128();
    script12121();
    script12145();
    return;
}