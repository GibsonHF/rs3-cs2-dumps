//
function script14789(int0: dbrow): string {
    var string0 = "";
    var string1 = "";
    var int1 = DB_GETFIELDCOUNT(int0, 360688);
    var int2 = DB_GETFIELDCOUNT(int0, 360720);
    var int3 = -1 as obj;
    var int4 = -1 as dbrow;
    var int5 = 0;
    var int6 = 0;
    var int7 = -1;
    while ((++int7 < int1)) {
        [int3, int5] = dbrow_getfield(int0, 360688, int7);
        if ((int3 != -1 as obj)) {
            if ((int6 > 0)) {
                string0 = `${string0}<br>`;
            };
            string0 = `${string0}- ${OC_NAME(int3)}`;
            int6 = (int6 + 1);
        };
    };
    int6 = 0;
    int7 = -1;
    while ((++int7 < int2)) {
        [int4, int5] = dbrow_getfield(int0, 360720, int7);
        if ((int4 != -1 as dbrow)) {
            switch (DB_GETROWTABLE(int4)) {
                case 89: {
                    int3 = dbrow_getfield(int4, 364640, 0);
                    break;
                }
                default: {
                    int3 = -1 as obj;
                    break;
                }
            };
            if ((int3 != -1 as obj)) {
                if ((int6 > 0)) {
                    string1 = `${string1}<br>`;
                };
                string1 = `${string1}- ${OC_NAME(int3)}`;
                int6 = (int6 + 1);
            };
        };
    };
    int6 = 0;
    int7 = -1;
    var string2 = "";
    var int8 = db_find_with_count(352528, int0, 0);
    var int9 = -1 as dbrow;
    while ((++int7 < int8)) {
        dbrow_findnext();
        int9 = stack();
        if ((int9 != -1)) {
            if ((int6 > 0)) {
                string2 = `${string2}<br>`;
            };
            string2 = `${string2}- ${dbrow_getfield(int9, 352288, 0)}`;
            int6 = (int6 + 1);
        };
    };
    var string3 = "";
    switch (dbrow_getfield(int0, 360464, 0)) {
        case 1: {
            if ((STRING_LENGTH(string0) > 0)) {
                string3 = `${string3}Materials:<br>${string0}`;
            };
            if ((STRING_LENGTH(string1) > 0)) {
                if ((STRING_LENGTH(string3) > 0)) {
                    string3 = `${string3}<br><br>`;
                };
                string3 = `${string3}Artefacts:<br>${string1}`;
            };
            if ((STRING_LENGTH(string2) > 0)) {
                if ((STRING_LENGTH(string3) > 0)) {
                    string3 = `${string3}<br><br>`;
                };
                string3 = `${string3}Locations:<br>${string2}`;
            };
            break;
        }
        case 2: {
            if ((STRING_LENGTH(string2) > 0)) {
                string3 = `${string3}Material cache locations:<br>${string2}`;
            };
            break;
        }
    };
    return string3;
}