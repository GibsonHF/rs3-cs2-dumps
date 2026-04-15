//
function script8296(int0: unknown_int, int1: int, int2: unknown_int, int3: obj, int4: unknown_int): void {
    IF_SETHIDE(false, comp(1875, 63));
    if ((int4 == -1)) {
        IF_SETSIZE(36, 32, 0, 0, comp(1875, 72));
        IF_SETOBJECT(int3, -1, comp(1875, 72));
    } else {
        IF_SETSIZE(32, 32, 0, 0, comp(1875, 72));
        stack(int4);
        stack(122880072);
        IF_SETGRAPHIC();
    };
    IF_SETTEXT(OC_NAME(int3), comp(1875, 68));
    var string0 = "<col=E12323>";
    var string1 = "";
    if ((int2 == 0)) {
        string1 = "Unlocked";
        string0 = "<col=FFFF00>";
    } else if ((int2 == 1)) {
        string1 = "Unlocked";
        string0 = "<col=00C800>";
    } else {
        string1 = "Locked";
    };
    IF_SETTEXT(`Unlocked at : ${inttostring(int1, 10)}`, comp(1875, 69));
    IF_SETTEXT(`Current state : ${string0}${string1}`, comp(1875, 70));
    IF_SETTEXT(script14456(int3), comp(1875, 71));
    return;
}