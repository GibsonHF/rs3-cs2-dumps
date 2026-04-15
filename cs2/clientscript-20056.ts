//
function script20056(): unknown_int {
    var string0 = "Any accrued daily keys can be used on the first day you log in after the experiment.";
    if ((script20055() == 1)) {
        script1296("Treasure Hunter is currently disabled due to an ongoing experiment. It will return on 29th July.");
        printmessage(`<col=EB2F2F>${string0}`);
        MES_TYPED(145, 506, "Find out more about this experiment and how to provide feedback via our newspost.");
        return 1;
    };
    return 0;
}