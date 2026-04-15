//
function script15250(): void {
    switch (FEDERATED_LOGIN_STATUS()) {
        case 0:
        case 1:
        case 4: {
            script15253();
            break;
        }
        case 20: {
            script15254();
            break;
        }
        case 22: {
            script15255();
            break;
        }
        case 3: {
            script15251(4);
            break;
        }
        case 2: {
            script15251(3);
            break;
        }
        default: {
            script15251(9);
            break;
        }
    };
    return;
}