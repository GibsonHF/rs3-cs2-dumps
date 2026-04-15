//
function script20156(int0: dbrow, int1: boolean, string0: string): [boolean, string] {
    var int2 = 0;
    var int3 = DB_GETFIELDCOUNT(int0, 1388608);
    while ((int2 < int3)) {
        switch (dbrow_getfield(int0, 1388608, int2)) {
            case 2: {
                if (((varbitplayer_9547 < 30) && (varplayer_2777 < 2))) {
                    var string0 = strconcat(string0, "<br>- Access to Lletya");
                    var int1 = false;
                };
                break;
            }
            case 3: {
                if (((STAT(2 as stat) < 60) && (STAT(16 as stat) < 60))) {
                    string0 = strconcat(string0, "<br>- 60 Strength or 60 Agility");
                    int1 = false;
                };
                break;
            }
        };
        int2 = (int2 + 1);
    };
    return [int1, string0];
}