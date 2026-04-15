//
function script20598(int0: component, int1: dbrow): void {
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    CC_DELETEALL(int0);
    if ((script20612() == 0)) {
        IF_SETHIDE(false, comp(1494, 21));
        script1106();
        script1108();
        return;
    };
    IF_SETHIDE(true, comp(1494, 21));
    var int5 = 536;
    var int6 = 176;
    if ((int0 == comp(1494, 12))) {
        int5 = 738;
        int6 = 176;
    };
    script15938(int0, UI_GETCATEGORY(IF_GETNEXTSUBID(int0)), UI_GETDYNID(IF_GETNEXTSUBID(int0)), 0, 0, 0, 0, 0, 0, 1, 1);
    var int7 = dbrow_getfield(int1, 1417264, 0);
    int7 = script20600(int7, int1);
    script7918(UI_GETCATEGORY(IF_GETNEXTSUBID(int0)), UI_GETDYNID(IF_GETNEXTSUBID(int0)), 0, 0, 1, 0, 0, 0, 1, 1, int7);
    CC_SETOP(1, "Select");
    var int8 = 17036 as graphic;
    var int9 = 17035 as graphic;
    if ((script6431() == true)) {
        int8 = -1 as graphic;
        int9 = -1 as graphic;
    };
    if ((int0 == comp(1494, 3))) {
        script7918(UI_GETCATEGORY(IF_GETNEXTSUBID(int0)), UI_GETDYNID(IF_GETNEXTSUBID(int0)), 0, 0, 1, 0, 0, 0, 1, 1, int8);
    };
    if ((int0 == comp(1494, 4))) {
        script20599(int1, comp(1494, 8), 97910794, comp(1494, 11), int5, int6);
    };
    if ((int0 == comp(1494, 12))) {
        script20599(int1, comp(1494, 13), 97910806, comp(1494, 23), int5, int6);
        int2 = IF_GETNEXTSUBID(int0);
        script7918(UI_GETCATEGORY(IF_GETNEXTSUBID(int0)), UI_GETDYNID(IF_GETNEXTSUBID(int0)), 0, 0, 0, 0, 150, 0, 0, 1, int8);
        int3 = IF_GETNEXTSUBID(int0);
        script7918(UI_GETCATEGORY(IF_GETNEXTSUBID(int0)), UI_GETDYNID(IF_GETNEXTSUBID(int0)), 0, 0, 2, 0, 150, 0, 0, 1, int9);
        int4 = IF_GETNEXTSUBID(int0);
        script7918(UI_GETCATEGORY(IF_GETNEXTSUBID(int0)), UI_GETDYNID(IF_GETNEXTSUBID(int0)), 0, 0, 2, 0, 0, 0, 1, 1, 17037 as graphic);
        CC_SETHIDE(true);
        IF_SETONMOUSEOVER(callback(script20601, 1, int2, int3, int4), int0);
        IF_SETONMOUSELEAVE(callback(script20601, 0, int2, int3, int4), int0);
    };
    if ((int0 == comp(1494, 5))) {
        script7918(UI_GETCATEGORY(IF_GETNEXTSUBID(int0)), UI_GETDYNID(IF_GETNEXTSUBID(int0)), 0, 0, 1, 0, 0, 0, 1, 1, int9);
    };
    return;
}