import { fb } from 'service';
import { useEffect, useState } from 'react';

export const useAuth3 = () => {
    const [authUser, setAuthUser, userEmail] = useState();

    
    useEffect(() => {
        const unsubscribe = fb.auth.onAuthStateChanged(user => {
            if(user) {
                setAuthUser(user);
                //console.log(user.email);
              //  userEmail = user.email;
              //  console.log(user.email);
                
            } else {
                setAuthUser(null);
                userEmail = "null";
            }
         });
         return unsubscribe;
    }, []);
    console.log(authUser);
    return {
        
        authUser, userEmail
        
    };
};