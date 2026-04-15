//
function script1552(int0: int, int1: fontmetrics, int2: component, int3: int, string0: string): int {
    var int4 = 0;
    if (((CC_FIND(int2, int3) == 1) || ((int3 == -1) && (IF_FIND(int2) == 1)))) {
        int4 = (CC_GETX() + script5276(CC_GETWIDTH(), 2));
    } else {
        return 0;
    };
    return script1551(int0, string0, int1, (int4 - script5276(STRINGWIDTH(script1602(string0), int1), 2)));
}