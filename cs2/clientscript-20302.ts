//
function script20302(int0: achievement): quest {
    var int1 = script20301(int0);
    var int2 = -1 as quest;
    var int3 = 0;
    var int4 = 0;
    if ((int1 != -1 as quest)) {
        int4 = QUEST_QUESTREQ_COUNT(int1);
        while ((int3 < int4)) {
            int2 = QUEST_QUESTREQ(int1, int3);
            if (((int2 != -1 as quest) && (script2156(int2) == false))) {
                return int2;
            };
            int3 = (int3 + 1);
        };
        return int1;
    };
    int3 = 0;
    int4 = unk11074(int0);
    while ((int3 < int4)) {
        int1 = unk10999(int0, int3);
        if ((((int1 != -1 as quest) && (script2156(int1) == false)) && (script18524(int1) == 0))) {
            return int1;
        };
        int3 = (int3 + 1);
    };
    int3 = 0;
    int4 = unk11069(int0, 0);
    while ((int3 < int4)) {
        int1 = unk11073(int0, 0, int3);
        if ((((int1 != -1 as quest) && (script2156(int1) == false)) && (script18524(int1) == 0))) {
            return int1;
        };
        int3 = (int3 + 1);
    };
    return -1 as quest;
}