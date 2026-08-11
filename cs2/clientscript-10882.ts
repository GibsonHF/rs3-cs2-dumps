//
function script10882(): void {
    if ((varplayer_5055 == 0)) {
        IF_SETHIDE(true, comp(549, 19));  // boothpreview:npc_model
        IF_SETHIDE(true, comp(549, 16));  // boothpreview:npc_head
        IF_SETHIDE(false, comp(549, 20));  // boothpreview:playermodel
        IF_SETHIDE(false, comp(549, 17));  // boothpreview:chathead
    } else {
        IF_SETHIDE(false, comp(549, 19));  // boothpreview:npc_model
        IF_SETHIDE(false, comp(549, 16));  // boothpreview:npc_head
        IF_SETHIDE(true, comp(549, 20));  // boothpreview:playermodel
        IF_SETHIDE(true, comp(549, 17));  // boothpreview:chathead
        IF_SETNPCHEAD(enum_getvalue(0, 32, 9590 as cs2enum, varplayer_5055), comp(549, 16));  // boothpreview:npc_head
        IF_SETMODELANIM(12411 as seq, comp(549, 19));  // boothpreview:npc_model
        IF_SETNPCMODEL(enum_getvalue(0, 32, 9590 as cs2enum, varplayer_5055), comp(549, 19));  // boothpreview:npc_model
        IF_SETMODELANIM(BAS_GETANIM_READY(varclient_4679), comp(549, 19));  // boothpreview:npc_model
    };
    return;
}