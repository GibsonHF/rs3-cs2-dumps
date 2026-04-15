//
function script19117(int0: dbrow): bas {
    var int1 = -1 as obj;
    var int2 = -1 as obj;
    var int3 = -1;
    var int4 = -1 as dbrow;
    if ((int0 != -1 as dbrow)) {
        switch (dbrow_getfield(int0, 667744, 0)) {
            case 5: {
                int1 = dbrow_getfield(int0, 667712, 0);
                break;
            }
            case 3: {
                int2 = dbrow_getfield(int0, 667712, 0);
                break;
            }
            case 20: {
                if ((DB_GETFIELDCOUNT(int0, 667856) > 0)) {
                    int3 = dbrow_getfield(int0, 667856, 0);
                    unk11023(IF_SETPLAYERHEAD_SELF(WORLDMAP_LISTELEMENT_START(667856, int3, 3, 0), WORLDMAP_LISTELEMENT_START(667744, 5, 3, 0)), 667648, 1);
                    dbrow_findnext();
                    int4 = stack();
                    if ((int4 != -1)) {
                        int1 = dbrow_getfield(int4, 667712, 0);
                    };
                    unk11023(IF_SETPLAYERHEAD_SELF(WORLDMAP_LISTELEMENT_START(667856, int3, 3, 0), WORLDMAP_LISTELEMENT_START(667744, 3, 3, 0)), 667648, 1);
                    dbrow_findnext();
                    int4 = stack();
                    if ((int4 != -1)) {
                        int2 = dbrow_getfield(int4, 667712, 0);
                    };
                };
                break;
            }
        };
    };
    return script17267(int1, int2);
}