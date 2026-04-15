//
function script1517(int0: component, int1: int): void {
    if ((CC_FIND(int0, int1) == 1)) {
        if ((varclient_779 != -1 as bas)) {
            CC_SETMODELANIM(BAS_GETANIM_READY(varclient_779));
        } else {
            CC_SETMODELANIM(BAS_GETANIM_READY(1426 as bas));
        };
    };
    return;
}