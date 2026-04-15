//[clientscript,rand_load_shop]
function script2260(int0: component, int1: component, int2: component, int3: component): void {
    var int4 = IF_GETWIDTH(int0);
    var int5 = IF_GETHEIGHT(int0);
    var int6 = 0;
    var int7 = 0;
    var int8 = 0;
    var int9 = 0;
    var int10 = 0;
    var int11 = -1;
    var int12 = 2987 as cs2enum;
    var int13 = 2988 as cs2enum;
    [int12, int13] = script9466();
    CC_DELETEALL(int1);
    CC_DELETEALL(int2);
    CC_DELETEALL(int3);
    script6200(int1, 100, 13, 0, 0, 29 as fontmetrics, "Resources:", 0);
    [int6, int10] = script14326(int1, int2, int12, (int10 + 20), int6, int4);
    script6200(int0, 100, 13, 0, (int10 + 10), 29 as fontmetrics, "Tools:", 0);
    int10 = (int10 + 30);
    [int6, int10] = script14326(int1, int2, int13, int10, int6, int4);
    IF_SETSCROLLSIZE(0, int10, int0);
    script7791(int3, int0);
    return;
}