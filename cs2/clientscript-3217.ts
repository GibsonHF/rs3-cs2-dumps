//
function script3217(int0: int, int1: component, int2: component, int3: component, int4: int): void {
    if ((CREATE_CONNECT_REPLY() == -3)) {
        return;
    };
    if ((CREATE_REPLY() == -3)) {
        return;
    };
    if ((CREATE_EMAIL_VALIDATE_REPLY() == -3)) {
        return;
    };
    if ((int4 != 111)) {
        return;
    };
    var int5 = IF_GETFONTMETRICS(int2);
    if ((script13749() == true)) {
        varclient_1099 = STRING_LENGTH(varclient_2563);
    } else {
        varclient_1099 = script1401((int0 - 5), varclient_2563, int5, 0);
    };
    script3218(int1, int2, int3, varclient_2563, int4);
    script1566(0, varclient_2563, 12);
    script2714(int4, 0);
    return;
}