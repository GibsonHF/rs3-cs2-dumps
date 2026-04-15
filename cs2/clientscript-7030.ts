//
function script7030(int0: obj): string {
    var int1 = (INV_TOTAL(93 as inv, int0) + INV_TOTAL(95 as inv, int0));
    if ((int1 == 0)) {
        return "<col=FF0000>";
    };
    return "<col=FFFFFF>";
}