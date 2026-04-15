//
function script10882(): void {
    if ((varplayer_5055 == 0)) {
        IF_SETHIDE(true, comp(549, 19));
        IF_SETHIDE(true, comp(549, 16));
        IF_SETHIDE(false, comp(549, 20));
        IF_SETHIDE(false, comp(549, 17));
    } else {
        IF_SETHIDE(false, comp(549, 19));
        IF_SETHIDE(false, comp(549, 16));
        IF_SETHIDE(true, comp(549, 20));
        IF_SETHIDE(true, comp(549, 17));
        IF_SETNPCHEAD(enum_getvalue(0, 32, 9590 as cs2enum, varplayer_5055), comp(549, 16));
        IF_SETMODELANIM(12411 as seq, comp(549, 19));
        IF_SETNPCMODEL(enum_getvalue(0, 32, 9590 as cs2enum, varplayer_5055), comp(549, 19));
        IF_SETMODELANIM(BAS_GETANIM_READY(varclient_4679), comp(549, 19));
    };
    return;
}