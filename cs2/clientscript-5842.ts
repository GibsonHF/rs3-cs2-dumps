//
function script5842(int0: number, int1: number, int2: number): number {
    var int3 = ((IF_GETWIDTH(int0) * 100) / int1);
    var int4 = ((IF_GETHEIGHT(int0) * 100) / int2);
    var int5 = MAX(int3, int4);
    return int5;
}