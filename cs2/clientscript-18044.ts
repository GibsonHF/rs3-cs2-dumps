//
function script18044(int0: component, int1: component): void {
    CC_DELETEALL(int0);
    var int2 = 0;
    var int3 = 5;
    var int4 = 5;
    var string0 = "";
    var int5 = (IF_GETWIDTH(int0) - int4);
    string0 = "Welcome to Hero pass";
    int3 = (int3 + script17951(int0, int2, int4, int3, 0, 0, int4, 1, 2064 as dbrow, string0, int5, 60 as fontmetrics));
    CC_SETTEXTFONT(60 as fontmetrics);
    CC_SETCOLOUR(14734449);
    int2 = (int2 + 1);
    int3 = (int3 + 5);
    string0 = "By playing RuneScape and completing Hero Pass missions you'll progress through the Hero Pass and obtain a variety of rewards!<br>While everyone can obtain rewards, premier members or premier hero pass holders gain access to even more awesome rewards!";
    [int2, int3] = script18046(int0, int2, int4, int3, string0, int5);
    string0 = "Missions / Progress / Hero Points";
    [int2, int3] = script18047(int0, int2, int4, int3, string0, int5);
    string0 = "To progress through the Hero Pass, you'll need to gain Hero Points. Hero Points are obtained over time by simply playing the game. You can progress through the Hero Pass even faster by completing Missions which also award Hero Points. Missions can be found in the Missions tab. There are <col=2EF8FF>3</col> different types of missions.";
    [int2, int3] = script18046(int0, int2, int4, int3, string0, int5);
    string0 = "<col=2EF8FF>Basic missions</col> consist of daily and weekly tasks which require you to simply gain Hero Points while you play. Basic missions are where you'll now find what was previously known as Daily Challenges.";
    [int2, int3] = script18045(int0, int2, int4, int3, 1, string0, int5);
    string0 = "New Basic missions are obtained daily and weekly, and both expire at the end of the day and week respectively.";
    [int2, int3] = script18045(int0, int2, int4, int3, 2, string0, int5);
    string0 = "Daily Hero Point missions can be completed even quicker by training the skill displayed on the mission itself.";
    [int2, int3] = script18045(int0, int2, int4, int3, 2, string0, int5);
    string0 = "<col=2EF8FF>General missions</col> are more involved, requiring you to complete lengthier tasks but reward you with more Hero Points than Basic missions.";
    [int2, int3] = script18045(int0, int2, int4, int3, 1, string0, int5);
    string0 = "New General missions are received each week and remain until the end of the pass, so you have plenty of time to complete them.";
    [int2, int3] = script18045(int0, int2, int4, int3, 2, string0, int5);
    string0 = "<col=2EF8FF>Special missions</col> are unique as they consist of tasks that require you to play through recently released content such as a new quest or skill release!";
    [int2, int3] = script18045(int0, int2, int4, int3, 1, string0, int5);
    string0 = "These missions also remain until the end of the pass and will award you with the most Hero Points, so be sure to complete them!";
    [int2, int3] = script18045(int0, int2, int4, int3, 2, string0, int5);
    string0 = "<br>You earn Hero Points by playing the game, via three different methods.";
    [int2, int3] = script18046(int0, int2, int4, int3, string0, int5);
    string0 = "Each minute of play time, if you're <col=2EF8FF>skilling or killing</col> you'll receive <col=2EF8FF>4</col> Hero points.";
    [int2, int3] = script18045(int0, int2, int4, int3, 1, string0, int5);
    string0 = "While completing clue scroll steps you'll receive <col=2EF8FF>1</col>/<col=2EF8FF>1</col>/<col=2EF8FF>2</col>/<col=2EF8FF>4</col>/<col=2EF8FF>5</col> Hero Points depending on the difficulty of the clue.";
    [int2, int3] = script18045(int0, int2, int4, int3, 1, string0, int5);
    string0 = "You'll receive <col=2EF8FF>1</col> Hero Point per <col=2EF8FF>5</col> Marks of War earned.";
    [int2, int3] = script18045(int0, int2, int4, int3, 1, string0, int5);
    script17927();
    string0 = "Emblems and the Hero Store";
    [int2, int3] = script18047(int0, int2, int4, int3, string0, int5);
    string0 = "Throughout the Hero Pass you'll obtain currency which can be used in the Hero Store. Each Hero Pass will have its own unique currency. In this pass, you'll obtain <col=2EF8FF>Underworld Emblems</col>. These will expire at the end of the pass so be sure to spend them before losing them.";
    script17927();
    [int2, int3] = script18046(int0, int2, int4, int3, string0, int5);
    string0 = "The Hero Store consists of a variety of new rewards as well as some previously released rewards, giving you another chance to obtain them if you missed out in the past.";
    [int2, int3] = script18046(int0, int2, int4, int3, string0, int5);
    string0 = "By spending your currency in the Hero Store, you'll also work towards unlocking a free and unique reward! Each Hero Pass will have its own unique reward so keep an eye out.";
    [int2, int3] = script18046(int0, int2, int4, int3, string0, int5);
    string0 = "Levels and Post 120";
    [int2, int3] = script18047(int0, int2, int4, int3, string0, int5);
    string0 = "The Hero Pass consists of 120 levels. Each level requires 1,000 Hero Points to progress. By completing level 99 in the Hero Pass, you'll also obtain a progress booster which will boost you by 10 levels in the next Hero Pass.";
    [int2, int3] = script18046(int0, int2, int4, int3, string0, int5);
    string0 = "After completing all 120 levels in the pass, you'll gain access to a repeatable level which awards 125 Underworld Emblems on each completion.";
    [int2, int3] = script18046(int0, int2, int4, int3, string0, int5);
    var int6 = 0;
    if ((((varplayer_11331 > 0) || (varplayer_11332 > 0)) && (varplayer_11333 == script17857(script17853())))) {
        int6 = 1;
    } else if ((script17894() == 1)) {
        int6 = 1;
    };
    if ((int6 == 1)) {
        string0 = "Skips, Conversions and Previous Yak Tracks";
        [int2, int3] = script18047(int0, int2, int4, int3, string0, int5);
        string0 = "You may have noticed that you didn't start the Hero Pass at level 1. We've converted old Yak Track skips, old Challenge skip tokens and are continuing the Yak Track Progress boosters into Hero Pass.";
        [int2, int3] = script18046(int0, int2, int4, int3, string0, int5);
        if ((varplayer_11331 > 0)) {
            string0 = `Your Yak Track skips have converted to <col=2EF8FF>${TOSTRING_LOCALISED(varplayer_11331, 1)}</col> levels.`;
            [int2, int3] = script18045(int0, int2, int4, int3, 1, string0, int5);
        };
        if ((varplayer_11332 > 0)) {
            string0 = `Your Challenge skip tokens have converted to <col=2EF8FF>${TOSTRING_LOCALISED(varplayer_11332, 1)}</col> Hero points.`;
            [int2, int3] = script18045(int0, int2, int4, int3, 1, string0, int5);
        };
        if ((script17894() == 1)) {
            if ((script17854() == -1 as dbrow)) {
                string0 = `Your progress booster from Forinthry Frontier Yak Track earnt you <col=2EF8FF>${TOSTRING_LOCALISED(10, 1)}</col> levels.`;
            } else {
                string0 = `Your progress booster from ${script17888(script17854())} earnt you <col=2EF8FF>${TOSTRING_LOCALISED(10, 1)}</col> levels.`;
            };
            [int2, int3] = script18045(int0, int2, int4, int3, 1, string0, int5);
        };
    };
    IF_SETSCROLLPOS(0, 0, int0);
    IF_SETSCROLLSIZE(0, (int3 + 5), int0);
    script7791(int1, int0);
    return;
}