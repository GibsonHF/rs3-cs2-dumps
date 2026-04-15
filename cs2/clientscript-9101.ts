//
function script9101(int0: struct): struct {
    if ((int0 == -1 as struct)) {
        return -1 as struct;
    };
    if ((struct_getparam(int0, 2961) == 1)) {
        if ((STAT_BASE(5 as stat) >= struct_getparam(int0, 2967))) {
            return struct_getparam(int0, 2968);
        };
        if ((STAT_BASE(5 as stat) >= struct_getparam(int0, 2965))) {
            return struct_getparam(int0, 2966);
        };
        return struct_getparam(int0, 2964);
    };
    return int0;
}