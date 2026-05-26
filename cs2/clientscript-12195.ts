//
function script12195(string0: string): void {
    script12196(0);
    var int0 = 112197663;
    CC_DELETEALL(int0);
    var int1 = 0;
    var int2 = 5;
    var int3 = 5;
    var int4 = (IF_GETWIDTH(int0) - 10);
    [int1, int2] = script12086(int0, int1, int3, int2, int4, "Oops", 32855);
    int2 = (int2 + 10);
    [int1, int2] = script12086(int0, int1, int3, int2, int4, `${string0}<br><br>You manage to safely recover your materials.`, 29166);
    int2 = (int2 + 10);
    CC_DELETEALL(112197668);
    CC_DELETEALL(112197696);
    IF_SETHIDE(0, 112197675);
    IF_SETHIDE(1, 112197692);
    return;
}