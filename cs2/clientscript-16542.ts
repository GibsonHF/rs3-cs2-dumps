//
function script16542(int0: number, int1: number, int2: number, int3: number, int4: number): void {
    if ((int4 == 1)) {
        IF_SETGRAPHIC(9804 as graphic, int1);
        IF_SETCOLOUR(16777215, int0);
    } else if ((int3 == 1)) {
        IF_SETGRAPHIC(9806 as graphic, int1);
        IF_SETCOLOUR(16777215, int0);
    } else {
        IF_SETGRAPHIC(9802 as graphic, int1);
        IF_SETCOLOUR(4934475, int0);
    };
    if ((int2 != -1 as graphic)) {
        IF_SETGRAPHIC(int2, int0);
    };
    return;
}