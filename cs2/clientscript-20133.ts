//
function script20133(int0: number, int1: number): number {
    stack(int0);
    script15044();
    var int1 = [];
    if ((int1 == -1)) {
        unk11016(`Invalid locality ID : ${inttostring(int0, 10)}`);
        return 0;
    };
    var int2 = dbrow_getfield(int1, 1564688, 0);
    var int3 = 0;
    var int4 = ENUM_GETOUTPUTCOUNT(int2);
    while ((int3 < int4)) {
        if ((script20136(enum_getvalue(0, 0, int2, int3)) == 0)) {
            return 0;
        };
        int3 = (int3 + 1);
    };
    return 1;
}