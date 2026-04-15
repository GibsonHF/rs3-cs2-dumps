//
function script15025(): void {
    if (((script4682() == -1) || ((varplayer_9456 == 1) && (script15010() == 1)))) {
        script1296("You do not have any offer slots available to make a new purchase.");
    } else {
        varclient_2250 = "";
        varclient_6788 = "";
        script15047();
        script10068(struct_getparam(21301, 3509), (1 - 1));
    };
    return;
}