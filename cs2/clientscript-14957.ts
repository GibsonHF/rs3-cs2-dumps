//
function script14957(int0: obj): string {
    var string0 = "";
    string0 = `${TOSTRING_LOCALISED(INV_TOTAL(885 as inv, int0), 1)} x ${OC_NAME(int0)}`;
    var int1 = item_getparam(int0, 6659);
    if ((int1 != -1 as dbrow)) {
        if ((STAT_BASE(27 as stat) < dbrow_getfield(int1, 360512, 0))) {
            string0 = `${string0}<br><br><col=FF0000>Requires: ${TOSTRING_LOCALISED(dbrow_getfield(int1, 360512, 0), 1)} Archaeology</col>`;
        } else {
            string0 = `${string0}<br><br>Requires: ${TOSTRING_LOCALISED(dbrow_getfield(int1, 360512, 0), 1)} Archaeology`;
        };
        if ((dbrow_getfield(int1, 360464, 0) == 2)) {
            string0 = `${string0}<br><br>${script14789(int1)}`;
        };
    };
    return string0;
}