function Robot() {
    this.message = "Я Robot – я просто працюю";
}
Robot.prototype.setMessage = function (data){
    this.message = data;
};
Robot.prototype.work = function () {
    return this.message;
};
robot = new Robot();
robot.setMessage(robot.message);
// console.log(robot.work());
function CofeeRobot(){
    Robot.call(this);
}
CofeeRobot.prototype.setMessage = function (data){
    this.message = data;
};
CofeeRobot.prototype.work = function () {
    return this.message;
};
var cofeeRobot = new CofeeRobot();
CofeeRobot.prototype = Object.create(Robot.prototype);
CofeeRobot.prototype.constructor = CofeeRobot;
cofeeRobot.setMessage("Я CoffeRobot – я варю каву");
// console.log(cofeeRobot.work());

function RobotDancer() {
    Robot.call(this);
}
RobotDancer.prototype = Object.create(Robot.prototype);
RobotDancer.prototype.constructor = RobotDancer;
var robotDancer = new RobotDancer();
robotDancer.setMessage("Я RobotDancer – я просто танцюю");
// console.log(robotDancer.work());

function RobotCoocker() {
    Robot.call(this);
}
RobotCoocker.prototype = Object.create(Robot.prototype);
RobotCoocker.prototype.constructor = RobotCoocker;
var robotCoocker = new RobotCoocker();
robotCoocker.setMessage("Я RobotCoocker – я просто готую");
// console.log(robotCoocker.work());

function Main(){
    Robot.call(this);
}
var robot = new Robot();
Main.prototype = Object.create(Robot.prototype);
Main.prototype.constructor = Main;
Main.prototype.setWork = function () {
    var RobotArray =  [robot,cofeeRobot,robotDancer,robotCoocker];
    var i;
    for(i = 0; i<RobotArray.length;i++) {
        console.log(RobotArray[i].work());
    }
};

var m = new Main();
m.setWork();