//
function script16270(int0: number, int1: number): number {
    if (((int0 != -1) && (struct_getparam(int0, 2219) == true))) {
        return 1;
    };
    if ((int1 != -1 as dbrow)) {
        switch (DB_GETROWTABLE(int1)) {
            case 370: {
                return script20819(int1);
            }
        };
    };
    return 0;
}