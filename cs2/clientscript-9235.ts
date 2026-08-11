//
function script9235(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, string0: string): void {
    if (((int1 == comp(-1, 65535)) || (int2 == -1))) {
        return;
    };
    if (((int3 == -1) || (int4 == -1))) {
        [int3, int4] = script5822(int2);
    };
    if (((int1 == comp(517, 15) /*bank:inventory_click*/) || (int1 == comp(517, 35) /*bank:bob_click*/))) {
        if ((varclient_6683 > 0)) {
            IF_SETONTIMER(callback(script9298, int0, int1, int2, int3, int4, int5, string0), int1);
            script9100();
            return;
        };
    };
    if (((int1 == comp(1313, 14)) && (varclient_8173 > 0))) {  // group_ironman_storage:inventory_click
        IF_SETONTIMER(callback(script19496, int0, int1, int2, int3, int4, int5, string0), int1);
        script19493();
        return;
    };
    script9239(int0, int1, int2, int3, int4, int5, string0);
    return;
}