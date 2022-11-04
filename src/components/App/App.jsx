import { Switch, Route, useHistory } from 'react-router-dom';
import { Login, Signup, Chat, Admin, TeacherUI } from 'components';
import {useAuth, useResolved, fb} from 'hooks';
import { useEffect } from 'react';
//import {fb} from 'service';

export const App = () => {
  const history = useHistory();
  const {authUser} = useAuth();
  const authResolved = useResolved(authUser);
  const admins = ["serikczarnecki@landmark.edu", "GeraldBelton@landmark.edu", "GabriellaOrtega@landmark.edu"];
  const teachers = ["johnrusso@landmark.edu", "kevinkeith@landmark.edu","karinaassiter@landmark.edu"];
  const students = ["JonathanGerraughty@landmark.edu","student1@landmark.edu","student3@landmark.edu"];


  useEffect(() => {
		fb.firestore.collection('mock userdata').where('gender', '==', 'Female').get().then(res => {
			//const FemUsers = res.docs[0]?.data(); 
			console.log(res.docs.map(snap=>snap.data()));
		});
	}, []);
  
  useEffect(() => {

  const userE = fb.auth.onAuthStateChanged(user => {
    //console.log(user.email);
  });
  //console.log(userE.user);
    //let isMounted = true;
   //var lla = JSON.parse(authUser);
  // console.log(authUser);
  //  console.log(authUser, authResolved);
  }, [authUser, authResolved]); //test to see if it's printing

  useEffect(() => {
    const userE = fb.auth.onAuthStateChanged(user => {
      //console.log("authority email" + user.email);
      if (authResolved) {
        if(!!authUser) {
          if(admins.includes(user.email)) {
            console.log("admin failed");
            history.push('/admin');
          } else if (teachers.includes(user.email)) {
            history.push('/teacher');
            console.log("teacher failed");
          } else if (students.includes(user.email)) {
            console.log("user is for some reason being sent to /");
            history.push('/');
          } else {
            history.push('/login');
          }

        
        console.log(user.email);
        }
      //  history.push(!!authUser ? '/' : '/login');
      }

  
  });
  }, [authResolved, authUser, history]);
  return (
    <div className='app'>
    <Switch>
      <Route path="/" exact component={Chat} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/admin" component={Admin}/>
      <Route path="/teacher" component={TeacherUI}/>
    </Switch>
    </div>
  );
};
