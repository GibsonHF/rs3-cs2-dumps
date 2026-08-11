//
function script12889(int0: number): [string, string, string, string, string] {
    var int1 = (varclient_5880 / 1440);
    var int2 = (MODULO(varclient_5880, 1440) / 60);
    var int3 = MODULO(varclient_5880, 60);
    var int4 = (59 - varclient_5881);
    var string0 = inttostring(int1, 10);
    var string1 = inttostring(int2, 10);
    var string2 = inttostring(int3, 10);
    var string3 = inttostring(int4, 10);
    var string4 = `${string0}D ${string1}H ${string2}M`;
    var string5 = "<col=CDE1FF>";
    if ((varclient_5880 < 60)) {
        string5 = "<col=DD0000>";
    } else if ((varclient_5880 < 1440)) {
        string5 = "<col=DD4400>";
    };
    if (((varclient_5880 + 1) > 0)) {
        if ((STRING_LENGTH(string0) == 1)) {
            string0 = strconcat("0", string0);
        };
        if ((STRING_LENGTH(string1) == 1)) {
            string1 = strconcat("0", string1);
        };
        if ((STRING_LENGTH(string2) == 1)) {
            string2 = strconcat("0", string2);
        };
        if ((STRING_LENGTH(string3) == 1)) {
            string3 = strconcat("0", string3);
        };
    };
    var int5 = comp(1802, 64);  // timed_event:left_container
    var int6 = comp(1802, 66);  // timed_event:countdown_layer
    var int7 = comp(1802, 101);  // timed_event:event_ended_layer
    var int8 = comp(1802, 0);  // timed_event:universe
    var int9 = comp(1802, 74);  // timed_event:days_text
    var int10 = comp(1802, 77);  // timed_event:hours_text
    var int11 = comp(1802, 80);  // timed_event:minutes_text
    var int12 = comp(1802, 83);  // timed_event:seconds_text
    var int13 = script10524(int0);
    if (((int0 == 9802) || (int0 == 40974))) {
        int5 = comp(1930, 98);  // timed_event_tasks:left_container
        int6 = comp(1930, 37);  // timed_event_tasks:countdown_layer
        int7 = comp(1930, 92);  // timed_event_tasks:event_ended_layer
        int8 = comp(1930, 59);  // timed_event_tasks:main_layer
        int9 = comp(1930, 100);  // timed_event_tasks:days_text
        int10 = comp(1930, 102);  // timed_event_tasks:hours_text
        int11 = comp(1930, 104);  // timed_event_tasks:minutes_text
        int12 = comp(1930, 106);  // timed_event_tasks:seconds_text
    };
    if (((((int1 == 0) && (int2 == 0)) && (int3 == 0)) && (int4 == 0))) {
        IF_SETHIDE(true, int5);
        IF_SETHIDE(true, int6);
        if ((struct_getparam(int0, 7898) == 0)) {
            IF_SETHIDE(false, int7);
        };
        IF_SETONTIMER(callback(), int8);
        IF_SETHIDE(true, comp(1802, 67));  // timed_event:compact_countdown
    };
    IF_SETTEXT(`${string5}${string0}`, int9);
    IF_SETTEXT(`${string5}${string1}`, int10);
    IF_SETTEXT(`${string5}${string2}`, int11);
    IF_SETTEXT(`${string5}${string3}`, int12);
    IF_SETTEXT(string4, int13);
    return [string5, string0, string1, string2, string3];
}