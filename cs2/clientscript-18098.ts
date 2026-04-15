//
function script18098(int0: int, int1: int, int2: int): int {
    var int3 = 50;
    var int4 = 110;
    script7858(0, int0, -60, int2, 1, 0, int4, int3, 0, 0, 7952 as dbrow, script18101(int0));
    CC_SETOP(1, script18100(int0));
    script7858(0, int1, 60, int2, 1, 0, int4, int3, 0, 0, 7952 as dbrow, script18101(int1));
    CC_SETOP(1, script18100(int1));
    return (int2 + int3);
}