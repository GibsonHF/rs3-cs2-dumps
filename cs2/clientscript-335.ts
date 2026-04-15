//
function script335(int0: int, int1: int, int2: int, int3: unknown_int): [int, int] {
    var int4 = 1200;
    if ((MAP_MEMBERS() == 1)) {
        int4 = 2000;
    };
    if ((varclient_6370 > DATE_MINUTES())) {
        if ((MAP_MEMBERS() == 1)) {
            int4 = 2200;
        } else {
            int4 = 1250;
        };
    };
    if ((enum_getreversecount(0, struct_getparam(35244, 3839), DATE_RUNEDAY()) > 0)) {
        int4 = 1100;
    };
    var int5 = ((int2 * 1000) / int4);
    var int6 = (int2 - int5);
    return [(int0 + int5), (int1 + int6)];
}