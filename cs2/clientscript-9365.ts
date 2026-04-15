//
function script9365(): string {
    var int0 = 0;
    var int1 = 0;
    var int2 = 0;
    var string0 = "";
    if ((varclient_3856 > 0)) {
        int0 = (varclient_3856 / 1440);
        int1 = (MODULO(varclient_3856, 1440) / 60);
        int2 = MODULO(varclient_3856, 60);
        if ((int0 > 0)) {
            if ((int0 == 1)) {
                string0 = "1 day, ";
            } else {
                string0 = `${inttostring(int0, 10)} days, `;
            };
        };
        if ((int1 == 1)) {
            string0 = `${string0}1 hr, `;
        } else {
            string0 = `${string0}${inttostring(int1, 10)} hrs, `;
        };
        if ((int2 == 1)) {
            string0 = `${string0}1 min `;
        } else {
            string0 = `${string0}${inttostring(int2, 10)} mins `;
        };
    };
    return string0;
}