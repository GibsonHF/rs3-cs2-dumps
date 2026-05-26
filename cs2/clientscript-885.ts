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
            IF_SETSIZE(742, 404, 0, 0, 118095872);
            break;
        }
    };
    var int1 = struct_getparam(int0, 4607);
    if ((struct_getparam(int0, 7898) > 0)) {
        IF_SETHIDE(0, 118095939);
        IF_SETHIDE(script12585(int1), 118095963);
        IF_SETHIDE(1, 118095942);
        IF_SETHIDE(1, 118095964);
        IF_SETHIDE(1, 118095973);
    } else {
        IF_SETHIDE(1, 118095939);
        IF_SETHIDE(0, 118095942);
        IF_SETHIDE(script12585(int1), 118095963);
        IF_SETHIDE(1, 118095964);
        IF_SETHIDE(0, 118095973);
    };
    return;
}