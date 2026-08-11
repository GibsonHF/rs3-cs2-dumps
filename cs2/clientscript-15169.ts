//
function script15169(int0: number, int1: number, string0: string): void {
    if (((int0 == -1 as dbrow) || (DB_GETROWTABLE(int0) != 106))) {
        return;
    };
    var int2 = DB_GETFIELDCOUNT(int0, 434240);
    var string1 = script15122(int0);
    if ((PARAHEIGHT(string1, IF_GETWIDTH(comp(653, 112)), 57 as fontmetrics) > 1)) {  // event_crafting:recipe_info_name
        IF_SETGRAPHIC(11986 as graphic, comp(653, 110));  // event_crafting:item_crafting_title
        IF_SETSIZE(372, 46, 0, 0, comp(653, 110));  // event_crafting:item_crafting_title
        IF_SETPOSITION(5, 38, 0, 0, comp(653, 111));  // event_crafting:recipe_desc
    } else {
        IF_SETGRAPHIC(11985 as graphic, comp(653, 110));  // event_crafting:item_crafting_title
        IF_SETSIZE(372, 29, 0, 0, comp(653, 110));  // event_crafting:item_crafting_title
        IF_SETPOSITION(5, 30, 0, 0, comp(653, 111));  // event_crafting:recipe_desc
    };
    IF_SETTEXT(string1, comp(653, 112));  // event_crafting:recipe_info_name
    if ((STRING_LENGTH(string0) > 0)) {
        IF_SETTEXT(string0, comp(653, 111));  // event_crafting:recipe_desc
    };
    var int3 = dbrow_getfield(int0, 434320, 0);
    if ((int3 > 0)) {
        IF_SETTEXT(`+ ${TOSTRING_LOCALISED(int3, 1)}xp`, comp(653, 113));  // event_crafting:recipe_xp_info
        IF_SETHIDE(false, comp(653, 113));  // event_crafting:recipe_xp_info
    } else {
        IF_SETHIDE(true, comp(653, 113));  // event_crafting:recipe_xp_info
    };
    var int4 = 0;
    var int5 = -1 as obj;
    var int6 = -1 as graphic;
    [int5, int6] = script15126(int0);
    if ((int6 != 11678 as graphic)) {
        IF_SETGRAPHIC(int6, comp(653, 115));  // event_crafting:recipe_item_graphic
        IF_SETHIDE(false, comp(653, 115));  // event_crafting:recipe_item_graphic
        IF_SETHIDE(true, comp(653, 273));  // event_crafting:recipe_item_object_holder
    } else {
        IF_SETOBJECT_NONUM(int5, 0, comp(653, 275));  // event_crafting:recipe_object
        IF_SETHIDE(true, comp(653, 115));  // event_crafting:recipe_item_graphic
        IF_SETHIDE(false, comp(653, 273));  // event_crafting:recipe_item_object_holder
    };
    while ((int4 < INV_SIZE(894 as inv))) {
        IF_SETHIDE(true, script15132(int4));
        int4 = (int4 + 1);
    };
    int4 = 0;
    while ((int4 < int2)) {
        script15173(int0, int4, int2, int1);
        int4 = (int4 + 1);
    };
    script15171(script15117(int1, script15141(int0)));
    return;
}