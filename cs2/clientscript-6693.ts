//
function script6693(int0: number, int1: number, int2: number, int3: number): void {
    var int4 = MAX(MIN(varclient_2011, 10500), 0);
    script4542(SCALE(int4, 10500, 100), 87883812, 87883817);
    var string0 = `${inttostring(SCALE(int4, 10500, 100), 10)}% sleepy`;
    IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), int0);
    varclient_2 = 0;
    if ((int4 >= (10500 / 2))) {
        IF_SETGRAPHIC(12877, int1);
    } else {
        IF_SETGRAPHIC(12876, int1);
    };
    return;
}