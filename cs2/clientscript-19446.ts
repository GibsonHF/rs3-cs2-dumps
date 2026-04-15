//
function script19446(int0: npc, int1: npc, int2: struct, int3: struct, int4: struct, int5: component, int6: component, int7: component): void {
    if ((script19320() == 1)) {
        switch (int0) {
            case 31415: {
                var int0 = 31423 as npc;
                var int1 = 31424 as npc;
                break;
            }
            case 31419: {
                int0 = 31427 as npc;
                int1 = 31428 as npc;
                break;
            }
        };
    };
    IF_SETHIDE(false, int5);
    IF_SETNPCMODEL(int0, int5);
    IF_SETMODELANIM(struct_getparam(int2, 2277), int5);
    IF_SETMODELANGLE(0, 120, 0, 0, 0, 700, int5);
    IF_SETHIDE(false, int6);
    IF_SETNPCMODEL(int1, int6);
    IF_SETMODELANIM(struct_getparam(int3, 2277), int6);
    IF_SETMODELANGLE(-80, 80, 0, 0, 0, 800, int6);
    IF_SETHIDE(false, int7);
    IF_SETNPCMODEL(int0, int7);
    IF_SETMODELANIM(struct_getparam(int4, 2277), int7);
    IF_SETMODELANGLE(80, 80, 0, 0, 0, 800, int7);
    return;
}