import { firebase, githubProvider, googleProvider } from '../firebase/firebase';

export const login = (uid) => ( {
    type: 'LOGIN',
    uid
} );

export const startLogin = (providerName) => {
    return () => {
        switch (providerName.toUpperCase()) {
            case 'GOOGLE':
                return firebase.auth().signInWithPopup(googleProvider);
            case 'GITHUB':
                return firebase.auth().signInWithPopup(githubProvider);
        }
    };
};

export const logout = () => ( {
    type: 'LOGOUT'
} );

export const startLogout = () => {
    return () => {
        return firebase.auth().signOut();
    }
};
