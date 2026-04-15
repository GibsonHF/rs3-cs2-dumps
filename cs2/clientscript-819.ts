//
function script819(): void {
    if (((varplayer_1784 != -1 as npc) && (varplayer_1784 != 0 as npc))) {
        IF_SETNPCHEAD(varplayer_1784, comp(663, 0));
    } else {
        IF_SETMODEL(-1 as model, comp(663, 0));
    };
    if ((varbitplayer_15085 == 1)) {
        IF_SETTEXT(script821(), comp(663, 3));
    } else if ((varplayer_1831 != -1 as obj)) {
        IF_SETTEXT(OC_NAME(varplayer_1831), comp(663, 3));
    } else {
        IF_SETTEXT("", comp(663, 3));
    };
    if ((varbitplayer_6044 > 50)) {
        varbitplayer_6044 = (varbitplayer_6044 - 50);
        IF_SETMODELANIM(enum_getvalue(0, 6, 1275 as cs2enum, varbitplayer_6044), comp(663, 0));
    } else {
        IF_SETMODELANIM(enum_getvalue(0, 6, 1276 as cs2enum, varbitplayer_6044), comp(663, 0));
    };
    return;
}