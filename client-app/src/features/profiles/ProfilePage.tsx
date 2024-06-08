import { Grid, GridColumn } from "semantic-ui-react";
import ProfileHeader from "./ProfileHeader";
import ProfileContent from "./ProfileContent";
import { observer } from "mobx-react-lite";
import { useParams } from "react-router-dom";
import { useStore } from "../../app/stores/store";
import { useEffect } from "react";
import LoadingComponent from "../../app/layout/LoadingComponents";

export default observer(function ProfilePage() {
    const { username } = useParams<{ username: string }>();
    const { profileStore } = useStore();
    const { loadingProfile, profile, loadProfile, setActiveTab } = profileStore;

    useEffect(() => {
        if (username) {
            loadProfile(username);
            return () => {
                setActiveTab(0);
            }
        };
    }, [loadProfile, username, setActiveTab])

    if (loadingProfile) return <LoadingComponent content="Loading Profile..." />

    return (
        <Grid>
            <GridColumn width={16} >
                {profile &&
                <>
                <ProfileHeader profile = {profile}/>
                <ProfileContent profile = {profile}/>
                </>}    
            </GridColumn>
        </Grid>
    )
})