// Initialize Firebase
  var config = {
    apiKey: "AIzaSyDgFgcmDm5gwBlUoc9cv6174w5gHjiPkU0",
    authDomain: "fitness-fun-project-1.firebaseapp.com",
    databaseURL: "https://fitness-fun-project-1.firebaseio.com",
    projectId: "fitness-fun-project-1",
    storageBucket: "",
    messagingSenderId: "381935885658"
  };
  
  firebase.initializeApp(config);


  var dataRef = firebase.database();
  
    //button to nutrion data
    $("#add-nutrion-btn").on("click", function(event){
        event.preventDefault();
   //get nutrion input data
        var food = $("#food-input").val().trim();
        var serving = $("#serving-input").val().trim();
        var calories = $("#cal-input").val().trim();
        var fat = $("#fat-input").val().trim();
        var carbs = $("#carbs-input").val().trim();
        var protein = $("#protein-input").val().trim();
        var meal = $("#meal-input").val().trim();
       //var currentTime = format(Date.now(),"MM/DD/YY");
    


  console.log(food);
  console.log(serving);
  console.log(calories);
  console.log(carbs);
  console.log(protein);
  //console.log(currentTime);
  //console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));

  //Creates local "temporary" object for holding food data
     var NutritionFact ={
        food: food,
        serving: serving,
        fat:fat,
        calories: calories,
        carbs: carbs,
        protein:protein,
        meal:meal
        //currentTime:currentTime
    };
      dataRef.ref().push(NutritionFact) 
  
  $("#food-input").val("");
    $("#serving-input").val("");
    $("#cal-input").val("");
    $("#fat-input").val("");
    $("#carbs-input").val("");
    $("#protein-input").val("");
  
  });
  
   //. Create Firebase event for adding nutrion to a row in the html when a user adds an entry
    dataRef.ref().on("child_added", function(childSnapshot) {
      console.log(childSnapshot.val());
  
      var fooddb = childSnapshot.val().food;
      var servingdb = childSnapshot.val().serving;
      var caloriesdb = childSnapshot.val().calories;
      var fatdb = childSnapshot.val().fat;
      var carbsdb = childSnapshot.val().carbs;
      var proteindb = childSnapshot.val().protein;
      //var mealdb = childSnapshot.val().meal;
  
      // Create the new row
    var nutrionRow = $("<tr>").append(
      $("<td>").text(fooddb),
      $("<td>").text(servingdb),
      $("<td>").text(caloriesdb),
      $("<td>").text(fatdb),
      $("<td>").text(carbsdb),
      $("<td>").text(proteindb),
      
    );
    
   // Append the new row to the table
   $("#nutrition-table > tbody").append(nutrionRow);
  });