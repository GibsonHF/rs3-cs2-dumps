//
function script13744(int0: number): void {
    var int1 = ENUM_GETOUTPUTCOUNT(int0);
    var int2 = 1;
    var int3 = 0;
    var int4 = IF_GETWIDTH(comp(1914, 1));  // elf_pvm_portal_choose_task:build_layer
    var int5 = ((int4 - 20) / 2);
    var int6 = 10;
    var string0 = "null";
    var int7 = 20;
    if ((script6431() == 1)) {
        int7 = 30;
    };
    while ((int2 <= int1)) {
        int3 = 0;
        if ((int0 == 14610 as cs2enum)) {
            stack(int2);
            script20935();
            int3 = [];
            if ((int3 == 0)) {
                stack(int2);
                script624();
                if (BRANCH_EQUALS(1)) {
                    int3 = 0;
                } else {
                    int3 = 1;
                };
            };
        };
        string0 = enum_getvalue(0, 36, int0, int2);
        script12501(125435905, 125435904, 28556, (8 + ((int4 / 2) * MODULO((int2 - 1), 2))), int6, int5, int7, (int2 - 1), int3, string0);
        if ((MODULO(int2, 2) == 0)) {
            int6 = (int6 + (int7 + 3));
        };
        int2 = (int2 + 1);
    };
    int6 = (int6 + (int7 + 3));
    if ((IF_GETHEIGHT(comp(1914, 5)) < int6)) {  // elf_pvm_portal_choose_task:content_layer
        IF_SETSCROLLSIZE(0, int6, comp(1914, 5));  // elf_pvm_portal_choose_task:content_layer
        script7791(125435910, 125435909);
    };
    return;
}