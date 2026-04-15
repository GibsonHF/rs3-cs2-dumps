//
function script13436(int0: int): void {
    var int1 = 0;
    var int2 = script13433(int0);
    var int3 = script13431(int0);
    var int4 = script13432(int0);
    var string0 = "";
    var int5 = ENUM_GETOUTPUTCOUNT(struct_getparam(int2, 6583));
    int1 = enum_getvalue(0, 0, struct_getparam(int2, 6583), (int4 + 1));
    string0 = enum_getvalue(0, 36, struct_getparam(int2, 6584), int4);
    var int6 = script13438(int0);
    CC_DELETEALL(int6);
    script13446();
    script13447();
    script13449();
    if ((int4 == (int5 - 1))) {
        int1 = script13434(int0);
        string0 = enum_getvalue(0, 36, struct_getparam(int2, 6584), (int4 - 1));
    };
    script13458(int0, 0);
    script13455(int0);
    script13457();
    if ((int0 == 1)) {
        script13437();
        script13452();
        script13441(int4);
    };
    return;
}