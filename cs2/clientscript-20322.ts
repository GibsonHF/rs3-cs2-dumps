//
function script20322(int0: number, int1: number, int2: number, int3: number, string0: string): number {
    if ((CC_FINDBYCATEGORY(comp(1479, 14), 1, int0) == 1)) {
        if ((unk11051(WORLDMAP_GETDISPLAYCOORD(int3)) == 1)) {
            CC_LIST_CLEARSELECTION();
            CC_LIST_SETISSELECTED(WORLDMAP_GETDISPLAYCOORD(int3), 1, 0);
        };
        return -1;
    };
    if ((STRING_LENGTH(string0) > 0)) {
        script2995(96927758, IF_GETNEXTSUBID(comp(1479, 14)), 0, int1, 0, 0, 0, 13, 1, 0, 17514, string0);
        var int1 = (int1 + 16);
    };
    script8022(96927758, 1, int0, 0, int1, 0, 0, 0, 26, 1, 0, 4487, 1, int2, WORLDMAP_GETDISPLAYCOORD(int3));
    CC_SETONDROPDOWNSELECT(callback(script20290, int0, -2147483647, -2147483646));
    int1 = (int1 + 30);
    return int1;
}