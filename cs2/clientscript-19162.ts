//
function script19162(int0: component): void {
    var int1 = script19145(50263 as struct);
    if ((script18365() == 1)) {
        IF_SETNPCMODEL(31492 as npc, int0);
    } else if ((int1 < 30)) {
        IF_SETNPCMODEL(31245 as npc, int0);
    } else {
        IF_SETNPCMODEL(31246 as npc, int0);
    };
    var int2 = 12;
    IF_NPC_SETCUSTOMBODYMODEL(int2, -1 as model, 84410437);
    var int3 = script19150(50263 as struct);
    var int4 = -1 as stat;
    var int5 = -1 as model;
    if ((DB_GETFIELDCOUNT(int3, 1204240) > 0)) {
        int4 = dbrow_getfield(int3, 1204240, 0);
        switch (int4) {
            case 14: {
                if ((int1 < 10)) {
                    int5 = 73865 as model;
                } else if ((int1 < 20)) {
                    int5 = 73862 as model;
                } else if ((int1 < 30)) {
                    int5 = 79837 as model;
                } else if ((int1 < 40)) {
                    int5 = 73863 as model;
                } else if ((int1 < 50)) {
                    int5 = 79824 as model;
                } else if ((int1 < 60)) {
                    int5 = 79833 as model;
                } else if ((int1 < 70)) {
                    int5 = 73867 as model;
                } else if ((int1 < 80)) {
                    int5 = 98978 as model;
                } else if ((int1 < 90)) {
                    int5 = 73348 as model;
                } else {
                    int5 = 73264 as model;
                };
                IF_NPC_SETCUSTOMBODYMODEL(int2, int5, 84410437);
                break;
            }
        };
    };
    return;
}