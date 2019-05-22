/*Class Human*/
class Human{
    constructor(name){
        this.name = name;
}
}
/*Class Man*/
class Man extends Human{
    constructor(name,m_age){
        super(name);
        this.m_age = m_age
    }

    getDatas (name,m_age) {
        this.name = "Sergiy";
        this.m_age = 35 + "years";
    }
}

/*Class Woman*/
class Woman extends Human{

    constructor(name,w_age){
        super(name);
        this.w_name = name;
        this.w_age = w_age;
    }

}


class Librarian extends Woman{

    constructor(){
        super();
    }
    getBookType (type_name) {
        type_name = "Fantastic, Technique, Classic,Science";
        return type_name;
    }
}


class Nurse extends Woman{
    constructor(medical_name, anatomy,diagnosis){
        super();
        this.medical_name = medical_name;
        this.anatomy = anatomy;
        this.diagnosis = diagnosis;
    }

   getMed (med_name){
       med_name = this.medical_name;
        return med_name;
   }
   getDiagnosis (diagnos) {
        diagnos = this.diagnosis;
        return diagnos
        }
}

class Hunter extends Man{
    constructor(animal,arm){
        super();
        this.animal = animal;
        this.arm = arm;
    }

getArmName  (arm) {
    arm = "Rifle";
    return arm;
};
    getTrophy (animal) {
    return animal;
    }
}

class Worker extends Man{
    constructor(work_time){
        super();
        this.work_time = work_time;
    }


getPayment (work_time) {
    return work_time * 40
}
}
class Animal extends Hunter{
    constructor(wool){
        super();
        this.wool = wool;
    }

    goProcess () {

    };
    runProcess () {

    };
}


class Herbivorous extends Animal{
    constructor(herb_animal,plant_name){
        super();
        this.herb_animal = herb_animal;
        this.plant_name = plant_name;
    }

    getPlant (plant_name) {
      plant_name = "Dandelion";
        return plant_name
    }
}

class Predator extends Animal{
    constructor(wool,solis_name,solis_count){
        super(wool);
this.solis_name = solis_name;
this.solis_count = solis_count;
    }

getSpolis (spolis_name) {
    return spolis_name;
}
}


class Zoo {
    constructor(events){
        this.events = {};
    }
    getDiagFromNurse (diag) {
let nurse = new Nurse();
diag = nurse.getDiagnosis();
return diag;
};
    getMedFromNurse (med) {
let nurse = new Nurse();
med = nurse.getDiagnosis(med);
return med;
};
getHunter (anim_name){
  let nurse = new Hunter();
  return nurse.getTrophy(anim_name);
};
getBook (type_name){
    let libr = new Librarian();
    return libr.getBookType(type_name);
};
getTypeoftrophy(name){
    let trophyType = new Predator();
    trophyType.getSpolis(name)
}
show_result (res) {
    console.log(res);
};
}
datas = new Zoo();
book = datas.getBook();
nurse = "For diagnosis" + datas.getDiagFromNurse('Headeck') + "nurse prescribed the medicine" + datas.getMedFromNurse('Solpadein');
hunter = "Trophy James is " + datas.getHunter("Lion.")+ "This animal is" + datas.getTypeoftrophy('predator');
trophy_type = "About this trophy you can found info in" + datas.getBook('Science catalog');
datas.show_result(book);
datas.show_result(nurse);
datas.show_result(hunter);
datas.show_result(trophy_type);
