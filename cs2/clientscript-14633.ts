//
function script14633(int0: dbrow, int1: int, int2: int): string {
    var int3 = script14634(int0, int1, int2);
    var string0 = `<img=7> ${TOSTRING_LOCALISED((int3 / 10), 1)} Archaeology XP`;
    var int4 = -1 as obj;
    var int5 = -1 as dbrow;
    var int6 = 0;
    var int7 = 0;
    var int8 = -1;
    var int9 = DB_GETFIELDCOUNT(int0, 368864);
    while ((++int8 < int9)) {
        string0 = `${string0}<br><img=7> ${dbrow_getfield(int0, 368864, int8)}`;
    };
    int8 = -1;
    var int10 = DB_GETFIELDCOUNT(int0, 368880);
    while ((++int8 < int10)) {
        [int4, int7] = dbrow_getfield(int0, 368880, int8);
        switch (int4) {
            default: {
            }
        };
        string0 = `${string0}<br><img=7> ${inttostring(int7, 10)} x ${OC_NAME(int4)}`;
    };
    int8 = -1;
    var int11 = DB_GETFIELDCOUNT(int0, 368896);
    var int12 = -1 as obj;
    while ((++int8 < int11)) {
        [int5, int7] = dbrow_getfield(int0, 368896, int8);
        switch (DB_GETROWTABLE(int5)) {
            case 86: {
                if ((int7 == 1)) {
                    string0 = `${string0}<br><img=7> Damaged artefact (${script14592(int5)})`;
                } else if ((int7 > 1)) {
                    string0 = `${string0}<br><img=7> ${inttostring(int7, 10)} x damaged artefacts (${script14592(int5)})`;
                };
                break;
            }
            case 88: {
                if ((int7 == 1)) {
                    string0 = `${string0}<br><img=7> Damaged artefact (${script14578(int5)})`;
                } else if ((int7 > 1)) {
                    string0 = `${string0}<br><img=7> ${inttostring(int7, 10)} x damaged artefacts (${script14578(int5)})`;
                };
                break;
            }
            case 89: {
                int12 = dbrow_getfield(int5, 364624, 0);
                string0 = `${string0}<br><img=7> ${inttostring(int7, 10)} x ${OC_NAME(int12)}`;
                break;
            }
            case 90: {
                string0 = `${string0}<br><img=7> New Research`;
                break;
            }
        };
    };
    int8 = -1;
    var int13 = DB_GETFIELDCOUNT(int0, 368912);
    while ((++int8 < int13)) {
        int6 = dbrow_getfield(int0, 368912, int8);
        switch (int6) {
            case 1: {
                string0 = `${string0}<br><img=7> Archaeological materials`;
                break;
            }
            case 2: {
                string0 = `${string0}<br><img=7> Damaged artefacts (rare)`;
                break;
            }
            case 3: {
                string0 = `${string0}<br><img=7> Ability to harness more energy from the monolith`;
                break;
            }
        };
    };
    return string0;
}