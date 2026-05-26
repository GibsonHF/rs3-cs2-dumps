//
function script17749(int0: number, int1: number): void {
    script17754();
    IF_SETHIDE(0, 80084997);
    IF_SETHIDE(0, 80085049);
    var int2 = 0;
    var string0 = "";
    if ((int1 != -1)) {
        [int2, string0] = script17490(int1);
        if ((int0 != -1 as dbrow)) {
            IF_SETTEXT(`Requires:<br>- Access to tier <col=ffffff>${dbrow_getfield(int0, 950272, 0)}</col> talents`, 80085131);
        } else {
            IF_SETTEXT("Requires:", 80085131);
        };
        IF_SETTEXT(script17486(int1), 80085126);
        IF_SETGRAPHIC(script17489(int1, 0, 1), 80085129);
        IF_SETTEXT(`${IF_GETTEXT(80085131)}${string0}`, 80085131);
    } else if ((int0 != -1 as dbrow)) {
        [int2, string0] = script17482(int0);
        IF_SETTEXT(`Tier <col=ffffff>${dbrow_getfield(int0, 950272, 0)}</col>`, 80085126);
        IF_SETGRAPHIC(25128, 80085129);
        IF_SETTEXT(`Requires:${string0}`, 80085131);
    } else if ((varplayer_11091 != -1 as dbrow)) {
        IF_SETTEXT(dbrow_getfield(varplayer_11091, 946192, 0), 80085126);
        IF_SETGRAPHIC(25128, 80085129);
        switch (varplayer_11091) {
            case 7599: {
                string0 = "The amount of XP required to earn a talent point will increase.";
                break;
            }
        };
        IF_SETTEXT(string0, 80085131);
    };
    return;
}