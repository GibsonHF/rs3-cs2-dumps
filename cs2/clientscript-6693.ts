//
function script6693(int0: unknown_int, int1: unknown_int, int2: unknown_int, int3: int): void {
    var int4 = MAX(MIN(varclient_2011, 10500), 0);
    script4542(SCALE(int4, 10500, 100), comp(1341, 36), comp(1341, 41));
    var string0 = `${inttostring(SCALE(int4, 10500, 100), 10)}% sleepy`;
    IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), int0);
    varclient_2 = 0;
    if ((int4 >= (10500 / 2))) {
        stack(12877);
        stack(int1);
        IF_SETGRAPHIC();
    } else {
        stack(12876);
        stack(int1);
        IF_SETGRAPHIC();
    };
    return;
}