//
function script7020(int0: dbrow, int1: int): string {
    if ((((int0 != -1 as dbrow) && (int1 > 0)) && (script6061(dbrow_getfield(int0, 208896, 0)) < int1))) {
        return "<col=FF0000>";
    };
    return "<col=FFFFFF>";
}