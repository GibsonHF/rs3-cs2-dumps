//[proc,create_focus]
function script2714(int0: number, int1: number): void {
    if ((CREATE_CONNECT_REPLY() == -3)) {
        return;
    };
    if ((CREATE_REPLY() == -3)) {
        return;
    };
    if ((CREATE_EMAIL_VALIDATE_REPLY() == -3)) {
        return;
    };
    var int2 = varclient_174;
    varclient_174 = int0;
    varclient_175 = CLIENTCLOCK();
    switch (int0) {
        case 111: {
            if ((int1 == 1)) {
                varclient_1099 = STRING_LENGTH(varclient_2563);
                script3218(51511310, 51511311, 51511312, varclient_2563, 111);
            };
            break;
        }
    };
    return;
}