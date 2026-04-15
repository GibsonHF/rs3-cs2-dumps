//
function script8280(int0: component): void {
    if ((IF_FIND(int0) == 1)) {
        CC_SETPLAYERMODEL_SELF();
        CC_SETMODELANGLE(0, 100, 0, 0, 0, 380);
        if ((varclient_779 != -1 as bas)) {
            CC_SETMODELANIM(BAS_GETANIM_READY(varclient_779));
        } else {
            CC_SETMODELANIM(BAS_GETANIM_READY(1426 as bas));
        };
        CC_SETONVARCTRANSMIT(callback(script1517, -2147483645, -2147483643, 779, 1));
        CC_SETONCLICK(callback(script347, -2147483645, -2147483643, -2147483647));
    };
    return;
}