import { useState, useEffect } from "react"
import useAuth from "../../hooks/useAuth";
import { getDoc, doc } from "@firebase/firestore"
import { db } from "../../utils/firebase"
import DoctorProfileScreen from "./DoctorProfileScreen"
import PatientProfileScreen from "./PatientProfileScreen"

const Profile = () => {
    const [profile, setProfile] = useState(null)
    const { user } = useAuth();
    const fetchProfile = async () => {
        const profileRef = doc(db, "users", user.uid);
        const profileSnapshot = getDoc(profileRef);
        setProfile({ id: profileSnapshot.id, email: user.email, ...profileSnapshot.data() })
    }

    useEffect(() => fetchProfile(), []);

    return profile.isDoctor ? <DoctorProfileScreen /> : <PatientProfileScreen />
}

export default Profile;