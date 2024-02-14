const dayToday = "Tuesday";

const num = 10;

switch (dayToday) {
  case "Monday":
    console.log("Color is gray");
    break;
  case "Tuesday":
    console.log("Color is brown");
    break;
  case "Wednesday":
    console.log("Color is ocre yellow");
    break;
  case "Thursday":
    console.log("Color is black");
    break;
  case "Firday":
    console.log("Color is pink");
    break;
  case "Saturday":
    console.log("Color is orange");
    break;
  case "Sunday":
    console.log("Color is green");
    break;
  default:
    throw new Error("Day is recognized!");
}



switch (dayToday) {
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Firday":
      console.log("Color is gray for week days");
      break;
    case "Saturday":
    case "Sunday":
      console.log("Color is orange");
      break;
    default:
      throw new Error("Day is recognized!");
  }




switch (num){
    case 0:{
        let message = "Too small";
        break;
    }
    case 10:{
        let message = "small";
    }
    default:
        console.log("----");
}


let smt = 4354;