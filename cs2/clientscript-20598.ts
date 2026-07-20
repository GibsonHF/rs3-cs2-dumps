//
function script20598(int0: number, int1: number): void {
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    var int6 = 35897 as graphic;
    switch (MAP_LANG()) {
        case 1: {
            int6 = 35899 as graphic;
            break;
        }
        case 2: {
            int6 = 35898 as graphic;
            break;
        }
        case 3: {
            int6 = 35900 as graphic;
            break;
        }
    };
    CC_DELETEALL(int0);
    if ((script20612() == 0)) {
        IF_SETHIDE(false, comp(1494, 31));
        script1106();
        script1108();
        return;
    };
    IF_SETHIDE(true, comp(1494, 31));
    var int7 = 738;
    var int8 = 237;
    var int9 = int7;
    var int10 = int8;
    if ((int0 == comp(1494, 5))) {
        int7 = 650;
    };
    script15938(int0, UI_GETCATEGORY(IF_GETNEXTSUBID(int0)), UI_GETDYNID(IF_GETNEXTSUBID(int0)), 0, 0, 0, 0, int7, int8, 0, 0);
    var int11 = dbrow_getfield(int1, 1417264, 0);
    int11 = script20600(int11, int1);
    script7918(UI_GETCATEGORY(IF_GETNEXTSUBID(int0)), UI_GETDYNID(IF_GETNEXTSUBID(int0)), 0, 0, 1, 0, int9, int10, 0, 0, int11);
    CC_SETOP(1, "Select");
    if ((script6431() == 0)) {
        if ((int0 == comp(1494, 22))) {
            int4 = IF_GETNEXTSUBID(int0);
            script7918(UI_GETCATEGORY(IF_GETNEXTSUBID(int0)), UI_GETDYNID(IF_GETNEXTSUBID(int0)), 0, 0, 2, 0, 0, 0, 1, 1, 35933 as graphic);
            int5 = IF_GETNEXTSUBID(int0);
            script7918(UI_GETCATEGORY(IF_GETNEXTSUBID(int0)), UI_GETDYNID(IF_GETNEXTSUBID(int0)), 0, 0, 2, 0, 0, 0, 1, 1, 17037 as graphic);
            CC_SETHIDE(true);
            IF_SETONMOUSEOVER(callback(script20601, int0, 1, int4, int5), int0);
            IF_SETONMOUSELEAVE(callback(script20601, int0, 0, int4, int5), int0);
        } else if ((int0 == comp(1494, 5))) {
            IF_SETHIDE(false, comp(1494, 18));
        };
    };
    if ((dbrow_getfield(int1, 1417504, 0) == false)) {
        IF_GETNEXTSUBID(int0);
        script7918(UI_GETCATEGORY(IF_GETNEXTSUBID(int0)), UI_GETDYNID(IF_GETNEXTSUBID(int0)), 0, 0, 0, 0, 128, 128, 0, 0, int6);
    };
    if ((int0 == comp(1494, 5))) {
        script20599(int1, 97910796, 97910804, 97910805);
    };
    if ((int0 == comp(1494, 22))) {
        script20599(int1, 97910807, 97910816, 97910817);
    };
    return;
}