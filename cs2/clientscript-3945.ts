//
function script3945(int0: number): void {
    varclient_1412 = int0;
    RESUME_STRINGDIALOG(varclient_2563);
    CREATE_NAME_AVAILABLEREQUEST(varclient_2563);
    if ((IF_GETTOP() == 906)) {
        IF_SETONTIMER(callback(script7856), comp(1420, 7));  // acc_create:name_listener
    };
    return;
}