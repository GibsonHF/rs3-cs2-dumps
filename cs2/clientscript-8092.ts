//
function script8092(): void {
    switch (varclient_3518) {
        case 2: {
            IF_SETSIZE(0, 53, 1, 1, 20316162);
            if ((IF_GETHIDE(20316161) == 1)) {
                IF_SETHIDE(0, 20316161);
                IF_SETSIZE(16, 0, 1, 1, 20316160);
            };
            script72(20316161, 20316160, IF_GETSCROLLY(20316160));
            break;
        }
        case 3: {
            IF_SETHIDE(0, 20905993);
            IF_SETHIDE(1, 93650968);
            IF_SETSIZE(16, 45, 1, 1, 20905991);
            if ((IF_GETHIDE(20905986) == 0)) {
                IF_SETHIDE(0, 20905986);
            };
            if ((IF_GETHIDE(20905987) == 0)) {
                IF_SETHIDE(0, 20905987);
            };
            script72(20905987, 20905984, IF_GETSCROLLY(20905984));
            script72(20905986, 20905985, IF_GETSCROLLY(20905985));
            break;
        }
        case 4: {
            IF_SETHIDE(0, 54001695);
            IF_SETHIDE(1, 93650968);
            IF_SETSIZE(16, 0, 1, 1, 54001664);
            IF_SETSCROLLSIZE(0, 255, 54001664);
            if ((IF_GETHIDE(54001665) == 0)) {
                IF_SETHIDE(0, 54001665);
            };
            script72(54001665, 54001664, IF_GETSCROLLY(54001664));
            break;
        }
        case 5: {
            script5308();
            break;
        }
    };
    return;
}