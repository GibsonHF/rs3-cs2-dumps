//
function script19299(int0: int): void {
    var int1 = -1 as obj;
    var int2 = 0;
    var int3 = 1;
    [int1, int2, int3] = script19216(int0);
    script15938(comp(1290, 78), int0, 0, 0, 0, 1, 1, 162, 0, 0, 1);
    script7918(int0, 2, 0, 0, 1, 0, 82, 100, 0, 0, script227(int3));
    script14420(int1);
    CC_SETOP(1, "Examine");
    CC_SETONOP(callback(script7774, script17427(int1), CC_GETLAYER(), CC_GETID(), 0));
    script9861(int0, 3, 1, 34, 1, 0, 36, 32, 0, 0, int1, int2, 0, 1);
    script7918(int0, 4, 0, 0, 1, 2, 0, 80, 1, 0, 26159);
    script10485(int0, 5, 0, 24, 1, 2, 34, 40, 1, 0, 2100, `${inttostring(int2, 10)} x ${OC_NAME(int1)}`);
    CC_SETTEXTALIGN(1, 0, 0);
    CC_SETCOLOUR(16777215);
    CC_SETTEXTSHADOW(1);
    return;
}