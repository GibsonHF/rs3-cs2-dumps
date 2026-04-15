//
function script7370(int0: int): void {
    if ((int0 == 0)) {
        IF_SETTEXT("You have not reached this zone yet.", comp(1379, 116));
    } else {
        IF_SETTEXT(`<col=ffcb05>Resource: ${enum_getvalue(0, 36, 7152 as cs2enum, (int0 + 1))}</col><br>${enum_getvalue(0, 36, 7157 as cs2enum, int0)}`, comp(1379, 116));
    };
    return;
}