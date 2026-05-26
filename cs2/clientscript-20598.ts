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
        IF_SETHIDE(false, comp(1494, 21));
        script1106();
        script1108();
        return;
    };
    IF_SETHIDE(true, comp(1494, 21));
    var int7 = 536;
    var int8 = 176;
    if ((int0 == comp(1494, 12))) {
        int7 = 738;
        int8 = 176;
    };
    script15938(int0, UI_GETCATEGORY(IF_GETNEXTSUBID(int0)), UI_GETDYNID(IF_GETNEXTSUBID(int0)), 0, 0, 0, 0, 0, 0, 1, 1);
    var int9 = dbrow_getfield(int1, 1417264, 0);
    int9 = script20600(int9, int1);
    script7918(UI_GETCATEGORY(IF_GETNEXTSUBID(int0)), UI_GETDYNID(IF_GETNEXTSUBID(int0)), 0, 0, 1, 0, 0, 0, 1, 1, int9);
    CC_SETOP(1, "Select");
    var int10 = 17036 as graphic;
    var int11 = 17035 as graphic;
    if ((script6431() == 1)) {
        int10 = -1 as graphic;
        int11 = -1 as graphic;
    };
    if ((int0 == comp(1494, 3))) {
        script7918(UI_GETCATEGORY(IF_GETNEXTSUBID(int0)), UI_GETDYNID(IF_GETNEXTSUBID(int0)), 0, 0, 1, 0, 0, 0, 1, 1, int10);
    };
    if ((int0 == comp(1494, 4))) {
        script20599(int1, 97910792, 97910794, 97910795, int7, int8);
    };
    if ((int0 == comp(1494, 12))) {
        script20599(int1, 97910797, 97910806, 97910807, int7, int8);
        if ((script6431() == 0)) {
            int4 = IF_GETNEXTSUBID(int0);
            script7918(UI_GETCATEGORY(IF_GETNEXTSUBID(int0)), UI_GETDYNID(IF_GETNEXTSUBID(int0)), 0, 0, 2, 0, 0, 0, 1, 1, 35933 as graphic);
            int5 = IF_GETNEXTSUBID(int0);
            script7918(UI_GETCATEGORY(IF_GETNEXTSUBID(int0)), UI_GETDYNID(IF_GETNEXTSUBID(int0)), 0, 0, 2, 0, 0, 0, 1, 1, 17037 as graphic);
            CC_SETHIDE(true);
            IF_SETONMOUSEOVER(callback(script20601, 1, int4, int5), int0);
            IF_SETONMOUSELEAVE(callback(script20601, 0, int4, int5), int0);
        };
        if ((dbrow_getfield(int1, 1417504, 0) == false)) {
            IF_GETNEXTSUBID(int0);
            script7918(UI_GETCATEGORY(IF_GETNEXTSUBID(int0)), UI_GETDYNID(IF_GETNEXTSUBID(int0)), 0, 0, 0, 0, 128, 128, 0, 0, int6);
        };
    };
    if ((int0 == comp(1494, 5))) {
        script7918(UI_GETCATEGORY(IF_GETNEXTSUBID(int0)), UI_GETDYNID(IF_GETNEXTSUBID(int0)), 0, 0, 1, 0, 0, 0, 1, 1, int11);
    };
    return;
}