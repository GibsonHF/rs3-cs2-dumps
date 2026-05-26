//
function script8296(int0: number, int1: number, int2: number, int3: number, int4: number): void {
    IF_SETHIDE(0, 122880063);
    if ((int4 == -1)) {
        IF_SETSIZE(36, 32, 0, 0, 122880072);
        IF_SETOBJECT(int3, -1, 122880072);
    } else {
        IF_SETSIZE(32, 32, 0, 0, 122880072);
        IF_SETGRAPHIC(int4, 122880072);
    };
    IF_SETTEXT(OC_NAME(int3), 122880068);
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
    IF_SETTEXT(`Unlocked at : ${inttostring(int1, 10)}`, 122880069);
    IF_SETTEXT(`Current state : ${string0}${string1}`, 122880070);
    IF_SETTEXT(script14456(int3), 122880071);
    return;
}