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
            IF_SETSIZE(742, 404, 0, 0, comp(1802, 0));
            break;
        }
    };
    var int1 = struct_getparam(int0, 4607);
    if ((struct_getparam(int0, 7898) > 0)) {
        IF_SETHIDE(false, comp(1802, 67));
        IF_SETHIDE(script12585(int1), comp(1802, 91));
        IF_SETHIDE(true, comp(1802, 70));
        IF_SETHIDE(true, comp(1802, 92));
        IF_SETHIDE(true, comp(1802, 101));
    } else {
        IF_SETHIDE(true, comp(1802, 67));
        IF_SETHIDE(false, comp(1802, 70));
        IF_SETHIDE(script12585(int1), comp(1802, 91));
        IF_SETHIDE(true, comp(1802, 92));
        IF_SETHIDE(false, comp(1802, 101));
    };
    return;
}