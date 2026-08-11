//
function script12873(int0: number, int1: number, int2: number, int3: number, int4: number): void {
    if ((int0 == -1)) {
        return;
    };
    varclient_5879 = int2;
    varclient_5880 = (DATE_MINUTES_FROMRUNEDAY((struct_getparam(int0, 6133) + 1)) - (int3 + 1));
    varclient_5881 = int4;
    if ((varclient_5879 < struct_getparam(int0, 6132))) {
        return;
    };
    var int5 = comp(1802, 64);  // timed_event:left_container
    var int6 = comp(1802, 66);  // timed_event:countdown_layer
    var int7 = comp(1802, 101);  // timed_event:event_ended_layer
    var int8 = comp(1802, 157);  // timed_event:title_text
    var int9 = comp(1802, 7);  // timed_event:title_graphic
    var int10 = comp(1802, 0);  // timed_event:universe
    if (((int0 == 9802) || (int0 == 40974))) {
        int5 = comp(1930, 98);  // timed_event_tasks:left_container
        int6 = comp(1930, 37);  // timed_event_tasks:countdown_layer
        int7 = comp(1930, 92);  // timed_event_tasks:event_ended_layer
        int8 = comp(1930, 90);  // timed_event_tasks:title_text
        int10 = comp(1930, 59);  // timed_event_tasks:main_layer
    };
    if ((int1 == 2)) {
        IF_SETHIDE(true, int5);
        IF_SETHIDE(true, int6);
        if ((struct_getparam(int0, 7898) == 0)) {
            IF_SETHIDE(false, int7);
        };
    } else {
        IF_SETHIDE(false, int6);
        IF_SETHIDE(true, int7);
        IF_SETHIDE(false, int8);
        IF_SETHIDE(false, int9);
        script12889(int0);
        IF_SETONTIMER(callback(script12888, int0), int10);
    };
    script12876(int0);
    script12881(int0);
    script12885(int0);
    return;
}