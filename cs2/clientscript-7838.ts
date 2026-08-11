//
function script7838(): void {
    if ((IF_GETTOP() == 906)) {
        CREATE_SUGGEST_NAME_REQUEST();
        IF_SETONTIMER(callback(script7840), comp(1420, 6));  // acc_create:random_name_listener
    };
    script1301();
    return;
}