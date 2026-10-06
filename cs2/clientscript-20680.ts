//
function script20680(int0: number): number {
    script14391(98172930, IF_GETNEXTSUBID(comp(1498, 2)), 0, int0, 1, 0, 544, 98, 0, 0);  // marketplace_store:items_holder
    script7918(UI_GETCATEGORY(IF_GETNEXTSUBID(comp(1498, 2))), UI_GETDYNID(IF_GETNEXTSUBID(comp(1498, 2))), 0, 0, 1, 0, 0, 24, 1, 1, int2);  // marketplace_store:items_holder
    script7918(UI_GETCATEGORY(IF_GETNEXTSUBID(comp(1498, 2))), UI_GETDYNID(IF_GETNEXTSUBID(comp(1498, 2))), 0, 0, 1, 0, 0, 24, 1, 1, 15943);  // marketplace_store:items_holder
    script7918(UI_GETCATEGORY(IF_GETNEXTSUBID(comp(1498, 2))), UI_GETDYNID(IF_GETNEXTSUBID(comp(1498, 2))), 0, 0, 1, 2, 200, 24, 0, 0, 36197);  // marketplace_store:items_holder
    var int3 = UI_GETCATEGORY(IF_GETNEXTSUBID(comp(1498, 2)));  // marketplace_store:items_holder
    var int4 = UI_GETDYNID(IF_GETNEXTSUBID(comp(1498, 2)));  // marketplace_store:items_holder
    stack(int3);
    stack(int4);
    stack(0);
    stack(1);
    script10485(1, 2, 200, 24, 0, 0, 2099, int1, string0, script20682(string1));
    CC_SETTEXTALIGN(1, 1, 0);
    CC_SETONTIMER(callback(script20681, int3, int4, int1, string0, string1));
    var int0 = (int0 + 103);
    return int0;
}