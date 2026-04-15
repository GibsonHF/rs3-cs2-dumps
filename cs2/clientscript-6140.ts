//
function script6140(int0: int, int1: int): void {
    var int2 = 10;
    var int3 = ((int0 * 100) - varclient_1886);
    var int4 = ((int1 * 100) - varclient_1887);
    var int5 = 100;
    if (((((int3 <= int5) && (int3 >= (0 - int5))) && (int4 <= int5)) && (int4 >= (0 - int5)))) {
        script6142(int0, int1);
        varclient_1886 = (int0 * 100);
        varclient_1887 = (int1 * 100);
    } else {
        int3 = SCALE(int2, 100, int3);
        int4 = SCALE(int2, 100, int4);
        varclient_1886 = (varclient_1886 + int3);
        varclient_1887 = (varclient_1887 + int4);
        script6142((varclient_1886 / 100), (varclient_1887 / 100));
    };
    return;
}