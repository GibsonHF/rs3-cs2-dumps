//
function script16080(int0: unknown_int, int1: int, int2: int, int3: unknown_int): void {
    var int4 = MAX(1, int2);
    IF_SETONTIMER(callback(), comp(485, 13));
    var int5 = script16723(int1);
    CC_DELETEALL(31784973);
    var string0 = `${inttostring(int2, 10)}x ${script17439(int1)}`;
    if ((IF_FIND(31784973) == 1)) {
        script7919(0, 0, 0, 0, 1, 0, 82, 100, 0, 0, int5, false, false, false, 0);
        CC_SETOP(1, "Information");
        CC_SETONOP(callback(script7774, string0, -2147483645, -1, 0));
        CC_SETOPCURSOR(1, 172);
        CC_SETONTIMER(callback());
        script16728(int1, int2);
    };
    return;
}