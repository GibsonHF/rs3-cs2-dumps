//
function script10361(int0: int): void {
    var int1 = enum_getvalue(0, 0, 887 as cs2enum, int0);
    var int2 = enum_getvalue(0, 73, 888 as cs2enum, int1);
    if ((((int2 == -1 as struct) || (int0 == -1)) || (int1 == -1))) {
        return;
    };
    if ((struct_getparam(int2, 4503) != -1)) {
        varplayer_4697 = struct_getparam(int2, 4503);
    } else {
        varplayer_4697 = 3;
    };
    varplayer_4698 = MAX(varplayer_4697, MIN(script1432(), 152));
    var string0 = struct_getparam(int2, 3631);
    if (((strcmp(string0, "") == 0) || (PARAHEIGHT(string0, IF_GETWIDTH(comp(1524, 83)), IF_GETFONTMETRICS(comp(1524, 83))) > 2))) {
        string0 = struct_getparam(int2, 1273);
    };
    IF_SETTEXT(struct_getparam(int2, 1266), comp(1524, 82));
    IF_SETTEXT(string0, comp(1524, 83));
    IF_SETTEXT(`${inttostring(struct_getparam(int2, 4500), 10)} - ${inttostring(struct_getparam(int2, 4501), 10)} Players`, comp(1524, 79));
    IF_SETTEXT(`${inttostring(struct_getparam(int2, 4502), 10)} Players`, comp(1524, 81));
    var int3 = script10390(int2, int1);
    var int4 = script10364(int2);
    var int5 = script10366(int2);
    script10368();
    var int6 = MIN(69, int3);
    var int7 = MIN(69, int4);
    var int8 = MIN(69, int5);
    var int9 = (((207 - int6) - int7) - int8);
    if (((int9 == 0) || (((int6 < 69) && (int7 < 69)) && (int8 < 69)))) {
        IF_SETSIZE(10, 90, 1, 0, comp(1524, 84));
        IF_SETSIZE(10, 90, 1, 0, comp(1524, 89));
        IF_SETPOSITION(5, 195, 0, 0, comp(1524, 89));
        IF_SETSIZE(10, 90, 1, 0, comp(1524, 94));
        IF_SETPOSITION(5, 290, 0, 0, comp(1524, 94));
        script11729(int3, comp(1524, 87), comp(1524, 88));
        script11729(int4, comp(1524, 92), comp(1524, 93));
        script11729(int5, comp(1524, 97), comp(1524, 104));
        return;
    };
    var int10 = 0;
    if ((int3 > int6)) {
        int10 = (int10 + 1);
    };
    if ((int4 > int7)) {
        int10 = (int10 + 1);
    };
    if ((int5 > int8)) {
        int10 = (int10 + 1);
    };
    int10 = (int9 / MAX(1, int10));
    if ((int3 > int6)) {
        int6 = (int6 + int10);
    };
    if ((int4 > int7)) {
        int7 = (int7 + int10);
    };
    if ((int5 > int8)) {
        int8 = (int8 + int10);
    };
    int6 = (int6 + 24);
    int7 = (int7 + 24);
    int8 = (int8 + 24);
    IF_SETSIZE(10, int6, 1, 0, comp(1524, 84));
    IF_SETSIZE(10, int7, 1, 0, comp(1524, 89));
    IF_SETPOSITION(5, ((100 + int6) + 5), 0, 0, comp(1524, 89));
    IF_SETSIZE(10, int8, 1, 0, comp(1524, 94));
    IF_SETPOSITION(5, (((100 + int6) + int7) + 10), 0, 0, comp(1524, 94));
    script11729(int3, comp(1524, 87), comp(1524, 88));
    script11729(int4, comp(1524, 92), comp(1524, 93));
    script11729(int5, comp(1524, 97), comp(1524, 104));
    return;
}