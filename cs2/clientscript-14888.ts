//
function script14888(int0: number, int1: number, int2: number): void {
    if ((varplayer_9290 != 0)) {
        return;
    };
    var int3 = script14655(int1, int2);
    var int4 = ENUM_GETOUTPUTCOUNT(14095 as cs2enum);
    var int5 = -1 as cs2enum;
    var int6 = -1;
    var int7 = -1;
    switch (int0) {
        case 1: {
            if ((int3 == -1)) {
                if ((IF_GETHIDE(comp(693, 30)) == true)) {  // arch_research_management:panel_background_layer
                    script14890();
                };
            } else {
                int7 = (int7 + 1);
                while ((int7 < int4)) {
                    int5 = enum_getvalue(0, 26, 14095 as cs2enum, int7);
                    int6 = ENUM_GETOUTPUTCOUNT(int5);
                    if ((enum_getreversecount(74, int5, int3) > 0)) {
                        if ((IF_GETHIDE(comp(693, 30)) == true)) {  // arch_research_management:panel_background_layer
                            script14890();
                        };
                        script14884(int5, enum_getreverseindex(74, 0, int5, int3, 0));
                        return;
                    };
                };
            };
            break;
        }
    };
    return;
}