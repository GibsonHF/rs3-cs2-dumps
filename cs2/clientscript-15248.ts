//
function script15248(): unknown_int {
    if ((SSO_AVAILABLE() == 1)) {
        return 0;
    };
    switch (FEDERATED_LOGIN_STATUS()) {
        case 4:
        case 1:
        case 2: {
            return 0;
        }
    };
    return 1;
}