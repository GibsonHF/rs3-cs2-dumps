//
function script15764(int0: dbrow): obj {
    if ((int0 == -1 as dbrow)) {
        return -1 as obj;
    };
    if ((DB_GETFIELDCOUNT(int0, 667920) == 0)) {
        return -1 as obj;
    };
    var int1 = dbrow_getfield(int0, 667920, 0);
    if (((int1 < 0) || (int1 >= INV_SIZE(675 as inv)))) {
        return -1 as obj;
    };
    return INV_GETOBJ(675 as inv, int1);
}