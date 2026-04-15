//
function script16537(int0: component, int1: dbrow): void {
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    var int5 = dbrow_getfield(int1, 725072, 0);
    var int6 = dbrow_getfield(int1, 725088, 0);
    if ((int5 > 1)) {
        int4 = 0;
        script15938(int0, 0, int4++, 0, 0, 1, 1, 100, 100, 0, 0);
        script7919(0, int4++, 0, 6, 1, 1, SCALE(3, 2, 34), SCALE(3, 2, 44), 0, 0, script8948(int5), true, false, false, 0);
        CC_SETALPHA(0);
    };
    if ((int6 > 1)) {
        int4 = 0;
        script15938(int0, 1, int4++, 0, 0, 1, 1, 100, 100, 0, 0);
        script7919(1, int4++, 0, 0, 1, 1, SCALE(5, 2, 27), SCALE(5, 2, 27), 0, 0, script10980(int6), false, false, false, 0);
    };
    return;
}