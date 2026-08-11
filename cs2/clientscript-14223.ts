//
function script14223(int0: number, int1: number, int2: number, int3: number): void {
    script14225();
    var int4 = 0;
    var int5 = 0;
    var int6 = enum_getvalue(0, 73, 14118 as cs2enum, varplayer_7989);
    if ((varclient_6403 == 4)) {
        int6 = 40069 as struct;
    };
    var int7 = 0;
    var string0 = "";
    var int8 = 0;
    var string1 = "0";
    var int9 = 0;
    [int7, string0] = IF_SETONSTORETRANSMIT(int2);
    [int4, int5] = script14226(int2, int6, int7, string0);
    var int10 = (int4 + 31);
    var int11 = (int5 + (2 * 31));
    var int3 = MAX(0, (int3 - IF_GETSCROLLY(comp(1322, 10))));  // minimenu:menu_build_layer ?
    if (((int3 + int5) > IF_GETHEIGHT(comp(1322, 5)))) {  // minimenu:universe_layer ?
        int3 = (IF_GETHEIGHT(comp(1322, 5)) - int5);  // minimenu:universe_layer ?
    };
    var int12 = (int3 - 31);
    if ((int3 < int12)) {
        int11 = (int11 - (int12 - int3));
        int12 = 0;
    };
    IF_SETHIDE(false, comp(1322, 3));  // minimenu:submenu_blocking_layer ?
    IF_SETSIZE(int10, int11, 0, 0, comp(1322, 3));  // minimenu:submenu_blocking_layer ?
    IF_SETSIZE(int4, int5, 0, 0, comp(1322, 12));  // minimenu:submenu_layer ?
    IF_SETPOSITION(IF_GETWIDTH(comp(1322, 11) /*minimenu:menu_layer ?*/), int3, 0, 0, comp(1322, 12) /*minimenu:submenu_layer ?*/);
    IF_SETPOSITION((IF_GETWIDTH(comp(1322, 11) /*minimenu:menu_layer ?*/) + IF_GETX(comp(1322, 5) /*minimenu:universe_layer ?*/)), (int12 + IF_GETY(comp(1322, 5) /*minimenu:universe_layer ?*/)), 0, 0, comp(1322, 3) /*minimenu:submenu_blocking_layer ?*/);
    script13636(int4, int5, int5, int6, 86638609, 86638605, string0);
    var int13 = 0;
    while ((int13 < int7)) {
        [int8, string1, int9] = NOTIFICATIONS_SENDGROUPEDLOCAL(int2, int13);
        script13637(string1, 1, int2, int13, int13, int4, int6, 86638609);
        int13 = (int13 + 1);
    };
    return;
}