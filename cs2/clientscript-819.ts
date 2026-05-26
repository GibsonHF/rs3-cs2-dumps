//
function script819(): void {
    if (((varplayer_1784 != -1 as npc) && (varplayer_1784 != 0 as npc))) {
        IF_SETNPCHEAD(varplayer_1784, 43450368);
    } else {
        IF_SETMODEL(-1, 43450368);
    };
    if ((varbitplayer_15085 == 1)) {
        IF_SETTEXT(script821(), 43450371);
    } else if ((varplayer_1831 != -1 as obj)) {
        IF_SETTEXT(OC_NAME(varplayer_1831), 43450371);
    } else {
        IF_SETTEXT("", 43450371);
    };
    if ((varbitplayer_6044 > 50)) {
        varbitplayer_6044 = (varbitplayer_6044 - 50);
        IF_SETMODELANIM(enum_getvalue(0, 6, 1275 as cs2enum, varbitplayer_6044), 43450368);
    } else {
        IF_SETMODELANIM(enum_getvalue(0, 6, 1276 as cs2enum, varbitplayer_6044), 43450368);
    };
    return;
}