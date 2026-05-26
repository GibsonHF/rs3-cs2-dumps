//
function script16542(int0: number, int1: number, int2: number, int3: number, int4: number): void {
    if ((int4 == 1)) {
        stack(9804);
        stack(int1);
        IF_SETGRAPHIC();
        IF_SETCOLOUR(16777215, int0);
    } else if ((int3 == 1)) {
        stack(9806);
        stack(int1);
        IF_SETGRAPHIC();
        IF_SETCOLOUR(16777215, int0);
    } else {
        stack(9802);
        stack(int1);
        IF_SETGRAPHIC();
        IF_SETCOLOUR(4934475, int0);
    };
    if ((int2 != -1)) {
        stack(int2);
        stack(int0);
        IF_SETGRAPHIC();
    };
    return;
}