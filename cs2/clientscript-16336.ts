//
function script16336(int0: dbrow, int1: int, string0: string): string {
    switch (int0) {
        case 5162: {
            if ((int1 > 0)) {
                if (((MAP_MEMBERS() == 0) && (enum_getvalue(0, 74, 8430 as cs2enum, int1) == -1 as dbrow))) {
                    var string0 = `<col=777777>Week ${inttostring(int1, 10)}:</col><br><col=777777>${string0}</col>`;
                } else if ((script8245() == int1)) {
                    string0 = `<col=2DBA14>Week ${inttostring(int1, 10)}:</col><br><col=2DBA14>${string0}</col>`;
                } else {
                    string0 = `Week ${inttostring(int1, 10)}:<br>${string0}`;
                };
            };
            break;
        }
        case 6243: {
            if ((script17351(int1) == 1)) {
                string0 = `<col=2DBA14>${string0}</col>`;
            };
            break;
        }
    };
    return string0;
}