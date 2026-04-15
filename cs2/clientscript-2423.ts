//[clientscript,boardgames_sandtimer]
function script2423(int0: component): void {
    var int1 = -1 as seq;
    if ((varclient_811 == 0)) {
        int1 = 1358 as seq;
    } else if ((varclient_811 == 1)) {
        int1 = 1359 as seq;
    } else if ((varclient_811 == 2)) {
        int1 = 1360 as seq;
    } else if ((varclient_811 == 3)) {
        int1 = 1361 as seq;
    };
    IF_SETMODELANIM(-1 as seq, int0);
    IF_SETMODELANIM(int1, int0);
    return;
}