//
function script16271(int0: number, int1: number): number {
    if (((int0 != -1) && (struct_getparam(int0, 2218) == true))) {
        return 1;
    };
    switch (DB_GETROWTABLE(int1)) {
        case 370: {
            return script20820(int1);
        }
    };
    return 0;
}