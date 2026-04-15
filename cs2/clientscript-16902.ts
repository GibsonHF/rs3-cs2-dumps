//
function script16902(int0: int): void {
    script3097();
    switch (int0) {
        case 10010: {
            script3093(int0, 4042 as dbrow, "Continue?", "After converting your account you will no longer be able to access Fresh Start mode.<br><br><col=ff0000>This cannot be reversed.</col><br><br>Are you sure you wish to convert your account?", 2608, "Convert to Standard Account", "Go Back");
            break;
        }
        default: {
            script3093(int0, 4040 as dbrow, "Continue?", "You need to be in game to access the store.<br><br>Do you want to continue?", 2608, "Continue", "Return to lobby");
            break;
        }
    };
    return;
}