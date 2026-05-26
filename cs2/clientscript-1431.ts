//
function script1431(int0: number, int1: number, int2: number, int3: number, string0: string, string1: string): void {
    var int4 = script6428(int3, int2);
    if (((int3 == -1) && (int2 == 0))) {
        int4 = 1;
    };
    if ((CC_FIND(67239944, int2) == 1)) {
        script7872(1, 1, 1, int4);
    } else {
        script7852(67239944, int2, 0, 0, 1, 1, 0, 0, 1, 1, 4476, string0);
        script10631(string1);
        CC_SETONBUTTONCLICK(callback(script16791, int0, int1, int3));
        script7872(1, 1, 1, script6428(int3, int2));
    };
    return;
}