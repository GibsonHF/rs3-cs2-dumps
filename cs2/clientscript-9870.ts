//
function script9870(int0: number): void {
    var int1 = INV_GETOBJ(94, 3);
    if (((int1 != -1) && ((OC_MEMBERS(int1) == 0) || (MAP_MEMBERS() == 1)))) {
        IF_SETTEXT(OC_NAME(int1), int0);
    } else {
        IF_SETTEXT("Unarmed", int0);
    };
    return;
}