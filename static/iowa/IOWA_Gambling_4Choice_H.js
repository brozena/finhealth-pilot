
/******************************** 
 * Iowa_Gambling_4Choice_H *
 ********************************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2024.2.4.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'IOWA_Gambling_4Choice_H';  // from the Builder filename that created this script
let expInfo = {
    'participant': '',
};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color('white'),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(Instructions1RoutineBegin());
flowScheduler.add(Instructions1RoutineEachFrame());
flowScheduler.add(Instructions1RoutineEnd());
flowScheduler.add(Instructions2RoutineBegin());
flowScheduler.add(Instructions2RoutineEachFrame());
flowScheduler.add(Instructions2RoutineEnd());
flowScheduler.add(Instructions3RoutineBegin());
flowScheduler.add(Instructions3RoutineEachFrame());
flowScheduler.add(Instructions3RoutineEnd());
flowScheduler.add(BankRoutineBegin());
flowScheduler.add(BankRoutineEachFrame());
flowScheduler.add(BankRoutineEnd());
const ChoiceBlockLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(ChoiceBlockLoopBegin(ChoiceBlockLoopScheduler));
flowScheduler.add(ChoiceBlockLoopScheduler);
flowScheduler.add(ChoiceBlockLoopEnd);





flowScheduler.add(EndRoutineBegin());
flowScheduler.add(EndRoutineEachFrame());
flowScheduler.add(EndRoutineEnd());
flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'GainLosConds.xlsx', 'path': '/static/iowa/GainLosConds.xlsx'},
    {'name': 'card_choice.png', 'path': '/static/iowa/card_choice.png'},
    {'name': 'default.png', 'path': 'https://pavlovia.org/assets/default/default.png'},
    {'name': 'card_choice.png', 'path': '/static/iowa/card_choice.png'},
    {'name': 'card_selected.png', 'path': '/static/iowa/card_selected.png'},
    {'name': 'GainLosConds.xlsx', 'path': '/static/iowa/GainLosConds.xlsx'},
    {'name': 'GainLosConds_testforshortexp.xlsx', 'path': '/static/iowa/GainLosConds_testforshortexp.xlsx'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2024.2.4';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("~" + "/") + `/iowa/data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var Instructions1Clock;
var Instruct1_text;
var Instruct1_Resp;
var Block;
var CardChoice;
var CardChoice_code;
var GoodDeck;
var CardAcc;
var CardCounter;
var KnowledgeCounter;
var CardList;
var MoneyList;
var KnowList;
var CurrentKnow;
var A_Counter;
var A_moneyCounter;
var B_Counter;
var B_moneyCounter;
var C_Counter;
var C_moneyCounter;
var D_Counter;
var D_moneyCounter;
var MoneyCounter;
var Bank;
var ChoiceStartTime;
var ChoiceTimePassed;
var ChoiceTimedOut;
var FeedbackCoords;
var MsgColor;
var PlusMinus;
var Msg;
var KnowInstrct2_Rep;
var imgA;
var imgB;
var imgC;
var imgD;
var Instructions2Clock;
var Instruct2_text;
var Instruct2_Resp;
var Instructions3Clock;
var A0;
var B0;
var C0;
var D0;
var Instruct3_Resp;
var Instruct3_text;
var BankClock;
var Banktext;
var Initializing_text;
var ChoiceClock;
var ChoiceResp;
var A;
var B;
var C;
var D;
var text;
var text_2;
var text_3;
var text_4;
var text_6;
var ProcessChoiceClock;
var SetMoneyClock;
var FeedbackClock;
var A2;
var B2;
var C2;
var D2;
var DisplayCurrentMoney_1;
var Message;
var Bank_text;
var text_9;
var text_5;
var text_8;
var text_7;
var EndClock;
var thank_you;
var Bank_text_2;
var key_resp;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "Instructions1"
  Instructions1Clock = new util.Clock();
  Instruct1_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Instruct1_text',
    text: 'In this game, you will see a series of cards. You must choose a card to PLAY\n\nSometimes you will win money, sometimes you will lose money.  \n\nYour job is to try to win as much money as possible.\n\nPress spacebar to continue. ',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.04,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  Instruct1_Resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Run 'Begin Experiment' code from MoneyList_code
  Block = 0;
  CardChoice = 0;
  CardChoice_code = 0;
  GoodDeck = 3;
  CardAcc = 3;
  CardCounter = 0;
  KnowledgeCounter = 0;
  CardList = [0];
  MoneyList = [0];
  KnowList = [0];
  CurrentKnow = 0;
  A_Counter = 0;
  A_moneyCounter = 0;
  B_Counter = 0;
  B_moneyCounter = 0;
  C_Counter = 0;
  C_moneyCounter = 0;
  D_Counter = 0;
  D_moneyCounter = 0;
  MoneyCounter = 0;
  Bank = 2000;
  ChoiceStartTime = 0;
  ChoiceTimePassed = 0;
  ChoiceTimedOut = 0;
  FeedbackCoords = 0;
  MsgColor = "black";
  PlusMinus = " ";
  Msg = " ";
  KnowInstrct2_Rep = 1;
  imgA = "card_choice.png";
  imgB = "card_choice.png";
  imgC = "card_choice.png";
  imgD = "card_choice.png";
  
  // Initialize components for Routine "Instructions2"
  Instructions2Clock = new util.Clock();
  Instruct2_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Instruct2_text',
    text: 'You will start with $2000 in the bank\n\nThere are good decks and bad decks in this game.  You can win the most money by learning to avoid the bad decks and selecting cards only from the good decks.\n\nWe cannot tell you which decks are good and bad.\n\nPress spacebar to continue.\n\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.04,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  Instruct2_Resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Instructions3"
  Instructions3Clock = new util.Clock();
  A0 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'A0', units : undefined, 
    image : 'card_choice.png', mask : undefined,
    anchor : 'center',
    ori : 0, 
    pos : [(- 0.36), 0.1], 
    draggable: false,
    size : 0.3,
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : 0.0 
  });
  B0 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'B0', units : undefined, 
    image : 'card_choice.png', mask : undefined,
    anchor : 'center',
    ori : 0, 
    pos : [(- 0.12), 0.1], 
    draggable: false,
    size : 0.3,
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0 
  });
  C0 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'C0', units : undefined, 
    image : 'card_choice.png', mask : undefined,
    anchor : 'center',
    ori : 0, 
    pos : [0.12, 0.1], 
    draggable: false,
    size : 0.3,
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -2.0 
  });
  D0 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'D0', units : undefined, 
    image : 'card_choice.png', mask : undefined,
    anchor : 'center',
    ori : 0, 
    pos : [0.36, 0.1], 
    draggable: false,
    size : 0.3,
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -3.0 
  });
  Instruct3_Resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  Instruct3_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Instruct3_text',
    text: 'This is what the screen will look like. \n\nYou can choose a card by selecting either 1, 2, 3 or 4 on the keyboard\n\nPress spacebar to begin.',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.25)], draggable: false, height: 0.04,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: 1,
    depth: -5.0 
  });
  
  // Initialize components for Routine "Bank"
  BankClock = new util.Clock();
  Banktext = new visual.TextStim({
    win: psychoJS.window,
    name: 'Banktext',
    text: ("Your Current Total:  $" + Bank.toString()),
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.1], draggable: false, height: 0.04,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  Initializing_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Initializing_text',
    text: 'Intializing...',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.2)], draggable: false, height: 0.04,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: 1,
    depth: -1.0 
  });
  
  // Initialize components for Routine "Choice"
  ChoiceClock = new util.Clock();
  ChoiceResp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  A = new visual.ImageStim({
    win : psychoJS.window,
    name : 'A', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0, 
    pos : [0, 0], 
    draggable: false,
    size : 1.0,
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -2.0 
  });
  B = new visual.ImageStim({
    win : psychoJS.window,
    name : 'B', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0, 
    pos : [0, 0], 
    draggable: false,
    size : 1.0,
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -3.0 
  });
  C = new visual.ImageStim({
    win : psychoJS.window,
    name : 'C', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0, 
    pos : [0, 0], 
    draggable: false,
    size : 1.0,
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -4.0 
  });
  D = new visual.ImageStim({
    win : psychoJS.window,
    name : 'D', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0, 
    pos : [0, 0], 
    draggable: false,
    size : 1.0,
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -5.0 
  });
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: '1',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.36), 0.3], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -6.0 
  });
  
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: '2',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.12), 0.3], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -7.0 
  });
  
  text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_3',
    text: '3',
    font: 'Arial',
    units: undefined, 
    pos: [0.12, 0.3], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -8.0 
  });
  
  text_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_4',
    text: '4',
    font: 'Arial',
    units: undefined, 
    pos: [0.36, 0.3], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -9.0 
  });
  
  text_6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_6',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -10.0 
  });
  
  // Initialize components for Routine "ProcessChoice"
  ProcessChoiceClock = new util.Clock();
  // Initialize components for Routine "SetMoney"
  SetMoneyClock = new util.Clock();
  // Initialize components for Routine "Feedback"
  FeedbackClock = new util.Clock();
  A2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'A2', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0, 
    pos : [0, 0], 
    draggable: false,
    size : 1.0,
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0 
  });
  B2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'B2', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0, 
    pos : [0, 0], 
    draggable: false,
    size : 1.0,
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -2.0 
  });
  C2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'C2', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0, 
    pos : [0, 0], 
    draggable: false,
    size : 1.0,
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -3.0 
  });
  D2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'D2', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0, 
    pos : [0, 0], 
    draggable: false,
    size : 1.0,
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -4.0 
  });
  DisplayCurrentMoney_1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'DisplayCurrentMoney_1',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.2)], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -5.0 
  });
  
  Message = new visual.TextStim({
    win: psychoJS.window,
    name: 'Message',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.25)], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: 1,
    depth: -6.0 
  });
  
  Bank_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Bank_text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.35)], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: 1,
    depth: -7.0 
  });
  
  text_9 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_9',
    text: '4',
    font: 'Arial',
    units: undefined, 
    pos: [0.36, 0.3], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -8.0 
  });
  
  text_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_5',
    text: '1',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.36), 0.3], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -9.0 
  });
  
  text_8 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_8',
    text: '3',
    font: 'Arial',
    units: undefined, 
    pos: [0.12, 0.3], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -10.0 
  });
  
  text_7 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_7',
    text: '2',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.12), 0.3], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -11.0 
  });
  
  // Initialize components for Routine "End"
  EndClock = new util.Clock();
  thank_you = new visual.TextStim({
    win: psychoJS.window,
    name: 'thank_you',
    text: 'This is the end of the experiment.\nThank you for your time.\n\nPress spacebar to close.',
    font: 'Arial',
    units: undefined, 
    pos: [0, (0 - 0.15)], draggable: false, height: 0.04,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  Bank_text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Bank_text_2',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: 1,
    depth: -1.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var Instructions1MaxDurationReached;
var _Instruct1_Resp_allKeys;
var Instructions1MaxDuration;
var Instructions1Components;
function Instructions1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Instructions1' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    Instructions1Clock.reset();
    routineTimer.reset();
    Instructions1MaxDurationReached = false;
    // update component parameters for each repeat
    Instruct1_Resp.keys = undefined;
    Instruct1_Resp.rt = undefined;
    _Instruct1_Resp_allKeys = [];
    psychoJS.experiment.addData('Instructions1.started', globalClock.getTime());
    Instructions1MaxDuration = null
    // keep track of which components have finished
    Instructions1Components = [];
    Instructions1Components.push(Instruct1_text);
    Instructions1Components.push(Instruct1_Resp);
    
    for (const thisComponent of Instructions1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Instructions1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Instructions1' ---
    // get current time
    t = Instructions1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Instruct1_text* updates
    if (t >= 0.0 && Instruct1_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Instruct1_text.tStart = t;  // (not accounting for frame time here)
      Instruct1_text.frameNStart = frameN;  // exact frame index
      
      Instruct1_text.setAutoDraw(true);
    }
    
    
    // *Instruct1_Resp* updates
    if (t >= 0.0 && Instruct1_Resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Instruct1_Resp.tStart = t;  // (not accounting for frame time here)
      Instruct1_Resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Instruct1_Resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Instruct1_Resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Instruct1_Resp.clearEvents(); });
    }
    
    if (Instruct1_Resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = Instruct1_Resp.getKeys({keyList: ['space'], waitRelease: false});
      _Instruct1_Resp_allKeys = _Instruct1_Resp_allKeys.concat(theseKeys);
      if (_Instruct1_Resp_allKeys.length > 0) {
        Instruct1_Resp.keys = _Instruct1_Resp_allKeys[_Instruct1_Resp_allKeys.length - 1].name;  // just the last key pressed
        Instruct1_Resp.rt = _Instruct1_Resp_allKeys[_Instruct1_Resp_allKeys.length - 1].rt;
        Instruct1_Resp.duration = _Instruct1_Resp_allKeys[_Instruct1_Resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Instructions1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Instructions1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Instructions1' ---
    for (const thisComponent of Instructions1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Instructions1.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(Instruct1_Resp.corr, level);
    }
    psychoJS.experiment.addData('Instruct1_Resp.keys', Instruct1_Resp.keys);
    if (typeof Instruct1_Resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Instruct1_Resp.rt', Instruct1_Resp.rt);
        psychoJS.experiment.addData('Instruct1_Resp.duration', Instruct1_Resp.duration);
        routineTimer.reset();
        }
    
    Instruct1_Resp.stop();
    // Run 'End Routine' code from MoneyList_code
    Block = 1;
    
    // the Routine "Instructions1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var Instructions2MaxDurationReached;
var _Instruct2_Resp_allKeys;
var Instructions2MaxDuration;
var Instructions2Components;
function Instructions2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Instructions2' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    Instructions2Clock.reset();
    routineTimer.reset();
    Instructions2MaxDurationReached = false;
    // update component parameters for each repeat
    Instruct2_Resp.keys = undefined;
    Instruct2_Resp.rt = undefined;
    _Instruct2_Resp_allKeys = [];
    psychoJS.experiment.addData('Instructions2.started', globalClock.getTime());
    Instructions2MaxDuration = null
    // keep track of which components have finished
    Instructions2Components = [];
    Instructions2Components.push(Instruct2_text);
    Instructions2Components.push(Instruct2_Resp);
    
    for (const thisComponent of Instructions2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Instructions2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Instructions2' ---
    // get current time
    t = Instructions2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Instruct2_text* updates
    if (t >= 0.0 && Instruct2_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Instruct2_text.tStart = t;  // (not accounting for frame time here)
      Instruct2_text.frameNStart = frameN;  // exact frame index
      
      Instruct2_text.setAutoDraw(true);
    }
    
    
    // *Instruct2_Resp* updates
    if (t >= 0.0 && Instruct2_Resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Instruct2_Resp.tStart = t;  // (not accounting for frame time here)
      Instruct2_Resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Instruct2_Resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Instruct2_Resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Instruct2_Resp.clearEvents(); });
    }
    
    if (Instruct2_Resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = Instruct2_Resp.getKeys({keyList: ['space'], waitRelease: false});
      _Instruct2_Resp_allKeys = _Instruct2_Resp_allKeys.concat(theseKeys);
      if (_Instruct2_Resp_allKeys.length > 0) {
        Instruct2_Resp.keys = _Instruct2_Resp_allKeys[_Instruct2_Resp_allKeys.length - 1].name;  // just the last key pressed
        Instruct2_Resp.rt = _Instruct2_Resp_allKeys[_Instruct2_Resp_allKeys.length - 1].rt;
        Instruct2_Resp.duration = _Instruct2_Resp_allKeys[_Instruct2_Resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Instructions2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Instructions2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Instructions2' ---
    for (const thisComponent of Instructions2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Instructions2.stopped', globalClock.getTime());
    Instruct2_Resp.stop();
    // the Routine "Instructions2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var Instructions3MaxDurationReached;
var _Instruct3_Resp_allKeys;
var Instructions3MaxDuration;
var Instructions3Components;
function Instructions3RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Instructions3' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    Instructions3Clock.reset();
    routineTimer.reset();
    Instructions3MaxDurationReached = false;
    // update component parameters for each repeat
    Instruct3_Resp.keys = undefined;
    Instruct3_Resp.rt = undefined;
    _Instruct3_Resp_allKeys = [];
    psychoJS.experiment.addData('Instructions3.started', globalClock.getTime());
    Instructions3MaxDuration = null
    // keep track of which components have finished
    Instructions3Components = [];
    Instructions3Components.push(A0);
    Instructions3Components.push(B0);
    Instructions3Components.push(C0);
    Instructions3Components.push(D0);
    Instructions3Components.push(Instruct3_Resp);
    Instructions3Components.push(Instruct3_text);
    
    for (const thisComponent of Instructions3Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Instructions3RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Instructions3' ---
    // get current time
    t = Instructions3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *A0* updates
    if (t >= 0.0 && A0.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      A0.tStart = t;  // (not accounting for frame time here)
      A0.frameNStart = frameN;  // exact frame index
      
      A0.setAutoDraw(true);
    }
    
    
    // *B0* updates
    if (t >= 0.0 && B0.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      B0.tStart = t;  // (not accounting for frame time here)
      B0.frameNStart = frameN;  // exact frame index
      
      B0.setAutoDraw(true);
    }
    
    
    // *C0* updates
    if (t >= 0.0 && C0.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      C0.tStart = t;  // (not accounting for frame time here)
      C0.frameNStart = frameN;  // exact frame index
      
      C0.setAutoDraw(true);
    }
    
    
    // *D0* updates
    if (t >= 0.0 && D0.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      D0.tStart = t;  // (not accounting for frame time here)
      D0.frameNStart = frameN;  // exact frame index
      
      D0.setAutoDraw(true);
    }
    
    
    // *Instruct3_Resp* updates
    if (t >= 0.0 && Instruct3_Resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Instruct3_Resp.tStart = t;  // (not accounting for frame time here)
      Instruct3_Resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Instruct3_Resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Instruct3_Resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Instruct3_Resp.clearEvents(); });
    }
    
    if (Instruct3_Resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = Instruct3_Resp.getKeys({keyList: ['space'], waitRelease: false});
      _Instruct3_Resp_allKeys = _Instruct3_Resp_allKeys.concat(theseKeys);
      if (_Instruct3_Resp_allKeys.length > 0) {
        Instruct3_Resp.keys = _Instruct3_Resp_allKeys[_Instruct3_Resp_allKeys.length - 1].name;  // just the last key pressed
        Instruct3_Resp.rt = _Instruct3_Resp_allKeys[_Instruct3_Resp_allKeys.length - 1].rt;
        Instruct3_Resp.duration = _Instruct3_Resp_allKeys[_Instruct3_Resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *Instruct3_text* updates
    if (t >= 0.0 && Instruct3_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Instruct3_text.tStart = t;  // (not accounting for frame time here)
      Instruct3_text.frameNStart = frameN;  // exact frame index
      
      Instruct3_text.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Instructions3Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Instructions3RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Instructions3' ---
    for (const thisComponent of Instructions3Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Instructions3.stopped', globalClock.getTime());
    Instruct3_Resp.stop();
    // the Routine "Instructions3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var BankMaxDurationReached;
var BankMaxDuration;
var BankComponents;
function BankRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Bank' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    BankClock.reset(routineTimer.getTime());
    routineTimer.add(4.000000);
    BankMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('Bank.started', globalClock.getTime());
    BankMaxDuration = null
    // keep track of which components have finished
    BankComponents = [];
    BankComponents.push(Banktext);
    BankComponents.push(Initializing_text);
    
    for (const thisComponent of BankComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function BankRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Bank' ---
    // get current time
    t = BankClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Banktext* updates
    if (t >= 0.0 && Banktext.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Banktext.tStart = t;  // (not accounting for frame time here)
      Banktext.frameNStart = frameN;  // exact frame index
      
      Banktext.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 4 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (Banktext.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Banktext.setAutoDraw(false);
    }
    
    
    // *Initializing_text* updates
    if (t >= 0.0 && Initializing_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Initializing_text.tStart = t;  // (not accounting for frame time here)
      Initializing_text.frameNStart = frameN;  // exact frame index
      
      Initializing_text.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 4 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (Initializing_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Initializing_text.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of BankComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function BankRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Bank' ---
    for (const thisComponent of BankComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Bank.stopped', globalClock.getTime());
    if (BankMaxDurationReached) {
        BankClock.add(BankMaxDuration);
    } else {
        BankClock.add(4.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var ChoiceBlock;
function ChoiceBlockLoopBegin(ChoiceBlockLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    ChoiceBlock = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'GainLosConds.xlsx',
      seed: undefined, name: 'ChoiceBlock'
    });
    psychoJS.experiment.addLoop(ChoiceBlock); // add the loop to the experiment
    currentLoop = ChoiceBlock;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisChoiceBlock of ChoiceBlock) {
      snapshot = ChoiceBlock.getSnapshot();
      ChoiceBlockLoopScheduler.add(importConditions(snapshot));
      ChoiceBlockLoopScheduler.add(ChoiceRoutineBegin(snapshot));
      ChoiceBlockLoopScheduler.add(ChoiceRoutineEachFrame());
      ChoiceBlockLoopScheduler.add(ChoiceRoutineEnd(snapshot));
      ChoiceBlockLoopScheduler.add(ProcessChoiceRoutineBegin(snapshot));
      ChoiceBlockLoopScheduler.add(ProcessChoiceRoutineEachFrame());
      ChoiceBlockLoopScheduler.add(ProcessChoiceRoutineEnd(snapshot));
      ChoiceBlockLoopScheduler.add(SetMoneyRoutineBegin(snapshot));
      ChoiceBlockLoopScheduler.add(SetMoneyRoutineEachFrame());
      ChoiceBlockLoopScheduler.add(SetMoneyRoutineEnd(snapshot));
      ChoiceBlockLoopScheduler.add(FeedbackRoutineBegin(snapshot));
      ChoiceBlockLoopScheduler.add(FeedbackRoutineEachFrame());
      ChoiceBlockLoopScheduler.add(FeedbackRoutineEnd(snapshot));
      ChoiceBlockLoopScheduler.add(ChoiceBlockLoopEndIteration(ChoiceBlockLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function ChoiceBlockLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(ChoiceBlock);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function ChoiceBlockLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var ChoiceMaxDurationReached;
var CurrentCard;
var Outcome;
var _ChoiceResp_allKeys;
var ChoiceMaxDuration;
var ChoiceComponents;
function ChoiceRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Choice' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    ChoiceClock.reset();
    routineTimer.reset();
    ChoiceMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from ChoiceTime_code
    ChoiceStartTime = globalClock.getTime();
    ChoiceTimePassed = 0;
    ChoiceTimedOut = 0;
    CardChoice = 0;
    CurrentCard = "";
    Outcome = 0;
    imgA = "card_choice.png";
    imgB = "card_choice.png";
    imgC = "card_choice.png";
    imgD = "card_choice.png";
    
    ChoiceResp.keys = undefined;
    ChoiceResp.rt = undefined;
    _ChoiceResp_allKeys = [];
    A.setPos([(- 0.36), 0.1]);
    A.setSize(0.3);
    A.setImage(imgA);
    B.setPos([(- 0.12), 0.1]);
    B.setSize(0.3);
    B.setImage(imgB);
    C.setPos([0.12, 0.1]);
    C.setSize(0.3);
    C.setImage(imgC);
    D.setPos([0.36, 0.1]);
    D.setSize(0.3);
    D.setImage(imgD);
    psychoJS.experiment.addData('Choice.started', globalClock.getTime());
    ChoiceMaxDuration = null
    // keep track of which components have finished
    ChoiceComponents = [];
    ChoiceComponents.push(ChoiceResp);
    ChoiceComponents.push(A);
    ChoiceComponents.push(B);
    ChoiceComponents.push(C);
    ChoiceComponents.push(D);
    ChoiceComponents.push(text);
    ChoiceComponents.push(text_2);
    ChoiceComponents.push(text_3);
    ChoiceComponents.push(text_4);
    ChoiceComponents.push(text_6);
    
    for (const thisComponent of ChoiceComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var choiceStr;
function ChoiceRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Choice' ---
    // get current time
    t = ChoiceClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from ChoiceTime_code
    ChoiceTimePassed = (globalClock.getTime() - ChoiceStartTime);
    choiceStr = "XXXXXX";
    
    
    // *ChoiceResp* updates
    if (t >= 0.0 && ChoiceResp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ChoiceResp.tStart = t;  // (not accounting for frame time here)
      ChoiceResp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { ChoiceResp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { ChoiceResp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { ChoiceResp.clearEvents(); });
    }
    
    if (ChoiceResp.status === PsychoJS.Status.STARTED) {
      let theseKeys = ChoiceResp.getKeys({keyList: ['1', '2', '3', '4'], waitRelease: false});
      _ChoiceResp_allKeys = _ChoiceResp_allKeys.concat(theseKeys);
      if (_ChoiceResp_allKeys.length > 0) {
        ChoiceResp.keys = _ChoiceResp_allKeys[_ChoiceResp_allKeys.length - 1].name;  // just the last key pressed
        ChoiceResp.rt = _ChoiceResp_allKeys[_ChoiceResp_allKeys.length - 1].rt;
        ChoiceResp.duration = _ChoiceResp_allKeys[_ChoiceResp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *A* updates
    if (t >= 0.0 && A.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      A.tStart = t;  // (not accounting for frame time here)
      A.frameNStart = frameN;  // exact frame index
      
      A.setAutoDraw(true);
    }
    
    
    // *B* updates
    if (t >= 0.0 && B.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      B.tStart = t;  // (not accounting for frame time here)
      B.frameNStart = frameN;  // exact frame index
      
      B.setAutoDraw(true);
    }
    
    
    // *C* updates
    if (t >= 0.0 && C.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      C.tStart = t;  // (not accounting for frame time here)
      C.frameNStart = frameN;  // exact frame index
      
      C.setAutoDraw(true);
    }
    
    
    // *D* updates
    if (t >= 0.0 && D.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      D.tStart = t;  // (not accounting for frame time here)
      D.frameNStart = frameN;  // exact frame index
      
      D.setAutoDraw(true);
    }
    
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }
    
    
    // *text_2* updates
    if (t >= 0.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2.tStart = t;  // (not accounting for frame time here)
      text_2.frameNStart = frameN;  // exact frame index
      
      text_2.setAutoDraw(true);
    }
    
    
    // *text_3* updates
    if (t >= 0.0 && text_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_3.tStart = t;  // (not accounting for frame time here)
      text_3.frameNStart = frameN;  // exact frame index
      
      text_3.setAutoDraw(true);
    }
    
    
    // *text_4* updates
    if (t >= 0.0 && text_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_4.tStart = t;  // (not accounting for frame time here)
      text_4.frameNStart = frameN;  // exact frame index
      
      text_4.setAutoDraw(true);
    }
    
    
    if (text_6.status === PsychoJS.Status.STARTED){ // only update if being drawn
      text_6.setPos([0, (- 0.25)], false);
      text_6.setText('SELECT A CARD', false);
    }
    
    // *text_6* updates
    if (t >= 0.0 && text_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_6.tStart = t;  // (not accounting for frame time here)
      text_6.frameNStart = frameN;  // exact frame index
      
      text_6.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of ChoiceComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ChoiceRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Choice' ---
    for (const thisComponent of ChoiceComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Choice.stopped', globalClock.getTime());
    // Run 'End Routine' code from ChoiceTime_code
    if ((ChoiceResp.keys === "1")) {
        CurrentCard = "A_Card";
    } else {
        if ((ChoiceResp.keys === "2")) {
            CurrentCard = "B_Card";
        } else {
            if ((ChoiceResp.keys === "3")) {
                CurrentCard = "C_Card";
            } else {
                if ((ChoiceResp.keys === "4")) {
                    CurrentCard = "D_Card";
                }
            }
        }
    }
    
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(ChoiceResp.corr, level);
    }
    psychoJS.experiment.addData('ChoiceResp.keys', ChoiceResp.keys);
    if (typeof ChoiceResp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('ChoiceResp.rt', ChoiceResp.rt);
        psychoJS.experiment.addData('ChoiceResp.duration', ChoiceResp.duration);
        routineTimer.reset();
        }
    
    ChoiceResp.stop();
    // the Routine "Choice" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var ProcessChoiceMaxDurationReached;
var ProcessChoiceMaxDuration;
var ProcessChoiceComponents;
function ProcessChoiceRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'ProcessChoice' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    ProcessChoiceClock.reset();
    routineTimer.reset();
    ProcessChoiceMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from ProcessChoice_code
    if ((ChoiceResp.keys === "1")) {
        A_Counter = (A_Counter + 1);
        A_moneyCounter = (A_Counter - 1);
        A_Counter = (A_Counter + 1);
        GoodDeck = 0;
        CardAcc = 0;
        Outcome = A_Outcome;
        console.log(Outcome);
    } else {
        if ((ChoiceResp.keys === "2")) {
            B_Counter = (B_Counter + 1);
            B_moneyCounter = (B_Counter - 1);
            GoodDeck = 0;
            CardAcc = 0;
            Outcome = B_Outcome;
        } else {
            if ((ChoiceResp.keys === "3")) {
                C_Counter = (C_Counter + 1);
                C_moneyCounter = (C_Counter - 1);
                GoodDeck = 1;
                CardAcc = 1;
                Outcome = C_Outcome;
            } else {
                if ((ChoiceResp.keys === "4")) {
                    D_Counter = (D_Counter + 1);
                    D_moneyCounter = (D_Counter - 1);
                    GoodDeck = 1;
                    CardAcc = 1;
                    Outcome = D_Outcome;
                }
            }
        }
    }
    
    psychoJS.experiment.addData('ProcessChoice.started', globalClock.getTime());
    ProcessChoiceMaxDuration = null
    // keep track of which components have finished
    ProcessChoiceComponents = [];
    
    for (const thisComponent of ProcessChoiceComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function ProcessChoiceRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'ProcessChoice' ---
    // get current time
    t = ProcessChoiceClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of ProcessChoiceComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ProcessChoiceRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'ProcessChoice' ---
    for (const thisComponent of ProcessChoiceComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('ProcessChoice.stopped', globalClock.getTime());
    // Run 'End Routine' code from ProcessChoice_code
    console.log(Outcome);
    console.log(Object.getPrototypeOf(Bank));
    console.log(Object.getPrototypeOf(Outcome));
    Bank = (Bank + Outcome);
    
    // the Routine "ProcessChoice" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var SetMoneyMaxDurationReached;
var SetMoneyMaxDuration;
var SetMoneyComponents;
function SetMoneyRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'SetMoney' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    SetMoneyClock.reset();
    routineTimer.reset();
    SetMoneyMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('SetMoney.started', globalClock.getTime());
    SetMoneyMaxDuration = null
    // keep track of which components have finished
    SetMoneyComponents = [];
    
    for (const thisComponent of SetMoneyComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function SetMoneyRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'SetMoney' ---
    // get current time
    t = SetMoneyClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of SetMoneyComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var DisplayMoney;
function SetMoneyRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'SetMoney' ---
    for (const thisComponent of SetMoneyComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('SetMoney.stopped', globalClock.getTime());
    // Run 'End Routine' code from SetCurrentMoney
    if ((Outcome > 0)) {
        PlusMinus = "+ $";
        MsgColor = "green";
        Msg = "YOU WON!!!";
        DisplayMoney = Math.abs(Outcome);
    } else {
        if ((Outcome < 0)) {
            MsgColor = "red";
            PlusMinus = "- $";
            Msg = "YOU LOSE!!!";
            DisplayMoney = Math.abs(Outcome);
        }
    }
    
    // the Routine "SetMoney" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var FeedbackMaxDurationReached;
var FeedbackMaxDuration;
var FeedbackComponents;
function FeedbackRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Feedback' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    FeedbackClock.reset(routineTimer.getTime());
    routineTimer.add(3.000000);
    FeedbackMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from CardCounter_code
    if ((ChoiceResp.keys === "1")) {
        CurrentCard = "A_Card";
        choiceStr = "1";
        imgA = "card_selected.png";
        imgB = "card_choice.png";
        imgC = "card_choice.png";
        imgD = "card_choice.png";
    } else {
        if ((ChoiceResp.keys === "2")) {
            CurrentCard = "B_Card";
            choiceStr = "2";
            imgB = "card_selected.png";
            imgA = "card_choice.png";
            imgC = "card_choice.png";
            imgD = "card_choice.png";
        } else {
            if ((ChoiceResp.keys === "3")) {
                imgC = "card_selected.png";
                choiceStr = "3";
                imgB = "card_choice.png";
                imgA = "card_choice.png";
                imgD = "card_choice.png";
                CurrentCard = "C_Card";
            } else {
                if ((ChoiceResp.keys === "4")) {
                    CurrentCard = "D_Card";
                    imgD = "card_selected.png";
                    choiceStr = "4";
                    imgB = "card_choice.png";
                    imgC = "card_choice.png";
                    imgA = "card_choice.png";
                }
            }
        }
    }
    
    A2.setPos([(- 0.36), 0.1]);
    A2.setSize(0.3);
    A2.setImage(imgA);
    B2.setPos([(- 0.12), 0.1]);
    B2.setSize(0.3);
    B2.setImage(imgB);
    C2.setPos([0.12, 0.1]);
    C2.setSize(0.3);
    C2.setImage(imgC);
    D2.setPos([0.36, 0.1]);
    D2.setSize(0.3);
    D2.setImage(imgD);
    DisplayCurrentMoney_1.setColor(new util.Color(MsgColor));
    DisplayCurrentMoney_1.setText((("" + PlusMinus.toString()) + DisplayMoney.toString()));
    Message.setText(Msg.toString());
    Bank_text.setText((("Your Current Total: " + "$") + Bank.toString()));
    psychoJS.experiment.addData('Feedback.started', globalClock.getTime());
    FeedbackMaxDuration = null
    // keep track of which components have finished
    FeedbackComponents = [];
    FeedbackComponents.push(A2);
    FeedbackComponents.push(B2);
    FeedbackComponents.push(C2);
    FeedbackComponents.push(D2);
    FeedbackComponents.push(DisplayCurrentMoney_1);
    FeedbackComponents.push(Message);
    FeedbackComponents.push(Bank_text);
    FeedbackComponents.push(text_9);
    FeedbackComponents.push(text_5);
    FeedbackComponents.push(text_8);
    FeedbackComponents.push(text_7);
    
    for (const thisComponent of FeedbackComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function FeedbackRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Feedback' ---
    // get current time
    t = FeedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *A2* updates
    if (t >= 0.0 && A2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      A2.tStart = t;  // (not accounting for frame time here)
      A2.frameNStart = frameN;  // exact frame index
      
      A2.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 3 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (A2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      A2.setAutoDraw(false);
    }
    
    
    // *B2* updates
    if (t >= 0.0 && B2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      B2.tStart = t;  // (not accounting for frame time here)
      B2.frameNStart = frameN;  // exact frame index
      
      B2.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 3 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (B2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      B2.setAutoDraw(false);
    }
    
    
    // *C2* updates
    if (t >= 0.0 && C2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      C2.tStart = t;  // (not accounting for frame time here)
      C2.frameNStart = frameN;  // exact frame index
      
      C2.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 3 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (C2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      C2.setAutoDraw(false);
    }
    
    
    // *D2* updates
    if (t >= 0.0 && D2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      D2.tStart = t;  // (not accounting for frame time here)
      D2.frameNStart = frameN;  // exact frame index
      
      D2.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 3 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (D2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      D2.setAutoDraw(false);
    }
    
    
    // *DisplayCurrentMoney_1* updates
    if (t >= 0.5 && DisplayCurrentMoney_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      DisplayCurrentMoney_1.tStart = t;  // (not accounting for frame time here)
      DisplayCurrentMoney_1.frameNStart = frameN;  // exact frame index
      
      DisplayCurrentMoney_1.setAutoDraw(true);
    }
    
    frameRemains = 0.5 + 2.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (DisplayCurrentMoney_1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      DisplayCurrentMoney_1.setAutoDraw(false);
    }
    
    
    // *Message* updates
    if (t >= 0.5 && Message.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Message.tStart = t;  // (not accounting for frame time here)
      Message.frameNStart = frameN;  // exact frame index
      
      Message.setAutoDraw(true);
    }
    
    frameRemains = 0.5 + 2.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (Message.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Message.setAutoDraw(false);
    }
    
    
    // *Bank_text* updates
    if (t >= 0.5 && Bank_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Bank_text.tStart = t;  // (not accounting for frame time here)
      Bank_text.frameNStart = frameN;  // exact frame index
      
      Bank_text.setAutoDraw(true);
    }
    
    frameRemains = 0.5 + 2.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (Bank_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Bank_text.setAutoDraw(false);
    }
    
    
    // *text_9* updates
    if (t >= 0.0 && text_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_9.tStart = t;  // (not accounting for frame time here)
      text_9.frameNStart = frameN;  // exact frame index
      
      text_9.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 3 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_9.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_9.setAutoDraw(false);
    }
    
    
    // *text_5* updates
    if (t >= 0.0 && text_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_5.tStart = t;  // (not accounting for frame time here)
      text_5.frameNStart = frameN;  // exact frame index
      
      text_5.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 3 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_5.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_5.setAutoDraw(false);
    }
    
    
    // *text_8* updates
    if (t >= 0.0 && text_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_8.tStart = t;  // (not accounting for frame time here)
      text_8.frameNStart = frameN;  // exact frame index
      
      text_8.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 3 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_8.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_8.setAutoDraw(false);
    }
    
    
    // *text_7* updates
    if (t >= 0.0 && text_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_7.tStart = t;  // (not accounting for frame time here)
      text_7.frameNStart = frameN;  // exact frame index
      
      text_7.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 3 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_7.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_7.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of FeedbackComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function FeedbackRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Feedback' ---
    for (const thisComponent of FeedbackComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Feedback.stopped', globalClock.getTime());
    // Run 'End Routine' code from CardCounter_code
    CardCounter = (CardCounter + 1);
    ChoiceBlock.addData("Chosen_Card", CurrentCard);
    ChoiceBlock.addData("GoodDeck?", GoodDeck);
    ChoiceBlock.addData("GainsLosses", Outcome);
    ChoiceBlock.addData("TotalinBank", Bank);
    
    if (FeedbackMaxDurationReached) {
        FeedbackClock.add(FeedbackMaxDuration);
    } else {
        FeedbackClock.add(3.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var EndMaxDurationReached;
var _key_resp_allKeys;
var EndMaxDuration;
var EndComponents;
function EndRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'End' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    EndClock.reset();
    routineTimer.reset();
    EndMaxDurationReached = false;
    // update component parameters for each repeat
    Bank_text_2.setText((("Your Final Total: " + "$") + Bank.toString()));
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    psychoJS.experiment.addData('End.started', globalClock.getTime());
    EndMaxDuration = null
    // keep track of which components have finished
    EndComponents = [];
    EndComponents.push(thank_you);
    EndComponents.push(Bank_text_2);
    EndComponents.push(key_resp);
    
    for (const thisComponent of EndComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function EndRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'End' ---
    // get current time
    t = EndClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *thank_you* updates
    if (t >= 0.0 && thank_you.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      thank_you.tStart = t;  // (not accounting for frame time here)
      thank_you.frameNStart = frameN;  // exact frame index
      
      thank_you.setAutoDraw(true);
    }
    
    
    // *Bank_text_2* updates
    if (t >= 0.0 && Bank_text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Bank_text_2.tStart = t;  // (not accounting for frame time here)
      Bank_text_2.frameNStart = frameN;  // exact frame index
      
      Bank_text_2.setAutoDraw(true);
    }
    
    
    // *key_resp* updates
    if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      key_resp.clock.reset();
      key_resp.start();
    }
    
    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        key_resp.duration = _key_resp_allKeys[_key_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of EndComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function EndRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'End' ---
    for (const thisComponent of EndComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('End.stopped', globalClock.getTime());
    key_resp.stop();
    // the Routine "End" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
