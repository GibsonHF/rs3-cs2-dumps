//
function script18079(int0: dbrow, int1: component, int2: int): int {
    var int3 = comp(1226, 28);
    IF_SETPOSITION(0, int2, 0, 0, int1);
    IF_SETSIZE(16, (IF_GETHEIGHT(int1) - int2), 0, 0, int3);
    IF_SETPOSITION(IF_GETX(int3), int2, 0, 0, int3);
    var int2 = 0;
    int2 = script18085(int0, int1, int2);
    int2 = script18081(int0, int1, int2);
    int2 = script18082(int0, int1, int2);
    int2 = script18083(int0, int1, int2);
    int2 = script18084(int0, int1, int2);
    return int2;
}