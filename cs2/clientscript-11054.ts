//
function script11054(): void {
    var int0 = struct_getparam(varplayer_5144, 4829);
    if ((int0 != -1 as struct)) {
        if ((struct_getparam(int0, 3038) != -1 as graphic)) {
            IF_SETGRAPHIC(struct_getparam(int0, 3038), comp(1591, 0));  // boss_instance:npc_background
        } else {
            IF_SETGRAPHIC(-1 as graphic, comp(1591, 0));  // boss_instance:npc_background
        };
        IF_SETNPCMODEL(struct_getparam(int0, 1347), comp(1591, 2));  // boss_instance:boss_model
        IF_SETMODELANIM(BAS_GETANIM_READY(varclient_4737), comp(1591, 2));  // boss_instance:boss_model
        IF_SETMODELANGLE(0, struct_getparam(int0, 3041), 0, 0, 0, struct_getparam(int0, 3040), comp(1591, 2));  // boss_instance:boss_model
    };
    if ((struct_getparam(varplayer_5144, 4827) != -1 as obj)) {
        IF_SETHIDE(false, comp(1591, 17));  // boss_instance:item_req
        IF_SETOBJECT(struct_getparam(varplayer_5144, 4827), -1, comp(1591, 6));  // boss_instance:coins_graphic
        IF_SETTEXT(inttostring(struct_getparam(varplayer_5144, 4828), 10), comp(1591, 7));  // boss_instance:item_text
        if ((INV_TOTAL(93 as inv, struct_getparam(varplayer_5144, 4827)) >= struct_getparam(varplayer_5144, 4828))) {
            IF_SETCOLOUR(3342130, comp(1591, 7));  // boss_instance:item_text
        } else {
            IF_SETCOLOUR(16724530, comp(1591, 7));  // boss_instance:item_text
        };
    } else {
        IF_SETHIDE(true, comp(1591, 17));  // boss_instance:item_req
    };
    return;
}