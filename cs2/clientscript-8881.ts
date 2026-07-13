//
function script8881(int0: number, int1: number, string0: string): [number, string] {
    var int2 = 0;
    var int3 = DB_GETFIELDCOUNT(int0, 1503296);
    while ((int2 < int3)) {
        switch (dbrow_getfield(int0, 1503296, int2)) {
            case 2: {
                if (((varbitplayer_9547 < 30) && (varplayer_2777 < 2))) {
                    var string0 = strconcat(string0, "<br>- Access to Lletya");
                    var int1 = 0;
                };
                break;
            }
            case 3: {
                if (((STAT(2 as stat) < 60) && (STAT(16 as stat) < 60))) {
                    string0 = strconcat(string0, "<br>- 60 Strength or 60 Agility");
                    int1 = 0;
                };
                break;
            }
        };
        int2 = (int2 + 1);
    };
    return [int1, string0];
}