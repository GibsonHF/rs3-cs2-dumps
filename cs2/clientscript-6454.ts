//
function script6454(int0: number, int1: number, int2: number): void {
    var string0 = script4693(int1, int2);
    var int3 = (40 + STRINGWIDTH(string0, 28));
    IF_SETTEXT(string0, 85918167);
    IF_SETSIZE(int3, 34, 0, 0, 85918166);
    CC_DELETEALL(85918208);
    var int4 = -1 as dbrow;
    var int5 = -1 as struct;
    if ((int0 != -1 as struct)) {
        int5 = struct_getparam(int0, 5766);
        if ((int5 != -1 as struct)) {
            var int0 = int5;
        };
        int4 = struct_getparam(int0, 5418);
        if ((int4 != -1 as dbrow)) {
            script18118(int4);
        };
    };
    return;
}