//
function script20322(int0: number, int1: number, int2: number, int3: number, string0: string): number {
    if ((CC_FINDBYCATEGORY(comp(1479, 15), 1, int0) == 1)) {  // league_parent_tasks:filter_scrollbar
        if ((unk11052(WORLDMAP_GETDISPLAYCOORD(int3)) == 1)) {
            CC_LIST_CLEARSELECTION();
            CC_LIST_SETISSELECTED(WORLDMAP_GETDISPLAYCOORD(int3), 1, 0);
        };
        return -1;
    };
    if ((STRING_LENGTH(string0) > 0)) {
        script2995(96927759, IF_GETNEXTSUBID(comp(1479, 15)), 0, int1, 0, 0, 0, 13, 1, 0, 17514, string0);  // league_parent_tasks:filter_scrollbar
        var int1 = (int1 + 16);
    };
    script8022(96927759, 1, int0, 0, int1, 0, 0, 0, 26, 1, 0, 4487, 1, int2, WORLDMAP_GETDISPLAYCOORD(int3));
    CC_SETONDROPDOWNSELECT(callback(script20290, int0, -2147483647, -2147483646));
    int1 = (int1 + 34);
    return int1;
}