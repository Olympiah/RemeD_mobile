import { createContext, useContext, useState, useEffect, useMemo } from "react"
import { onAuthStateChanged, signOut } from "@firebase/auth"
import { auth } from "../utils/firebase";
import sm_notes from "../utils/sample_notes"

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [error, setError] = useState(null)
    const [user, setUser] = useState(null);
    const [channel, setChannel] = useState(null);
    const [loadingInitial, setLoadingInitial] = useState(true)
    const [loading, setLoading] = useState(false)
    const [notes, setNotes] = useState(sm_notes);


    useEffect(() =>
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            } else {
                setUser(null)
            }
            setLoadingInitial(false)
        }),
        []
    );

    const logout = async () => {
        setLoading(true)

        signOut(auth)
            .catch(err => setError(err))
            .finally(() => setLoading(false))
    };

    const memoedValue = useMemo(
        () => ({
            user,
            loading,
            error,
            logout,
            channel,
            setChannel,
            notes,
            setNotes,
        }),
        [user, loading, error, notes]
    );


    return (
        <AuthContext.Provider value={memoedValue}>
            {!loadingInitial && children}
        </AuthContext.Provider>
    );

};

export default function useAuth() {
    return useContext(AuthContext)
}