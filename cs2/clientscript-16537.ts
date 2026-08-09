//
function script16537(int0: number, int1: number): void {
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    var int5 = dbrow_getfield(int1, 725072, 0);
    var int6 = dbrow_getfield(int1, 725088, 0);
    if ((int5 > 1)) {
        int4 = 0;
        stack(int0);
        stack(0);
        stack(int4);
        int4 = (int4 + 1);
        script15938(0, 0, 1, 1, 100, 100, 0, 0);
        stack(0);
        stack(int4);
        int4 = (int4 + 1);
        script7919(0, 6, 1, 1, SCALE(3, 2, 34), SCALE(3, 2, 44), 0, 0, script8948(int5), 1, 0, 0, 0);
        CC_SETALPHA(0);
    };
    if ((int6 > 1)) {
        int4 = 0;
        stack(int0);
        stack(1);
        stack(int4);
        int4 = (int4 + 1);
        script15938(0, 0, 1, 1, 100, 100, 0, 0);
        stack(1);
        stack(int4);
        int4 = (int4 + 1);
        script7919(0, 0, 1, 1, SCALE(5, 2, 27), SCALE(5, 2, 27), 0, 0, script10980(int6), 0, 0, 0, 0);
    };
    return;
}