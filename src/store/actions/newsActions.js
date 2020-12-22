import * as actions from "./index"

var testObject =  [{"id": 1 , "approved":"false", "time":"12-01-2020","title":"How to become an actor",
                    "text":"Updating the European Parliament on an EU leaders summit last week, Mrs von der Leyen said: As things stand, I cannot tell you whether there will be a deal or not",
                   },
                   {"id": 2 , "approved":"false", "time":"12-01-2020","title":"How to become a teacher",
                   "text":"Updating the European Parliament on an EU leaders summit last week, Mrs von der Leyen said: As things stand, I cannot tell you whether there will be a deal or not",
                   } ,
                   {"id": 3 ,"approved":"false", "time":"12-01-2020","title":"How to become a doctor",
                   "text":"Updating the European Parliament on an EU leaders summit last week, Mrs von der Leyen said: As things stand, I cannot tell you whether there will be a deal or not",
                   } 
                 ]

localStorage.setItem('testObject', JSON.stringify(testObject));


export const getNews = () => dispatch => {

    dispatch({type: actions.GET_NEWS,
              news:testObject })
};



export const getOne = id => dispatch => {
    let idNumber= Number.parseInt(id)
    let choosenElArray;
    for (var i=0;i<testObject.length;i++) {
        if(testObject[i].id===idNumber){
           choosenElArray=i;
        }
    }
    dispatch({
        type: actions.GET_ONE, 
        one: testObject[choosenElArray] 
    })
}


export const addPost = (one, history) => async dispatch => {
    const currentDate = new Date();
    const currentDayOfMonth = currentDate.getDate();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
    const time = currentDayOfMonth + "-" + (currentMonth + 1) + "-" + currentYear;

    one.id=testObject.length+1;
    one.time=time;
    testObject.push(one);
    dispatch({type:actions.ADD_NEWS});
    history.push('/')
}

export const approveOne = (id,history) => async dispatch => {
    let idNumber= Number.parseInt(id);
    let choosenElArray;
    for (var i=0;i<testObject.length;i++) {
        if(testObject[i].id===idNumber){
           testObject[i].approved="true";
           choosenElArray=i
       }
   }
   dispatch({
    type:actions.APPROVE_ONE,
    one:testObject[choosenElArray]
})
  history.replace("/")  
}

export const deleteNews = (id,history) => async dispatch => {
   let idNumber= Number.parseInt(id)
    for (var i=0;i<testObject.length;i++) {
        if(testObject[i].id===idNumber){
           testObject.splice(i, 1);
       }
    }
    localStorage.setItem('testObject', JSON.stringify(testObject)); 
    dispatch({
        type:actions.DELETE_NEWS,
        one:null
    })
    history.replace("/")  
}


export const onFindNews = (search) => async dispatch=> {
    dispatch({
        type:actions.SEARCH_NEWS,
        news:testObject.filter(filtered=>filtered.title.includes(search))
    })
}


