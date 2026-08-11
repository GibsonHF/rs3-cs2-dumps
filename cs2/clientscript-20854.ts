//
function script20854(int0: number, int1: number, int2: number, string0: string): number {
    var int3 = MAX(35, script15891(string0, (IF_GETWIDTH(comp(1495, 43)) - 37), int1, 0));  // marketplace_preview:scrollbar_layer
    script14391(97976363, IF_GETNEXTSUBID(comp(1495, 43)), 0, (int0 + 15), 0, 0, 0, int3, 1, 0);  // marketplace_preview:scrollbar_layer
    script7918(UI_GETCATEGORY(IF_GETNEXTSUBID(comp(1495, 43))), UI_GETDYNID(IF_GETNEXTSUBID(comp(1495, 43))), 0, 0, 0, 0, 32, 32, 0, 0, int2);  // marketplace_preview:scrollbar_layer
    script10485(UI_GETCATEGORY(IF_GETNEXTSUBID(comp(1495, 43))), UI_GETDYNID(IF_GETNEXTSUBID(comp(1495, 43))), 0, 0, 2, 0, 37, 0, 1, 1, 2100, string0);  // marketplace_preview:scrollbar_layer
    return ((int0 + int3) + 15);
}