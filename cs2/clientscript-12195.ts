//
function script12195(string0: string): void {
    script12196(false);
    var int0 = comp(1712, 31);
    CC_DELETEALL(int0);
    var int1 = 0;
    var int2 = 5;
    var int3 = 5;
    var int4 = (IF_GETWIDTH(int0) - 10);
    [int1, int2] = script12086(int0, int1, int3, int2, int4, "Oops", 32855 as struct);
    int2 = (int2 + 10);
    [int1, int2] = script12086(int0, int1, int3, int2, int4, `${string0}<br><br>You manage to safely recover your materials.`, 29166 as struct);
    int2 = (int2 + 10);
    CC_DELETEALL(comp(1712, 36));
    CC_DELETEALL(comp(1712, 64));
    IF_SETHIDE(false, comp(1712, 43));
    IF_SETHIDE(true, comp(1712, 60));
    return;
}