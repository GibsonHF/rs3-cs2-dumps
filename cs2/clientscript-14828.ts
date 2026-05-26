//
function script14828(): void {
    CC_DELETEALL(comp(685, 80));
    CC_DELETEALL(comp(685, 81));
    if ((varclient_6762 == -1)) {
        varclient_6762 = 0;
    };
    var int0 = enum_getvalue(0, 74, 14073 as cs2enum, varclient_6762);
    if ((int0 == -1 as dbrow)) {
        return;
    };
    var int1 = script14762(44892240, 44892241, int0, 0, 0, IF_GETWIDTH(comp(685, 80)), 0);
    var int2 = DB_GETFIELDCOUNT(int0, 344272);
    var int3 = -1;
    while ((++int3 < int2)) {
        if ((CC_FIND(comp(685, 81), int3) == 1)) {
            stack(364640);
            stack(dbrow_getfield(int0, 344272, int3));
            DB_FIND(0);
            CC_SETOPCURSOR(1, 172);
            CC_SETOP(1, "Info");
            stack(14830);
            dbrow_findnext();
            CC_SETONOP(callback());
        };
    };
    IF_SETSCROLLSIZE(0, MAX(IF_GETHEIGHT(comp(685, 78)), int1), comp(685, 78));
    IF_SETSCROLLPOS(0, 0, comp(685, 78));
    script7791(44892239, 44892238);
    script10428(44892250, 44892251, 14072, (ENUM_GETOUTPUTCOUNT(14072 as cs2enum) - 1), "Select a filter", varclient_6762, 0);
    return;
}