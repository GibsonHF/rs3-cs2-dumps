//
function script8484(int0: component, int1: int): void {
    var int2 = -1;
    var int3 = -1;
    if ((CC_FIND(int0, int1) == 1)) {
        if ((varclient_779 != -1 as bas)) {
            CC_SETMODELANIM(BAS_GETANIM_READY(varclient_779));
        } else {
            CC_SETMODELANIM(BAS_GETANIM_READY(1426 as bas));
        };
    };
    return;
}