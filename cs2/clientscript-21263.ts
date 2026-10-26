//
function script21263(): void {
    if (((DB_GETFIELDCOUNT(int0, 499808) > 0) && (GENDER() == 1))) {
        stack(dbrow_getfield(int0, 499808, 0));
        return;
    };
    stack(dbrow_getfield(int0, 499792, 0));
    return;
}