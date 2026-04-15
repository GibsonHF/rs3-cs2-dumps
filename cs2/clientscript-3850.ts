//
function script3850(int0: unknown_int, int1: component): void {
    CC_CREATE(int1, 6, 0);
    CC_SETSIZE(0, 0, 1, 1);
    CC_SETPOSITION(0, 0, 1, 1);
    CC_SETPLAYERMODEL_SELF();
    CC_SETMODELANGLE(0, 100, 0, 0, 0, 380);
    CC_SETONVARCTRANSMIT(callback(script8483, -2147483645, -2147483643, 779, 1));
    IF_SETDRAGGABLE(int1, -1, int0);
    IF_SETONDRAG(callback(script8479, int0, int1, 0), int0);
    IF_SETONDRAGCOMPLETE(callback(script8480, int0, int1, 0), int0);
    script8484(int1, 0);
    IF_SETMOUSEOVERCURSOR(189, int0);
    return;
}