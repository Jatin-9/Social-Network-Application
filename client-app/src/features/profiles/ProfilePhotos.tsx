import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import { Button, Card, CardGroup, Grid, GridColumn, Header, Image, TabPane } from 'semantic-ui-react';
import { Profile } from '../../app/models/profile';
import { useStore } from '../../app/stores/store';
import PhotoUploadWidget from '../../app/common/imageUpload/PhotoUploadWidget';

interface Props {
    profile: Profile
}
export default observer(function ProfilePhotos({ profile }: Props) {
    const { profileStore: { isCurrentUser } } = useStore();
    const [addPhotoMode, setAddPhotoMode] = useState(false);
    return (
        <TabPane>
            <Grid>
                <GridColumn width={16}>
                    <Header floated='left' icon='image' content='Photos' />
                    {isCurrentUser && (
                        <Button floated='right' basic
                            content={addPhotoMode ? 'Cancel' : 'Add Photo'}
                            onClick={() => setAddPhotoMode(!addPhotoMode)} />
                    )}
                </GridColumn>
                <GridColumn width={16}>
                    {addPhotoMode ? (
                        <PhotoUploadWidget />
                    ) : (
                        <CardGroup itemsPerRow={5}>
                            {profile.photos?.map(photo => (
                                <Card key={photo.id}>
                                    <Image src={photo.url} />
                                </Card>
                            ))}
                        </CardGroup>)}
                </GridColumn>
            </Grid>
        </TabPane>
    )
})