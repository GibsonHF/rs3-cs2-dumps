//
function script1608(): void {
    if ((varclient_779 != -1 as bas)) {
        IF_SETMODELANIM(BAS_GETANIM_READY(varclient_779), comp(549, 20));
    } else {
        IF_SETMODELANIM(BAS_GETANIM_READY(1426 as bas), comp(549, 20));
    };
    IF_SETPLAYERMODEL_SELF(35979284);
    return;
}