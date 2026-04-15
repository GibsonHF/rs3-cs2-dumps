//
function script17248(int0: dbrow): unknown_int {
    if ((int0 == -1 as dbrow)) {
        return 1;
    };
    if ((DB_GETROWTABLE(int0) != 221)) {
        script12478("Invalid dbrow, pretending requirements are not met.");
        return 0;
    };
    if (((dbrow_getfield(int0, 905216, 0) == true) && (MAP_MEMBERS() == 0))) {
        return 0;
    };
    if (((DB_GETFIELDCOUNT(int0, 905232) > 0) && (script17249(int0) == 0))) {
        return 0;
    };
    if (((DB_GETFIELDCOUNT(int0, 905248) > 0) && (script17250(int0) == 0))) {
        return 0;
    };
    if (((DB_GETFIELDCOUNT(int0, 905264) > 0) && (script17288(int0) == 0))) {
        return 0;
    };
    if (((DB_GETFIELDCOUNT(int0, 905280) > 0) && (script17251(int0) == 0))) {
        return 0;
    };
    if (((DB_GETFIELDCOUNT(int0, 905296) > 0) && (script17252(int0) == 0))) {
        return 0;
    };
    if (((dbrow_getfield(int0, 905312, 0) != -1) && (script17253(int0) == 0))) {
        return 0;
    };
    if (((dbrow_getfield(int0, 905328, 0) != -1) && (script17254(int0) == 0))) {
        return 0;
    };
    if (((DB_GETFIELDCOUNT(int0, 905344) > 0) && (script17255(int0) == 0))) {
        return 0;
    };
    if (((DB_GETFIELDCOUNT(int0, 905360) > 0) && (script17256(int0) == 0))) {
        return 0;
    };
    return 1;
}