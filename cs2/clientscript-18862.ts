//
function script18862(int0: number, int1: number, int2: number, int3: number, int4: number): number {
    var int5 = 0;
    var int6 = ((int1 - int2) + int3);
    if (((int4 > 0) && (int6 == (int4 + 1)))) {
        int5 = 1;
    } else if (((int4 > 0) && (int6 > (int4 + 1)))) {
        int5 = 2;
    } else if (((int4 > 0) && (int6 < (int4 + 1)))) {
        script12478(`extra_rows for category ${inttostring(int0, 10)} was set wrongly in calendar_extra_row_vars_set, as there are more rows than entries.`);
        return -1;
    };
    return int5;
}