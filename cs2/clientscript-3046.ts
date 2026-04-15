//
function script3046(int0: int): void {
    if ((int0 > 1)) {
        script3047((int0 - 2));
    } else {
        switch (CHAT_GETFILTER_PRIVATE()) {
            case 0: {
                script3047(1);
                break;
            }
            case 1: {
                script3047(2);
                break;
            }
            case 2: {
                script3047(0);
                break;
            }
        };
    };
    return;
}