//
function script1552(int0: number, int1: number, int2: number, int3: number, string0: string): number {
    var int4 = 0;
    if ((CC_FIND(int2, int3) == 1)) {
        int4 = (CC_GETX() + script5276(CC_GETWIDTH(), 2));
    } else if ((int3 == -1)) {
        if ((IF_FIND(int2) == 1)) {
            int4 = (CC_GETX() + script5276(CC_GETWIDTH(), 2));
        } else {
            return 0;
        };
    } else {
        return 0;
    };
    return script1551(int0, string0, int1, (int4 - script5276(STRINGWIDTH(script1602(string0), int1), 2)));
}