//
function script15805(int0: int): unknown_int {
    if ((STAT_BASE(17 as stat) < struct_getparam(enum_getvalue(0, 73, 17106 as cs2enum, int0), 2236))) {
        return 0;
    };
    switch (int0) {
        case 2: {
            if ((STAT_BASE(enum_getvalue(0, 17, 681 as cs2enum, 10)) == 1)) {
                return 0;
            };
            break;
        }
        case 3: {
            if ((script2193(415 as quest) != 2)) {
                return 0;
            };
            break;
        }
    };
    if (((MAP_MEMBERS() == 0) && (script15773(10, int0) == 0))) {
        return 0;
    };
    return 1;
}