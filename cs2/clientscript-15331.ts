//
function script15331(int0: category, int1: component, int2: component, int3: component): void {
    if ((enum_hasoutput(41, 16072 as cs2enum, int0) == 0)) {
        IF_SETTEXT("Invalid Category", int1);
        return;
    };
    script2731(int1, -1, 2);
    var int4 = ACHIEVEMENT_FINDCATEGORY(int0);
    var int5 = 0;
    var int6 = ACHIEVEMENT_FINDNEXT();
    while ((int6 != -1 as achievement)) {
        if ((ACHIEVEMENT_REQSTATE(int6) == -2)) {
            int5 = (int5 + 1);
        };
        int6 = ACHIEVEMENT_FINDNEXT();
    };
    var string0 = `${TOSTRING_LOCALISED(int5, 1)}/${TOSTRING_LOCALISED(int4, 1)}`;
    IF_SETTEXT(string0, int1);
    var int7 = -1;
    switch (int0) {
        case 4815: {
            int7 = 4;
            varclient_6834 = int5;
            varclient_6835 = int4;
            break;
        }
        case 4868: {
            int7 = 5;
            varclient_6836 = int5;
            varclient_6837 = int4;
            break;
        }
        case 4766: {
            int7 = 6;
            varclient_6842 = int5;
            varclient_6843 = int4;
            break;
        }
        case 4817: {
            int7 = 7;
            varclient_6838 = int5;
            varclient_6839 = int4;
            break;
        }
        case 4746: {
            int7 = 8;
            varclient_6840 = int5;
            varclient_6841 = int4;
            break;
        }
        case 4754: {
            int7 = 9;
            varclient_6844 = int5;
            varclient_6845 = int4;
            break;
        }
    };
    if ((int7 != -1)) {
        script13310(int2, int3, int7, (8 * 1000));
    };
    return;
}