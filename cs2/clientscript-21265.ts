//
function script21265(): void {
    var int1 = -1;
    if (((int0 == 0) || (int0 == 1))) {
        int1 = WORLDMAP_LISTELEMENT_START(1425424, 0, 4, 0);
    } else {
        int1 = WORLDMAP_LISTELEMENT_START(1425424, int0, 3, 0);
    };
    CC_SETPARAM_STRING(int1, 1425408, 0, -1, 0);
    var int2 = -1;
    var int3 = -1;
    var int4 = dbrow_findnext();
    while ((int4 != -1 as dbrow)) {
        if ((DB_GETFIELDCOUNT(int4, 1425504) > 0)) {
            int2 = dbrow_getfield(int4, 1425504, 0);
            int3 = dbrow_getfield(int4, 1425520, 0);
            if ((script20846(int2, int3) == 1)) {
                stack(1);
                return;
            };
        };
        int4 = dbrow_findnext();
    };
    stack(0);
    return;
}