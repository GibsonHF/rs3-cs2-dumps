//
function script18466(int0: component, int1: unknown_int): void {
    if ((CC_FIND(int0, 0) == 1)) {
        switch (int1) {
            case 2: {
                if ((unk11021("title_text") == 1)) {
                    IF_SETTEXT(unk11020("title_text"), dbrow_getfield(13086 as dbrow, 733200, 0));
                };
                script10593(1);
                break;
            }
            case 3:
            case 4:
            case 5:
            case 6: {
                if ((CC_FIND(int0, 0) == 1)) {
                    CC_DELETE();
                };
                script3014(0);
                break;
            }
        };
    };
    return;
}