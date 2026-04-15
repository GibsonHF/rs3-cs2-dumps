//
function script15404(int0: component): void {
    var int1 = script15403();
    var int2 = 0;
    if ((int1 != -1 as dbrow)) {
        int2 = dbrow_getfield(int1, 479296, 0);
    };
    IF_SETTEXT(`Minimum value: ${TOSTRING_LOCALISED(int2, 1)}`, int0);
    return;
}