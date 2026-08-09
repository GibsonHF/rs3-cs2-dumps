//
function script17314(int0: number, int1: number, string0: string): void {
    IF_SETNPCMODEL(script17310(1), comp(1152, 32));
    var int2 = 2;
    var int3 = 18237 as seq;
    if ((int1 == 1)) {
        varbitplayer_52884 = 1;
        int3 = 18471 as seq;
        int2 = 3;
    };
    IF_SETMODELANIM(int3, comp(1152, 32));
    varbitplayer_52882 = 1;
    IF_SETONTIMER(callback(script17315, 75497504, (SEQLENGTH(int3) - int2), int0, string0), comp(1152, 32));
    return;
}