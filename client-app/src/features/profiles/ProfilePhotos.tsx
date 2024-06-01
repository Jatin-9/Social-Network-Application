import { observer } from 'mobx-react-lite';
import React from 'react';
import { Card, CardGroup, Header, Image, TabPane } from 'semantic-ui-react';
import { Profile } from '../../app/models/profile';

interface Props {
    profile: Profile
}
export default observer(function ProfilePhotos({ profile }: Props) {
    return (
        <TabPane>
            <Header icon='image' content='Photos' />
            <CardGroup itemsPerRow={5}>
                {profile.photos?.map(photo => (
                    <Card key={photo.id}>
                        <Image src={photo.url} />
                    </Card>
                ))}
            </CardGroup>
        </TabPane>
    )
})