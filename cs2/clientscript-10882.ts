//
function script10882(): void {
    if ((varplayer_5055 == 0)) {
        IF_SETHIDE(1, 35979283);
        IF_SETHIDE(1, 35979280);
        IF_SETHIDE(0, 35979284);
        IF_SETHIDE(0, 35979281);
    } else {
        IF_SETHIDE(0, 35979283);
        IF_SETHIDE(0, 35979280);
        IF_SETHIDE(1, 35979284);
        IF_SETHIDE(1, 35979281);
        IF_SETNPCHEAD(enum_getvalue(0, 32, 9590 as cs2enum, varplayer_5055), 35979280);
        IF_SETMODELANIM(12411, 35979283);
        IF_SETNPCMODEL(enum_getvalue(0, 32, 9590 as cs2enum, varplayer_5055), 35979283);
        IF_SETMODELANIM(BAS_GETANIM_READY(varclient_4679), 35979283);
    };
    return;
}