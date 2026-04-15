//
function script2724(int0: component): void {
    var int1 = 0;
    var int2 = 0;
    var string0 = "";
    switch (int0) {
        case 6029324: {
            int1 = 1;
            int2 = 1;
            break;
        }
        case 6029325: {
            int1 = 2;
            int2 = 10;
            break;
        }
        case 6029326: {
            int1 = 3;
            int2 = 20;
            break;
        }
        case 6029327: {
            int1 = 4;
            int2 = 30;
            break;
        }
        case 6029328: {
            int1 = 5;
            int2 = 40;
            break;
        }
        case 6029329: {
            int1 = 6;
            int2 = 50;
            break;
        }
        case 6029330: {
            int1 = 7;
            int2 = 60;
            break;
        }
        case 6029331: {
            int1 = 8;
            int2 = 70;
            break;
        }
        case 6029332: {
            int1 = 9;
            int2 = 80;
            break;
        }
        case 6029333: {
            int1 = 10;
            int2 = 85;
            break;
        }
        case 6029334: {
            int1 = 11;
            int2 = 90;
            break;
        }
        case 6029335: {
            int1 = 12;
            int2 = 95;
            break;
        }
    };
    script2722(int0);
    IF_SETTEXT(enum_getvalue(0, 36, 7892 as cs2enum, int1), comp(92, 30));
    if ((STAT_BASE(25 as stat) < int2)) {
        string0 = "<col=B52912>You cannot yet use this colony.</col><br>";
    };
    string0 = strconcat(string0, enum_getvalue(0, 36, 7893 as cs2enum, int1));
    IF_SETTEXT(string0, comp(92, 31));
    IF_SETHIDE(false, comp(92, 26));
    SOUND_VORBIS_VOLUME(36961 as vorbis, 1, 0, 120);
    IF_SETHIDE(false, comp(92, 24));
    return;
}