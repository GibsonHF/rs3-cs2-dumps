//
function script2578(int0: int): void {
    var int1 = MODULO(CLIENTCLOCK(), 800);
    if ((MODULO(CLIENTCLOCK(), 25) == 0)) {
        switch (int1) {
            case 0: {
                script2573(int0, 0);
                break;
            }
            case 200: {
                script2573(int0, 1);
                break;
            }
            case 400: {
                script2573(int0, 2);
                break;
            }
            case 600: {
                script2573(int0, 3);
                break;
            }
        };
    };
    return;
}