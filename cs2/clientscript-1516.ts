//[proc,player_kit_player_create]
function script1516(int0: component, int1: int, int2: int): void {
    CC_CREATE(int0, 6, IF_GETNEXTSUBID(int0));
    CC_SETSIZE(0, 0, 1, 1);
    CC_SETPOSITION(0, 0, 1, 1);
    CC_SETPLAYERMODEL_SELF();
    CC_SETMODELANGLE(0, int2, 0, 0, 0, int1);
    if ((varclient_779 != -1 as bas)) {
        CC_SETMODELANIM(BAS_GETANIM_READY(varclient_779));
    } else {
        CC_SETMODELANIM(BAS_GETANIM_READY(1426 as bas));
    };
    CC_SETONVARCTRANSMIT(callback(script1517, -2147483645, -2147483643, 779, 1));
    CC_SETONCLICK(callback(script347, -2147483645, -2147483643, -2147483647));
    return;
}