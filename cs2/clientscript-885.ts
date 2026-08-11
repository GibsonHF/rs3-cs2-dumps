//
function script885(): void {
    var int0 = script13032();
    switch (int0) {
        case 9802: {
            script10542();
            break;
        }
        case 40974: {
            script879();
            break;
        }
        case 7135: {
            script4605();
            break;
        }
        case 47508: {
            IF_SETSIZE(742, 404, 0, 0, comp(1802, 0));  // timed_event:universe
            break;
        }
    };
    var int1 = struct_getparam(int0, 4607);
    if ((struct_getparam(int0, 7898) > 0)) {
        IF_SETHIDE(false, comp(1802, 67));  // timed_event:compact_countdown
        IF_SETHIDE(script12585(int1), comp(1802, 91));  // timed_event:teleport_button
        IF_SETHIDE(true, comp(1802, 70));  // timed_event:full_countdown
        IF_SETHIDE(true, comp(1802, 92));  // timed_event:classic_teleport_button_layer
        IF_SETHIDE(true, comp(1802, 101));  // timed_event:event_ended_layer
    } else {
        IF_SETHIDE(true, comp(1802, 67));  // timed_event:compact_countdown
        IF_SETHIDE(false, comp(1802, 70));  // timed_event:full_countdown
        IF_SETHIDE(script12585(int1), comp(1802, 91));  // timed_event:teleport_button
        IF_SETHIDE(true, comp(1802, 92));  // timed_event:classic_teleport_button_layer
        IF_SETHIDE(false, comp(1802, 101));  // timed_event:event_ended_layer
    };
    return;
}