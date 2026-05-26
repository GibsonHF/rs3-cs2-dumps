//[clientscript,boardgames_sandtimer]
function script2423(int0: number): void {
    var int1 = -1;
    if ((varclient_811 == 0)) {
        int1 = 1358;
    } else if ((varclient_811 == 1)) {
        int1 = 1359;
    } else if ((varclient_811 == 2)) {
        int1 = 1360;
    } else if ((varclient_811 == 3)) {
        int1 = 1361;
    };
    IF_SETMODELANIM(-1, int0);
    IF_SETMODELANIM(int1, int0);
    return;
}