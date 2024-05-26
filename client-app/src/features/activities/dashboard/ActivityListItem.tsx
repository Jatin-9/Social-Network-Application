import { Link } from "react-router-dom";
import { Button, Icon, Item, ItemDescription, ItemGroup, Label, Segment, SegmentGroup } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";
import { format } from 'date-fns';
import ActivityListItemAttendee from "./ActivityListItemAttendee";

interface Props {
    activity: Activity
}
export default function ActivityListItem({ activity }: Props) {


    return (
        <SegmentGroup>
            <Segment>
                {activity.isCancelled &&
                    <Label attached='top' color='red' content='Cancelled' style={{ textAlign: 'center' }} />}
                <ItemGroup>
                    <Item>
                        <Item.Image size='tiny' circular src='/assets/user.png' />
                        <Item.Content>
                            <Item.Header as={Link} to={`/activities/${activity.id}`} />
                            {activity.title}
                            <Item.Description> Hosted by {activity.host?.displayName}</Item.Description>
                            {activity.isHost && (
                                <ItemDescription>
                                    <Label basic color='orange'>
                                        you are hosting this activity
                                    </Label>
                                </ItemDescription>
                            )}
                            {activity.isGoing && !activity.isHost && (
                                <ItemDescription>
                                    <Label basic color='green'>
                                        you are going to this activity
                                    </Label>
                                </ItemDescription>
                            )}
                        </Item.Content>
                    </Item>
                </ItemGroup>
            </Segment>
            <Segment>
                <span>
                    <Icon name='clock' /> {format(activity.date!, 'dd MMM yyyy h:mm aa')}
                    <Icon name='marker' /> {activity.venue}
                </span>
            </Segment>
            <Segment secondary>
                <ActivityListItemAttendee attendees={activity.attendees!} />
            </Segment>
            <Segment clearing>
                <span> {activity.description} </span>
                <Button
                    as={Link}
                    to={`/activities/${activity.id}`}
                    color='teal'
                    floated='right'
                    content='View'
                />
            </Segment>
        </SegmentGroup>
    )
}