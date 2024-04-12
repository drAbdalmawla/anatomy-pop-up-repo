"# anatomy-pop-up-repo" 


# how to put a question

1) simple object
 {
  "name": "sartoris",
  "origin": "anterior superior iliac spine",
  "insertion": "upper medial part of tibia",
  "nerve": "femoral",
    "action": [
    "flexion in hip",
    "abduction in hip",
    "lateral rotation in hip",
    "flexion in knee"
    ]
  }
  
1. type e.g. "origin"
2. question => {type} of obj.name
3. trueAnswer => obj[type] e.g. "anterior superior iliac spine"
4. falseAnswers = []
5. if( style == "choice" ) {
  for(let i = 0 ; i < 3 ; i++) {
    falseAnswers.push( peripheral[type] )
  }
}


_______________________________

# in data.json

determine object's data  ==>  values = simple or multi or heads
origin | inserion
       : "text"
         "text (or) the same thing"
         ["text 1", "text 2" , ... ]
         {
           "head 1" : "text of origin 1" ,
           "head 2" : "text of origin 2"
         }
         
nerve: "" 
       []
       
action: ""
        []
        {}
