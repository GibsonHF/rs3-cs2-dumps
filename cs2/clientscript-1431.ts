//
function script1431(int0: component, int1: component, int2: int, int3: int, string0: string, string1: string): void {
    var int4 = script6428(int3, int2);
    if (((int3 == -1) && (int2 == 0))) {
        int4 = true;
    };
    if ((CC_FIND(comp(1026, 8), int2) == 1)) {
        script7872(true, 1, true, int4);
    } else {
        script7852(comp(1026, 8), int2, 0, 0, 1, 1, 0, 0, 1, 1, 4476 as dbrow, string0);
        script10631(string1);
        CC_SETONBUTTONCLICK(callback(script16791, int0, int1, int3));
        script7872(1, 1, 1, script6428(int3, int2));
    };
    return;
}