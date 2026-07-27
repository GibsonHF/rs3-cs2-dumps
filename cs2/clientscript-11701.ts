//
function script11701(int0: number, int1: number, int2: number, int3: number, int4: number, string0: string): void {
    var int5 = -1;
    switch (varbitplayer_19000) {
        case 1: {
            int5 = 6881502;
            break;
        }
        case 4: {
            int5 = 46333958;
            break;
        }
    };
    var int6 = 0;
    var int7 = 0;
    var int8 = 0;
    var int9 = 0;
    var int10 = -1;
    var int11 = -1 as dbrow;
    if ((STRING_LENGTH(string0) >= 2)) {
        stack(1556480);
        stack(string0);
        stack(WORLDMAP_LISTELEMENT_START(stack(), 3, 2));
        stack(1556496);
        stack(string0);
        int10 = unk11018(stack(), WORLDMAP_LISTELEMENT_START(stack(), 3, 2));
        unk11023(int10, 1556480, 1);
        dbrow_findnext();
        int11 = stack();
        if ((int11 != -1)) {
            while ((int11 != -1 as dbrow)) {
                [int6, int7, int8] = script20905(dbrow_getfield(int11, 1556512, 0), int0, int1, int2, int5, int3, int4, 1, int7, int6, int8);
                dbrow_findnext();
                int11 = stack();
                int9 = 1;
            };
        };
        if (((STRING_LENGTH(string0) >= 4) && (strcmp(string0, "soil") == 0))) {
            [int6, int7, int8] = script20906("Archaeology soils", 6962, int0, int1, int2, int5, int3, int4, 1, int7, int6, int8);
            int9 = 1;
        };
        if (((STRING_LENGTH(string0) >= 8) && (strcmp(SUBSTRING(string0, 0, 8), "obsidian") == 0))) {
            [int6, int7, int8] = script20906("Obsidian and Tzhaar equipment", 6958, int0, int1, int2, int5, int3, int4, 1, int7, int6, int8);
            int9 = 1;
        };
        if (((STRING_LENGTH(string0) >= 9) && (strcmp(string0, "fortunate") == 0))) {
            [int6, int7, int8] = script20906("Fortunate component sources", 6963, int0, int1, int2, int5, int3, int4, 1, int7, int6, int8);
            int9 = 1;
        };
    };
    [int6, int7, int8] = script20905(string0, int0, int1, int2, int5, int3, int4, int9, int7, int6, int8);
    if ((int7 < 1)) {
        script20904(int1, int5, int7, int8);
        return;
    };
    if ((int3 == 1)) {
        script11702(int6, varclient_6790);
    } else {
        script11702(int6, int4);
    };
    return;
}