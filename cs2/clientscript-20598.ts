//
function script20598(int0: component, int1: dbrow): void {
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    CC_DELETEALL(int0);
    if ((script20612() == 0)) {
        IF_SETHIDE(false, comp(1494, 21));
        script1106();
        script1108();
        return;
    };
    IF_SETHIDE(true, comp(1494, 21));
    var int6 = 536;
    var int7 = 176;
    if ((int0 == comp(1494, 12))) {
        int6 = 738;
        int7 = 176;
    };
    script15938(int0, UI_GETCATEGORY(IF_GETNEXTSUBID(int0)), UI_GETDYNID(IF_GETNEXTSUBID(int0)), 0, 0, 0, 0, 0, 0, 1, 1);
    var int8 = dbrow_getfield(int1, 1417264, 0);
    int8 = script20600(int8, int1);
    script7918(UI_GETCATEGORY(IF_GETNEXTSUBID(int0)), UI_GETDYNID(IF_GETNEXTSUBID(int0)), 0, 0, 1, 0, 0, 0, 1, 1, int8);
    CC_SETOP(1, "Select");
    var int9 = 17036 as graphic;
    var int10 = 17035 as graphic;
    if ((script6431() == true)) {
        int9 = -1 as graphic;
        int10 = -1 as graphic;
    };
    if ((int0 == comp(1494, 3))) {
        script7918(UI_GETCATEGORY(IF_GETNEXTSUBID(int0)), UI_GETDYNID(IF_GETNEXTSUBID(int0)), 0, 0, 1, 0, 0, 0, 1, 1, int9);
    };
    if ((int0 == comp(1494, 4))) {
        script20599(int1, comp(1494, 8), 97910794, comp(1494, 11), int6, int7);
    };
    if ((int0 == comp(1494, 12))) {
        script20599(int1, comp(1494, 13), 97910806, comp(1494, 23), int6, int7);
        int4 = IF_GETNEXTSUBID(int0);
        script7918(UI_GETCATEGORY(IF_GETNEXTSUBID(int0)), UI_GETDYNID(IF_GETNEXTSUBID(int0)), 0, 0, 2, 0, 0, 0, 1, 1, 35933 as graphic);
        int5 = IF_GETNEXTSUBID(int0);
        script7918(UI_GETCATEGORY(IF_GETNEXTSUBID(int0)), UI_GETDYNID(IF_GETNEXTSUBID(int0)), 0, 0, 2, 0, 0, 0, 1, 1, 17037 as graphic);
        CC_SETHIDE(true);
        IF_SETONMOUSEOVER(callback(script20601, 1, int4, int5), int0);
        IF_SETONMOUSELEAVE(callback(script20601, 0, int4, int5), int0);
    };
    if ((int0 == comp(1494, 5))) {
        script7918(UI_GETCATEGORY(IF_GETNEXTSUBID(int0)), UI_GETDYNID(IF_GETNEXTSUBID(int0)), 0, 0, 1, 0, 0, 0, 1, 1, int10);
    };
    return;
}