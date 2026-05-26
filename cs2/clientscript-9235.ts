//
function script9235(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, string0: string): void {
    if (((int1 == -1) || (int2 == -1))) {
        return;
    };
    if (((int3 == -1) || (int4 == -1))) {
        var [int3, int4] = script5822(int2);
    };
    if ((((int1 == 33882127) || (int1 == 33882147)) && (varclient_6683 > 0))) {
        IF_SETONTIMER(callback(script9298, int0, int1, int2, int3, int4, int5, string0), int1);
        script9100();
        return;
    };
    if (((int1 == 86048782) && (varclient_8173 > 0))) {
        IF_SETONTIMER(callback(script19496, int0, int1, int2, int3, int4, int5, string0), int1);
        script19493();
        return;
    };
    script9239(int0, int1, int2, int3, int4, int5, string0);
    return;
}