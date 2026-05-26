//
function script12038(int0: number): number {
    if ((MAP_MEMBERS() == 0)) {
        if ((enum_hasoutput(17, 10327, int0) == 1)) {
            return 1;
        };
        if ((enum_hasoutput(17, 5472, int0) == 1)) {
            if (((int0 == 27 as stat) || (int0 == 28 as stat))) {
                return 20;
            };
            return 5;
        };
    };
    return enum_getvalue(17, 0, 10865 as cs2enum, int0);
}