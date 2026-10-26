//
function script21135(): void {
    switch (int1) {
        case 0:
        case 4: {
            break;
        }
        case 3:
        case 6: {
            if ((int0 == varclient_8509)) {
                varclient_8509 = -1;
                script21137();
            };
            break;
        }
        default: {
            return;
        }
    };
    if ((varclient_8510 < CLIENTCLOCK())) {
        stack(1);
        script21244();
        script21139();
        varclient_8510 = CLIENTCLOCK();
    };
    return;
}