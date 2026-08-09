//
function script5227(): void {
    script5228(4);
    script5228(5);
    script5228(6);
    script5228(7);
    script5228(8);
    script5228(9);
    script5228(10);
    script5228(11);
    script5228(12);
    script5228(13);
    script5228(14);
    script5228(15);
    var int0 = IF_GETPARENTLAYER(comp(1259, 171));
    if ((int0 == comp(-1, 65535))) {
        return;
    };
    var int1 = 2;
    if ((IF_GETY(comp(1259, 171)) > (IF_GETHEIGHT(int0) / 2))) {
        int1 = 0;
    };
    var string0 = "Teleport to the keep.";
    IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), comp(1259, 171));
    IF_SETOP(1, "Teleport to keep", comp(1259, 171));
    int1 = 2;
    if ((IF_GETY(comp(1259, 174)) > (IF_GETHEIGHT(int0) / 2))) {
        int1 = 0;
    };
    string0 = "Teleport to the town square.";
    IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), comp(1259, 174));
    IF_SETOP(1, "Teleport to town square", comp(1259, 174));
    int1 = 2;
    if ((IF_GETY(comp(1259, 172)) > (IF_GETHEIGHT(int0) / 2))) {
        int1 = 0;
    };
    string0 = "Teleport to the portal.";
    IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), comp(1259, 172));
    IF_SETOP(1, "Teleport to portal", comp(1259, 172));
    int1 = 2;
    if ((IF_GETY(comp(1259, 173)) > (IF_GETHEIGHT(int0) / 2))) {
        int1 = 0;
    };
    string0 = "Teleport to the welcome area.";
    IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), comp(1259, 173));
    IF_SETOP(1, "Teleport to welcome area", comp(1259, 173));
    int1 = 2;
    if ((IF_GETY(comp(1259, 175)) > (IF_GETHEIGHT(int0) / 2))) {
        int1 = 0;
    };
    string0 = "Teleport to the battlefield.";
    IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), comp(1259, 175));
    IF_SETOP(1, "Teleport to welcome area", comp(1259, 173));
    return;
}