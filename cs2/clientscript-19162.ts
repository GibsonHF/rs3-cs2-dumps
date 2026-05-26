//
function script19162(int0: number): void {
    var int1 = script19145(50263);
    if ((script18365() == 1)) {
        IF_SETNPCMODEL(31492, int0);
    } else if ((int1 < 30)) {
        IF_SETNPCMODEL(31245, int0);
    } else {
        IF_SETNPCMODEL(31246, int0);
    };
    var int2 = 12;
    IF_NPC_SETCUSTOMBODYMODEL(int2, -1, 84410437);
    var int3 = script19150(50263);
    var int4 = -1 as stat;
    var int5 = -1;
    if ((DB_GETFIELDCOUNT(int3, 1204240) > 0)) {
        int4 = dbrow_getfield(int3, 1204240, 0);
        switch (int4) {
            case 14: {
                if ((int1 < 10)) {
                    int5 = 73865;
                } else if ((int1 < 20)) {
                    int5 = 73862;
                } else if ((int1 < 30)) {
                    int5 = 79837;
                } else if ((int1 < 40)) {
                    int5 = 73863;
                } else if ((int1 < 50)) {
                    int5 = 79824;
                } else if ((int1 < 60)) {
                    int5 = 79833;
                } else if ((int1 < 70)) {
                    int5 = 73867;
                } else if ((int1 < 80)) {
                    int5 = 98978;
                } else if ((int1 < 90)) {
                    int5 = 73348;
                } else {
                    int5 = 73264;
                };
                IF_NPC_SETCUSTOMBODYMODEL(int2, int5, 84410437);
                break;
            }
        };
    };
    return;
}