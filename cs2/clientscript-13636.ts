//
function script13636(int0: int, int1: int, int2: int, int3: struct, int4: component, int5: component, string0: string): void {
    IF_SETSCROLLSIZE(int0, (int2 - struct_getparam(int3, 7265)), int4);
    IF_SETSIZE(int0, ((int1 - struct_getparam(int3, 7265)) - 2), 0, 0, int4);
    IF_SETPOSITION(0, struct_getparam(int3, 7265), 0, 0, int4);
    if ((int1 != int2)) {
        script7791(comp(1322, 14), int4);
        IF_SETPARAM_INT(6313, 4, comp(1322, 14));
        IF_SETPARAM_INT(6312, 15, comp(1322, 14));
        if ((script13749() == true)) {
            script14182(int4);
            stack(3711);
            stack(int4);
            stack(-2147483645);
            stack("ii");
            stack(script83());
            IF_SETONRELEASE();
        };
        IF_SETHIDE(false, comp(1322, 16));
        IF_SETHIDE(false, comp(1322, 15));
    };
    IF_SETSIZE(int0, int1, 0, 0, int5);
    script4512(int5, struct_getparam(int3, 7266), struct_getparam(int3, 7265), 0, 0, struct_getparam(int3, 7268));
    script6199(int5, struct_getparam(int3, 7267), struct_getparam(int3, 7266), 0, (int0 - (2 * struct_getparam(int3, 7266))), struct_getparam(int3, 7265));
    script7924(int5, IF_GETNEXTSUBID(int5), struct_getparam(int3, 7266), struct_getparam(int3, 7265), (int0 - struct_getparam(int3, 7266)), 0, struct_getparam(int3, 7268), true, false, false, 0);
    script10629(int5, IF_GETNEXTSUBID(int5), (int0 - 3), (struct_getparam(int3, 7265) - 3), 6, 3, string0, struct_getparam(int3, 7273), struct_getparam(int3, 7275), 0, 0, 0, false);
    script10066(int5, IF_GETNEXTSUBID(int5), int0, (int1 - struct_getparam(int3, 7265)), 0, struct_getparam(int3, 7265), struct_getparam(int3, 7260), 1, struct_getparam(int3, 7262));
    script6199(int5, struct_getparam(int3, 7269), 0, struct_getparam(int3, 7265), struct_getparam(int3, 7266), ((int1 - struct_getparam(int3, 7265)) - struct_getparam(int3, 7266)));
    script7924(int5, IF_GETNEXTSUBID(int5), struct_getparam(int3, 7266), ((int1 - struct_getparam(int3, 7265)) - struct_getparam(int3, 7266)), (int0 - struct_getparam(int3, 7266)), struct_getparam(int3, 7265), struct_getparam(int3, 7269), true, false, true, 0);
    script4512(int5, struct_getparam(int3, 7271), struct_getparam(int3, 7271), 0, (int1 - struct_getparam(int3, 7271)), struct_getparam(int3, 7272));
    script6199(int5, struct_getparam(int3, 7270), struct_getparam(int3, 7271), (int1 - struct_getparam(int3, 7266)), (int0 - (2 * struct_getparam(int3, 7271))), struct_getparam(int3, 7266));
    script7924(int5, IF_GETNEXTSUBID(int5), struct_getparam(int3, 7271), struct_getparam(int3, 7271), (int0 - struct_getparam(int3, 7271)), (int1 - struct_getparam(int3, 7271)), struct_getparam(int3, 7272), true, false, false, 0);
    return;
}