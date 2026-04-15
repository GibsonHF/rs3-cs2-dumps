//
function script11613(int0: struct, int1: npc, int2: bas, int3: component): void {
    if ((int0 == -1 as struct)) {
        script12478("Shop data is null.");
        return;
    };
    var int4 = struct_getparam(int0, 5044);
    if ((int4 == 0)) {
        int4 = struct_getparam(int0, 2541);
    };
    var int5 = struct_getparam(int0, 8666);
    if (((IF_GETLAYER(int3) == comp(1594, 81)) && (int5 == 650))) {
        int5 = 400;
    };
    if ((IF_GETLAYER(int3) == comp(891, 9))) {
        int4 = (int4 - 70);
    };
    IF_SETNPCMODEL(int1, int3);
    IF_SETMODELANIM(BAS_GETANIM_READY(int2), int3);
    IF_SETMODELANGLE(1000, int4, 0, 180, 0, int5, int3);
    if ((struct_getparam(int0, 3847) == 1)) {
        script11614(int0);
    };
    return;
}