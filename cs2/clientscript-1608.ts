//
function script1608(): void {
    if ((varclient_779 != -1 as bas)) {
        IF_SETMODELANIM(BAS_GETANIM_READY(varclient_779), 35979284);
    } else {
        IF_SETMODELANIM(BAS_GETANIM_READY(1426 as bas), 35979284);
    };
    IF_SETPLAYERMODEL_SELF(35979284);
    return;
}