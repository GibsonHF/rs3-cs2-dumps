//
function script14828(): void {
    CC_DELETEALL(comp(685, 81));
    CC_DELETEALL(comp(685, 82));
    if ((varclient_6762 == -1)) {
        varclient_6762 = 0;
    };
    var int0 = enum_getvalue(0, 74, 14073 as cs2enum, varclient_6762);
    if ((int0 == -1 as dbrow)) {
        return;
    };
    var int1 = script14762(44892241, 44892242, int0, 0, 0, IF_GETWIDTH(comp(685, 81)), 0);
    var int2 = DB_GETFIELDCOUNT(int0, 344272);
    var int3 = -1;
    int3 = (int3 + 1);
    while ((int3 < int2)) {
        if ((CC_FIND(comp(685, 82), int3) == 1)) {
            stack(364640);
            stack(dbrow_getfield(int0, 344272, int3));
            DB_FIND(0);
            CC_SETOPCURSOR(1, 172);
            CC_SETOP(1, "Info");
            stack(dbrow_findnext(14830 as dbrow));
            CC_SETONOP("i");
        };
    };
    IF_SETSCROLLSIZE(0, MAX(IF_GETHEIGHT(comp(685, 79)), int1), comp(685, 79));
    IF_SETSCROLLPOS(0, 0, comp(685, 79));
    script7791(44892240, 44892239);
    script10428(44892251, 44892252, 14072, (ENUM_GETOUTPUTCOUNT(14072 as cs2enum) - 1), "Select a filter", varclient_6762, 0);
    return;
}