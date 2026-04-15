//
function script11703(int0: obj): void {
    switch (varbitplayer_19000) {
        case 1: {
            script15052(int0);
            break;
        }
        case 4: {
            script15014(int0);
            break;
        }
    };
    RESUME_OBJDIALOG(int0);
    if ((script6431() == true)) {
        switch (varbitplayer_19000) {
            case 1: {
                IF_SETONDIALOGABORT(callback(), 6881613);
                script7206(6881612, 6881613, 6881614, 6881615, 6881617);
                break;
            }
        };
    };
    return;
}