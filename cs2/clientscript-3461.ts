//[clientscript,love_cutscenes]
function script3461(int0: component, int1: component, int2: component, int3: unknown_int, int4: component): void {
    if ((varclient_1007 <= 0)) {
        IF_SETHIDE(true, int1);
        IF_SETHIDE(true, int4);
        CAM_SMOOTHRESET();
        return;
    };
    if ((varclient_1007 <= 10)) {
        IF_SETHIDE(true, int1);
        IF_SETHIDE(true, int4);
        script3470(int0, script284(COORD()));
        return;
    };
    if ((varclient_1007 <= 20)) {
        IF_SETHIDE(true, int1);
        IF_SETHIDE(true, int4);
        script3465(int0, script284(COORD()));
        return;
    };
    if ((varclient_1007 <= 30)) {
        IF_SETHIDE(true, int4);
        script3462(int0, int1, int2, int3);
        return;
    };
    if ((varclient_1007 <= 40)) {
        IF_SETHIDE(true, int1);
        IF_SETHIDE(true, int4);
        script3458(int0, script284(COORD()));
        return;
    };
    if ((varclient_1007 <= 100)) {
        IF_SETHIDE(true, int1);
        script3472(int0, int4);
        return;
    };
    if ((varclient_1007 <= 200)) {
        IF_SETHIDE(true, int1);
        IF_SETHIDE(true, int4);
        script3466(int0, script284(COORD()));
        return;
    };
    IF_SETHIDE(true, int1);
    IF_SETHIDE(true, int4);
    script6320(int0, script284(COORD()));
    return;
}