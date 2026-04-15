//
function script20608(int0: struct, int1: unknown_int): string {
    script20464();
    if ((int0 == -1 as struct)) {
        return "";
    };
    if ((struct_getparam(int0, 4717) != -1 as cs2enum)) {
        return "";
    };
    var string0 = "";
    var int2 = -1 as dbrow;
    var int3 = -1;
    var int4 = -1 as obj;
    switch (int1) {
        case 2: {
            int2 = script15769(int0);
            if (((dbrow_getfield(int2, 667744, 0) == 20) && (DB_GETFIELDCOUNT(int2, 667856) > 0))) {
                int3 = CC_SETPARAM_STRING(IF_SETPLAYERHEAD_SELF(IF_SETPLAYERHEAD_SELF(unk11014(WORLDMAP_LISTELEMENT_START(667872, dbrow_getfield(int2, 667856, 0), 3, 0), WORLDMAP_LISTELEMENT_START(667856, dbrow_getfield(int2, 667856, 0), 3, 0)), IF_SETPLAYERHEAD_SELF(WORLDMAP_LISTELEMENT_START(667744, 20, 3, 0))), WORLDMAP_LISTELEMENT_START(667984, 0, 3, 0)), 667744, 1, -1, 0);
                dbrow_findnext();
                int2 = stack();
                if ((int3 > 1)) {
                    string0 = "This outfit contains:";
                };
                while ((int2 != -1 as dbrow)) {
                    int4 = dbrow_getfield(int2, 667712, 0);
                    if ((int4 != -1 as obj)) {
                        string0 = `${string0}<br>- ${OC_NAME(int4)}`;
                    };
                    dbrow_findnext();
                    int2 = stack();
                };
            };
            if ((struct_getparam(int0, 1331) == true)) {
                string0 = `${string0}<br><br>This ${script4583(int3, "override", "outfit")} can be recoloured.`;
            };
            break;
        }
        case 5: {
            string0 = enum_getvalue(0, 36, 10638 as cs2enum, struct_getparam(int0, 2532));
            if ((struct_getparam(int0, 1331) == true)) {
                string0 = `${string0}<br><br>This pet can be recoloured.`;
            };
            break;
        }
        case 4: {
            if ((((struct_getparam(int0, 2532) == 7) && (struct_getparam(int0, 5166) != -1 as cs2enum)) && (ENUM_GETOUTPUTCOUNT(struct_getparam(int0, 5166)) > 1))) {
                string0 = "One of these variants will be selected at random each time you use the ability.";
            };
            break;
        }
        default: {
            return "";
        }
    };
    return string0;
}